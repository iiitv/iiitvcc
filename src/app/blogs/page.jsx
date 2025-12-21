"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useFetchBlog from "./fetchBlogs";
import Loader from "@/components/ui/loader";
import Image from "next/image";
import Link from "next/link";

import BlogPosterCover from "./components/blogCoverPoster";
import GenerateBlogCards from "./components/generateBlogCards";

export default function Blogs() {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [blogsArray, setBlogsArray] = useState([]);

  const [searchInputValue, setSearchInputValue] = useState("");
  const { blogs, loading, error } = useFetchBlog(currentPage);

  useEffect(() => {
    if (!loading && blogs) {
      setBlogsArray((prevBlogs) => {
        // create a new array by filtering out blogs that already exist in the array based on blog id
        const newBlogs = blogs.filter(
          (blog) => !prevBlogs.some((prevBlog) => prevBlog.id === blog.id),
        );
        return [...prevBlogs, ...newBlogs];
      });

      if (blogs.length < 5) {
        setHasMore(false);
      }
    }
  }, [blogs, loading]);

  if (error) {
    console.error(error);
    router.push("/");
    return null;
  }

  const handlePageChange = () => {
    if (hasMore) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchInputValue(event.target.value);
  };

  //local filtering
  const filteredBlogs = blogsArray.filter((blog) => {
    if (!searchInputValue.trim()) return true;
    const search = searchInputValue.toLowerCase();
    const title = (blog.title || "").toLowerCase();
    const description = (blog.description || "").toLowerCase();
    return title.includes(search) || description.includes(search);
  });

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section with Cover */}
      <div className="w-full flex flex-col items-center">
        <BlogPosterCover />

        {/* Search Bar */}
        <div className="relative -mt-8 z-10 mb-12">
          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-secondary/80 backdrop-blur-md border-2 border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300">
            <input
              type="text"
              value={searchInputValue}
              className="bg-transparent outline-none text-base md:text-lg w-32 md:w-64 transition-all duration-300 focus:w-48 md:focus:w-80 placeholder:text-muted-foreground"
              placeholder="Search blogs..."
              onChange={handleSearchInputChange}
            />
            <Link
              href="#"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <SearchIcon />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[1400px] px-4 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col mb-8 lg:mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-3">
            Our <span className="text-primary">Blogs</span>
          </h1>
          <div className="w-20 h-1 bg-primary mb-4"></div>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl">
            Dive into our collection of articles, tutorials, and insights from
            our community
          </p>
        </div>

        {/* Blog Cards */}
        <GenerateBlogCards blogs={filteredBlogs} />

        {/* Loading / Show More */}
        {loading ? (
          <div className="w-full flex flex-col items-center justify-center py-16">
            <Loader />
            <p className="text-lg text-muted-foreground mt-6">
              Loading more blogs...
            </p>
          </div>
        ) : hasMore ? (
          <div className="w-full flex justify-center mb-16">
            <button
              className="btn-brutalist text-base bg-transparent text-primary border-primary px-8 py-3"
              onClick={handlePageChange}
            >
              Show More
            </button>
          </div>
        ) : (
          <div className="w-full flex justify-center py-8 mb-16">
            <p className="text-muted-foreground text-sm">
              You've reached the end of our blog collection
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width={24}
    height={24}
    fill="currentColor"
    id="search"
  >
    <path fill="none" d="M0 0h128v128H0z"></path>
    <path d="M29.18 9.265C8.587 23.684 3.575 52.11 17.994 72.703c14.42 20.593 42.845 25.604 63.438 11.185 20.593-14.42 25.605-42.844 11.186-63.437C78.198-.142 49.773-5.155 29.18 9.265Zm2.868 4.095C50.38.524 75.686 4.985 88.523 23.318c12.836 18.332 8.373 43.638-9.959 56.474-18.332 12.836-43.637 8.375-56.474-9.957-12.837-18.333-8.374-43.638 9.958-56.475Z"></path>
    <path d="M29.942 64.338c-9.803-14-6.395-33.323 7.604-43.126a2.502 2.502 0 0 0 .614-3.482 2.502 2.502 0 0 0-3.482-.614c-16.26 11.386-20.217 33.83-8.832 50.09a2.502 2.502 0 0 0 3.482.614 2.502 2.502 0 0 0 .614-3.482ZM78.014 83.364l5.09 7.27a2.502 2.502 0 0 0 3.482.614 2.502 2.502 0 0 0 .614-3.482l-5.09-7.27a2.502 2.502 0 0 0-3.482-.614 2.502 2.502 0 0 0-.614 3.482Z"></path>
    <path d="M100.341 92.914a14.841 14.841 0 0 0-15.046-6.045h-.002a3.6 3.6 0 0 0-2.38 1.666v.002a14.841 14.841 0 0 0 .534 16.207l12.357 17.648a9.337 9.337 0 0 0 13.003 2.293l1.6-1.12a9.336 9.336 0 0 0 2.292-13.003L100.34 92.914Zm-13.458-1.242a9.84 9.84 0 0 0 .659 10.204l12.357 17.648a4.34 4.34 0 0 0 6.04 1.066l1.6-1.12a4.339 4.339 0 0 0 1.064-6.04L96.246 95.78a9.839 9.839 0 0 0-9.363-4.109Z"></path>
  </svg>
);
