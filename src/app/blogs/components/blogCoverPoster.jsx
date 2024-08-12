
import Image from 'next/image';
export default function Blogs() {
    const blogCoverImage = "/blog_cover_poster.png";
    return(
        <div className='w-full'>
            <img src={blogCoverImage} 
            style={
                {animation: "pulse-poster 0.5s  cubic-bezier(0.4, 0, 0.6, 1) 1"}
            }
            className='w-full' alt="Blog cover poster" />
        </div>
    )
}