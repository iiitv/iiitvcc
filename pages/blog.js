import React from 'react'
import Link from 'next/link'
import matter from 'gray-matter'
import Header from '../components/Header'
import Footer from '../components/Footer'

export async function getStaticProps() {
  const posts = ((blog) => {
    // console.log(blog)
    const keys = blog.keys()
    const values = keys.map(blog)
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context('../blogs', true, /\.md$/))

  // console.log(posts)

  return {
    props: {
      posts
    },
  }
}

function Blog({ posts, ...props }) {
  return (
    <React.Fragment>
      <Header pageTitle="Blog" description="Blog Page" />
      <main className="main__blog">
        <div className="blog_text">CODING</div>
        <div className="main__blog__wrap">
          <div className="main__text">Blogs</div>
          {!posts && <div>No posts! 📝✏️</div>}
          {posts &&
            posts.map((post) => {
              return (
                <div key={post.slug}>
                  <Link href={{ pathname: `/blogs/${post.slug}` }}>
                    <h2 className="blog-title"><a>{post.frontmatter.title}</a></h2>
                  </Link>
                  <small>{post.frontmatter.date}</small>
                  <p className="blog-desc">{post.markdownBody.substring(0, 120) + '...'}</p>
                </div>
              )
            })}
        </div>
        <Footer />
      </main>
      {/*<Footer />*/}
    </React.Fragment>
  )
}

export default Blog;