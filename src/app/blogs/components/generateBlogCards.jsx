import React, { useEffect } from "react";
import BlogCard from "./blogCard";

import "@/styles/blogs.css";

import { Montserrat, Alata } from "next/font/google";
const alataFont = Alata({ weight: ["400"], subsets: ["latin"] });
const montserratFont = Montserrat({
  weight: ["100", "200", "400", "600"],
  subsets: ["latin"],
});

export default function GenerateBlogCards(props) {
  const blogs = props.blogs;

  return (
    <div className="blogs-div">
      <div className="blogs-container">
        <p className={`blogs-heading-title ${alataFont.className}`}>Blogs</p>
        <div className="grid md:grid-cols-2 ">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
