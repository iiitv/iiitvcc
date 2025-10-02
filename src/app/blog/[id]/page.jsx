"use client"
import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { likeBlog } from "./_actions/like"
import { dislikeBlog } from "./_actions/dislike"
import Loader from "@/components/ui/loader"
import { Playfair_Display, Inter } from "next/font/google"

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
})

const inter = Inter({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function BlogPage() {
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [likes, setLikes] = useState(0)
  const [liked, setLiked] = useState(false)
  const [likeLoading, setLikeLoading] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const routeParams = useParams()
  const blogId = routeParams?.id?.toString()

  useEffect(() => {
    async function fetchBlog() {
      setLoading(true)
      setError("")
      try {
        const res = await fetch(`/api/v1/get/blog?id=${blogId}`)
        const data = await res.json()
        if (data.success && data.blog) {
          setBlog(data.blog)
        } else {
          setError("Blog not found")
        }
      } catch (err) {
        setError("Failed to fetch blog")
      } finally {
        setLoading(false)
      }
    }
    if (blogId) fetchBlog()
  }, [blogId])

  useEffect(() => {
    if (!blog) return
    setLikes(typeof blog.likes === "number" ? blog.likes : 0)
    try {
      const key = `liked_blog_${blog.id || blogId}`
      const val = typeof window !== "undefined" ? localStorage.getItem(key) : null
      setLiked(val === "1")
    } catch {}
  }, [blog, blogId])

  const authorName = useMemo(() => blog?.writer_username || blog?.writer_name || blog?.author || "Unknown", [blog])
  const posterSrc = blog?.bannerUrl || "/iiitvcc_banner.png"
  const readingTimeLabel = useMemo(() => {
    if (!blog) return "1 sec read"
    const WPM = 200
    const introWords = (blog.intro || "").trim().split(/\s+/).filter(Boolean).length
    const bodyText = blog.content ? blog.content.replace(/<[^>]*>/g, " ") : ""
    const bodyWords = bodyText.trim().split(/\s+/).filter(Boolean).length
    const totalWords = introWords + bodyWords

    const minutes = totalWords / WPM
    if (minutes < 1) {
      const seconds = Math.max(1, Math.round(minutes * 60))
      return `${seconds} sec read`
    }
    const minsRounded = Math.round(minutes)
    return `${minsRounded} min read`
  }, [blog])

  const imageList = blog?.images || []
  const openLightbox = (idx) => {
    setLightboxIndex(idx)
    setLightboxOpen(true)
  }
  const closeLightbox = () => setLightboxOpen(false)
  const prevImage = () => setLightboxIndex((i) => (i - 1 + imageList.length) % imageList.length)
  const nextImage = () => setLightboxIndex((i) => (i + 1) % imageList.length)

  const likeAction = async () => {
    if (!blogId || likeLoading) return
    const key = `liked_blog_${blog.id || blogId}`
    setLikeLoading(true)
    
    // Store current state for potential rollback
    const previousLiked = liked
    const previousLikes = likes
    
    // Optimistically update UI immediately
    if (liked) {
      setLiked(false)
      setLikes((l) => Math.max(0, l - 1))
      try {
        localStorage.setItem(key, "0")
      } catch {}
    } else {
      setLiked(true)
      setLikes((l) => l + 1)
      try {
        localStorage.setItem(key, "1")
      } catch {}
    }
    
    try {
      let res;
      const formData = new FormData()
      formData.append('id', blogId)
      
      if (previousLiked) {
        res = await dislikeBlog(null, formData)
        if (!res?.success) throw new Error(res?.message || "Failed to dislike")
      } else {
        res = await likeBlog(null, formData)
        if (!res?.success) throw new Error(res?.message || "Failed to like")
      }
      // Update with actual server count if available
      if (typeof res.likes === "number") setLikes(res.likes)
    } catch (e) {
      // Revert UI changes on error
      setLiked(previousLiked)
      setLikes(previousLikes)
      try {
        localStorage.setItem(key, previousLiked ? "1" : "0")
      } catch {}
    } finally {
      setLikeLoading(false)
    }
  }

  useEffect(() => {
    const onKey = (e) => {
      if (!lightboxOpen) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") prevImage()
      if (e.key === "ArrowRight") nextImage()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightboxOpen, imageList.length])

  if (loading) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center bg-background ${inter.className}`}>
        <Loader />
        <p className="mt-6 text-muted-foreground text-sm tracking-wide">Loading article...</p>
      </div>
    )
  }

  if (error)
    return (
      <div className={`min-h-screen flex items-center justify-center p-6 bg-background ${inter.className}`}>
        <div className="max-w-md w-full p-8 border border-border bg-card rounded-lg shadow-sm">
          <h2 className={`text-2xl font-medium mb-3 text-card-foreground ${playfair.className}`}>
            Unable to load article
          </h2>
          <p className="mb-6 text-muted-foreground">{error}</p>
          <div className="flex gap-3">
            <button
              onClick={() => location.reload()}
              className="px-5 py-2.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              Try again
            </button>
            <Link
              href="/"
              className="px-5 py-2.5 rounded-md border border-border hover:bg-secondary transition-colors text-sm font-medium text-foreground"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    )
  if (!blog) return null

  return (
    <div className={`min-h-screen bg-background ${inter.variable} ${playfair.variable}`}>
      <div className="relative h-[40vh] md:h-[45vh] lg:h-[50vh] w-full">
        <Link
          href="/"
          aria-label="Back to home"
          className="absolute top-6 left-6 z-[5] inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-black bg-white hover:bg-white/50 rounded-full border border-white  transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M15 6l-6 6 6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Back</span>
        </Link>
        <Image
          src={posterSrc || "/placeholder.svg"}
          alt={blog.title || "Blog cover"}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <article className={`max-w-4xl mx-auto px-6 -mt-24 relative z-2`}>
        <div className={`bg-card/95 backdrop-blur-sm rounded-2xl shadow-xl border border-border/50 p-8 md:p-12 mb-12 ${inter.className}`}>
          <div className="flex items-center gap-3 text-lg text-primary mb-4">
            <span>{authorName}</span>
            <span>•</span>
            <span>{readingTimeLabel}</span>
            {blog?.created_at && (
              <>
                <span>•</span>
                <time dateTime={blog.created_at}>
                  {new Date(blog.created_at).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </>
            )}
          </div>
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-medium text-card-foreground mb-6 leading-tight tracking-tight ${playfair.className}`}
          >
            {blog.title}
          </h1>
          {blog.intro && (
            <p className="text-xl text-foreground/80 text-white/50 leading-relaxed border-l-2 border-primary pl-6 italic">
              {blog.intro}
            </p>
          )}
        </div>

        <div className="bg-card/95 backdrop-blur-sm rounded-2xl shadow-sm border border-border/50 p-8 md:p-12 mb-8">
          <div 
            className={`max-w-none text-xl ${inter.className}`}
            style={{
              lineHeight: '1.7',
            }}
            dangerouslySetInnerHTML={{ __html: blog.content || "" }} 
          />
          
          <style jsx>{`
            div :global(h1) {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
              margin-top: 2rem;
              color: var(--card-foreground);
              line-height: 1.2;
            }
            div :global(h2) {
              font-size: 2rem;
              font-weight: 600;
              margin-bottom: 1rem;
              margin-top: 2rem;
              color: var(--card-foreground);
              line-height: 1.3;
            }
            div :global(h3) {
              font-size: 1.5rem;
              font-weight: 500;
              margin-bottom: 0.75rem;
              margin-top: 1.5rem;
              color: var(--card-foreground);
              line-height: 1.4;
            }
            div :global(p) {
              margin-bottom: 1.5rem;
              line-height: 1.7;
              color: var(--foreground);
            }
            div :global(section) {
              margin-bottom: 2rem;
            }
            div :global(section:last-child) {
              margin-bottom: 0;
            }
          `}</style>
        </div>

        {blog.images && blog.images.length > 0 && (
          <section className="bg-card/95 backdrop-blur-sm rounded-2xl shadow-sm border border-border/50 p-8 md:p-12 mb-8">
            <h2 className={`text-3xl font-medium mb-8 text-card-foreground ${playfair.className}`}>Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {blog.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => openLightbox(idx)}
                  className="group relative aspect-square overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-all duration-300"
                  aria-label={`View image ${idx + 1}`}
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`Gallery image ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
                </button>
              ))}
            </div>
          </section>
        )}

        <div className="bg-card/95 backdrop-blur-sm rounded-2xl shadow-sm border border-border/50 p-8 md:p-12 mb-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={likeAction}
                disabled={likeLoading}
                className={`cursor-pointer inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background font-medium ${
                  liked
                    ? "bg-primary/20 border-primary text-primary hover:bg-primary/30"
                    : "bg-secondary border-border text-foreground hover:bg-secondary/80 hover:border-primary/50"
                } ${likeLoading ? "opacity-70 cursor-not-allowed" : ""}`}
                aria-pressed={liked}
                aria-label={liked ? "Liked" : "Like this article"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill={liked ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-all duration-300"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <span>{liked ? "Liked" : "Like"}</span>
                <span className="text-sm opacity-70">({likes})</span>
              </button>
            </div>
            <ShareActions title={blog.title} />
          </div>
        </div>
      </article>

      {lightboxOpen && imageList.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <div className="relative w-[90vw] h-[80vh] max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={imageList[lightboxIndex] || "/placeholder.svg"}
              alt={`Image ${lightboxIndex + 1} of ${imageList.length}`}
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              </svg>
            </button>
            {imageList.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
                  {lightboxIndex + 1} / {imageList.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function ShareActions({ title }) {
  const [copied, setCopied] = useState(false)
  const url = typeof window !== "undefined" ? window.location.href : ""

  const copy = async () => {
    if (url) {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background font-medium"
      title="Share article"
    >
      {copied ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Link Copied!</span>
        </>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="16 6 12 2 8 6" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="12" y1="2" x2="12" y2="15" strokeLinecap="round" />
          </svg>
          <span>Share</span>
        </>
      )}
    </button>
  )
}
