import React from "react";
import BlogCard from "./blogCard";

import "@/styles/blogs.css";

export default function GenerateBlogCards(props) {
  const blogs = props.blogs;

  return (
    <div className="w-full mb-8">
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {[...blogs]
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
      </div>

      {blogs.length === 0 && (
        <div className="w-full flex justify-center items-center py-16">
          <p className="text-muted-foreground text-lg">
            No blogs found. Try a different search term.
          </p>
        </div>
      )}
    </div>
  );
}
