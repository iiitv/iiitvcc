
import Image from 'next/image';
export default function Blogs() {
    const blogCoverImage = "/blog_cover_poster.png";
    return(
        <div className='lg:100vh w-full'>
            <img src={blogCoverImage} className='lg:100vh w-full' alt="Blog cover poster" />
        </div>
    )
}