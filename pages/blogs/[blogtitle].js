import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Header from '../../components/Header';


export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      return slug
    })
    return data
  })(require.context('../../blogs', true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/blogs/${slug}`)

  return {
    paths,
    fallback: false,
  }
}
export async function getStaticProps({ ...ctx }) {
  const { blogtitle } = ctx.params

  const content = await import(`../../blogs/${blogtitle}.md`)
  // console.log(content)
  const data = matter(content.default)
  // console.log(data)
  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}


export default function Blog({ setTitle, frontmatter, markdownBody }) {
  return (
    <>
    <div className="blog">

    
      <Header pageTitle={frontmatter.title} description={frontmatter.title} />
      <main className="post">
        <div className="post_wrap">
          <div className="main__text">Blogs</div>
          <h1 className="post-title" >{frontmatter.title}</h1>
          <p className="post-date">{frontmatter.date}</p>
          <div>
            <ReactMarkdown source={markdownBody} />
          </div>

          <hr />

          <Link href="/blog">
            <a>← Back to post list</a>
          </Link>
        </div>
      </main>
      </div>
    </>
  )
}
