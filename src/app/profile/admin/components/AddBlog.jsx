"use client"
import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
// Dynamically import JoditEditor to ensure it only runs in the browser
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
import { createBlog } from "../_actions/createBlog";

function AddBlog() {
    const editor = useRef(null);
    const [title, setTitle] = useState("");
    const [intro, setIntro] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [posterFile, setPosterFile] = useState(null);
    const [bannerFile, setBannerFile] = useState(null);
    const [images, setImages] = useState([]);
    const fileInputRef = useRef(null);
    const bannerInputRef = useRef(null);
    const imagesInputRef = useRef(null);

    const handlePosterChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPosterFile(file);
        }
    };

    const handleImagesChange = (e) => {
        setImages(Array.from(e.target.files));
    };
    const handleBannerChange = (e) => {
        const file = e.target.files[0];
        if (file) setBannerFile(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess("");
        setError("");
        if (!title.trim() || !intro.trim() || !content.trim() || !posterFile) {
            setError("All fields are required.");
            return;
        }
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("blogData", JSON.stringify({
                title,
                intro,
                content
            }));
            formData.append("poster", posterFile);
            // The blog file is the HTML content as a Blob
            const blogBlob = new Blob([content], { type: "text/html" });
            formData.append("blog", blogBlob, "blog.html");
            images.forEach((img) => formData.append("images", img));
            if (bannerFile) {
                formData.append("banner", bannerFile);
            }

            const response = await createBlog(formData);
            if (response.success) {
                setSuccess("Blog submitted successfully!");
                setTitle("");
                setIntro("");
                setContent("");
                setPosterFile(null);
                setImages([]);
                setBannerFile(null);
            } else {
                setError(response.message || "Failed to submit blog.");
            }
        } catch (err) {
            setError("Failed to submit blog.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center m-3 w-full h-fit border-2 border-primary rounded-3xl p-4 shadow text-black">
            <form onSubmit={handleSubmit} className="my-10 flex flex-col items-center gap-4">
                <label className="block  font-medium text-white">Blog Title</label>
                <input
                    type="text"
                    placeholder="Blog Title"
                    className="border rounded px-3 py-2"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    disabled={loading}
                    required
                />
                <label className="block font-medium text-white">Summary or Quote</label>
                <textarea
                    placeholder="Short Intro / Summary / Quote"
                    className="border rounded px-3 mb-2"
                    value={intro}
                    onChange={(e) => setIntro(e.target.value)}
                    rows={2}
                    disabled={loading}
                    required
                />
                <div>
                    <label className="block mb-1 font-medium text-white">Content</label>
                    <JoditEditor
                        ref={editor}
                        value={content}
                        onBlur={setContent}
                        onChange={() => { }}
                        className="text-black"
                    />
                </div>
                <div className="w-full items-center flex flex-col text-white ">
                    <label htmlFor="blogPoster" className="mb-1 font-medium text-white text-center">Event Poster</label>
                    <div className="flex flex-col items-center gap-1 mt-4 mb-4">
                        <button
                            type="button"
                            className="bg-primary text-primary-foreground px-4 py-2 rounded shadow hover:bg-primary-hover transition-colors font-semibold"
                            onClick={() => fileInputRef.current && fileInputRef.current.click()}
                        >
                            Choose File
                        </button>
                        <span className="text-sm text-muted-foreground truncate max-w-xs">
                            {posterFile ? posterFile.name : "No file chosen"}
                        </span>
                    </div>
                    <input
                        type="file"
                        id="blogPoster"
                        name="poster"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={handlePosterChange}
                        accept="image/*"
                        required
                    />
                </div>
                {/* banner  */}
                <div className="w-full items-center flex flex-col text-white ">
                    <label htmlFor="blogBanner" className="mb-1 font-medium text-white text-center">Banner Image (or use default)</label>
                    <div className="flex flex-col items-center gap-1 mt-2 mb-6">
                        <button
                            type="button"
                            className="bg-primary text-primary-foreground px-4 py-2 rounded shadow hover:bg-primary-hover transition-colors font-semibold"
                            onClick={() => bannerInputRef.current && bannerInputRef.current.click()}
                        >
                            Choose Banner
                        </button>
                        <span className="text-sm text-muted-foreground truncate max-w-xs">
                            {bannerFile ? bannerFile.name : "No banner chosen"}
                        </span>
                    </div>
                    <input
                        type="file"
                        id="blogBanner"
                        name="banner"
                        ref={bannerInputRef}
                        className="hidden"
                        onChange={handleBannerChange}
                        accept="image/*"
                    />
                </div>
                <div className="w-full items-center flex flex-col text-white ">
                    <label htmlFor="blogImages" className="mb-1 font-medium text-white text-center">Additional Images (optional)</label>
                    <div className="flex flex-col items-center gap-1 mt-2 mb-6">
                        <button
                            type="button"
                            className="bg-primary text-primary-foreground px-4 py-2 rounded shadow hover:bg-primary-hover transition-colors font-semibold"
                            onClick={() => imagesInputRef.current && imagesInputRef.current.click()}
                        >
                            Choose Images
                        </button>
                        <span className="text-sm text-muted-foreground truncate max-w-xs">
                            {images.length > 0 ? `${images.length} file(s) selected` : "No images chosen"}
                        </span>
                    </div>
                    <input
                        type="file"
                        id="blogImages"
                        name="images"
                        ref={imagesInputRef}
                        className="hidden"
                        onChange={handleImagesChange}
                        accept="image/*"
                        multiple
                    />
                </div>

                {error && <div className="text-red-500">{error}</div>}
                {success && <div className="text-green-600">{success}</div>}
                <button type="submit" className="w-fit self-center bg-red-500 text-white font-bold text-primary-foreground py-2 px-4 rounded hover:bg-primary-hover transition-colors">
                    {loading ? "Submitting..." : "Submit Blog"}
                </button>
            </form>

            {content && (
                <div className="my-8 w-full">
                    <h3 className="text-2xl font-semibold mb-6 text-white text-center">Preview</h3>
                    <div className="bg-card/95 backdrop-blur-sm rounded-2xl shadow-xl border border-border/50 p-8 md:p-12">
                        <div className="mb-8">
                            {title && (
                                <h1 className="text-4xl md:text-5xl font-medium text-card-foreground mb-6 leading-tight tracking-tight">
                                    {title}
                                </h1>
                            )}
                            {intro && (
                                <p className="text-xl text-foreground/80 leading-relaxed border-l-2 border-primary/50 pl-6 italic">
                                    {intro}
                                </p>
                            )}
                        </div>
                        
                        <div 
                            className="max-w-none text-xl"
                            style={{
                                lineHeight: '1.7',
                            }}
                            dangerouslySetInnerHTML={{ __html: content }}
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
                            div :global(ul), div :global(ol) {
                                margin-bottom: 1.5rem;
                                padding-left: 2rem;
                                color: var(--foreground);
                            }
                            div :global(li) {
                                margin-bottom: 0.5rem;
                                line-height: 1.6;
                            }
                            div :global(blockquote) {
                                border-left: 4px solid var(--primary);
                                padding-left: 1.5rem;
                                margin: 1.5rem 0;
                                font-style: italic;
                                color: var(--foreground);
                            }
                            div :global(code) {
                                background-color: var(--muted);
                                padding: 0.2rem 0.4rem;
                                border-radius: 0.25rem;
                                font-size: 0.875rem;
                                color: var(--foreground);
                            }
                            div :global(pre) {
                                background-color: var(--muted);
                                padding: 1rem;
                                border-radius: 0.5rem;
                                overflow-x: auto;
                                margin: 1.5rem 0;
                            }
                        `}</style>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AddBlog