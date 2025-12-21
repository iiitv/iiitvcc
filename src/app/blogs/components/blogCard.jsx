"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function BlogCard(props) {
  const [blog] = useState(props.blog);
  const blogPoster = blog.posterUrl || blog.poster || "/event_poster.avif";
  const blogTitle = blog.title;
  const blogIntro = blog.intro;
  const creatorName = blog.writer_username || "Unknown";
  const createdAt = blog.created_at;
  const blogLikes = blog.likes !== undefined ? blog.likes : "0";
  const blogComments = blog.comments !== undefined ? blog.comments : "0";

  return (
    <div className="group bg-secondary rounded-2xl shadow-md hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden border border-border hover:border-primary/50">
      {/* Blog Poster */}
      <Link href={`/blog/${blog.id}`} className="block">
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            src={blogPoster}
            width={500}
            height={500}
            alt={blogTitle || "Blog Poster"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      {/* Blog Details */}
      <div className="p-6">
        {/* Date and Share */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-muted-foreground font-medium">
            {formatDate(new Date(createdAt))}
          </p>
          <ShareButton href={`/blog/${blog.id}`} />
        </div>

        {/* Title and Intro */}
        <Link href={`/blog/${blog.id}`} className="block">
          <div className="mb-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-1 h-12 bg-primary rounded-full flex-shrink-0 mt-1" />
              <h3 className="text-xl font-semibold text-primary uppercase leading-tight line-clamp-2 group-hover:text-primary/80 transition-colors">
                {blogTitle}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 ml-5">
              {blogIntro}
            </p>
          </div>
        </Link>

        {/* Divider */}
        <hr className="border-border mb-4" />

        {/* Author and Stats */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8 border-2 border-primary/20">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback className="bg-primary/10 text-primary text-xs">
                {creatorName.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <p className="text-sm font-medium text-foreground">{creatorName}</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
              <LikeIcon />
              <span className="text-sm font-medium">{blogLikes}</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
              <CommentIcon />
              <span className="text-sm font-medium">{blogComments}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function formatDate(date) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
}

const ShareButton = (props) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check this out!",
          text: "This is an awesome blog post.",
          url: window.location.origin + props.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      console.log("Web Share API not supported");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200"
      aria-label="Share blog"
    >
      <ShareIcon />
    </button>
  );
};

const ShareIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    id="share"
    width={18}
    height={18}
    fill="currentColor"
  >
    <path d="M386.445,182.626A76.868,76.868,0,1,0,319.09,142.7L186.127,212.03a76.8,76.8,0,1,0-1.057,95.648l130.876,68.045a77.114,77.114,0,1,0,10.313-17.179L195.613,290.62a76.659,76.659,0,0,0,.695-61.342L331.1,158.994A76.578,76.578,0,0,0,386.445,182.626Z"></path>
  </svg>
);

const CommentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 32 32"
    width={18}
    height={18}
    id="comment"
  >
    <path d="M5.078 24.482A19.813 19.813 0 0 1 1.812 30c3.198 0 7.312-.42 10.482-2.364A19.52 19.52 0 0 0 16 28c8.836 0 16-5.82 16-13S24.836 2 16 2 0 7.82 0 15c0 3.744 1.96 7.11 5.078 9.482z"></path>
  </svg>
);

const LikeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    version="1"
    fill="currentColor"
    id="heart"
  >
    <path d="M2.2 9.4c0 1.3.2 3.3 2 5.1 1.6 1.6 6.9 5.2 7.1 5.4.2.1.4.2.6.2s.4-.1.6-.2c.2-.2 5.5-3.7 7.1-5.4 1.8-1.8 2-3.8 2-5.1 0-3-2.4-5.4-5.4-5.4-1.6 0-3.2.9-4.2 2.3C11 4.9 9.4 4 7.6 4 4.7 4 2.2 6.4 2.2 9.4z"></path>
  </svg>
);
