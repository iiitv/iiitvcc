import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { Montserrat } from "next/font/google";
const montserratFont = Montserrat({
  weight: ["100", "200", "400", "500", "600"],
  subsets: ["latin"],
});

export default function BlogCard(props) {
  const [blog, setBlog] = useState(props.blog);
  const [blogPosterUrl, setBlogPosterUrl] = useState(blog.posterUrl);
  const [blogTitle, setBlogTitle] = useState(blog.title);
  const [blogIntro, setBlogIntro] = useState(blog.intro);
  const [creatorName, setCreatorName] = useState("Devesh Sawant");
  const [createdAt, setCreatedAt] = useState(blog.created_at);
  const [blogPoster, setblogPoster] = useState("/event_poster.avif");
  const [blogLikes, setBlogLikes] = useState("10");
  const [blogComments, setBlogComments] = useState("10");

  console.log(trimString(blogTitle, 45));

  return (
    <div className="blogs-card grid lg:grid-cols-2 rounded-2xl shadow-sm space-y-4 lg:space-y-0 bg-secondary m-2 p-6">
      <Link href={`/blog/${blog.id}`}>
        <div className="blogs-poster-div col-span-1 rounded-xl">
          <Image
            className="blogs-poster"
            src={blogPoster}
            width={500}
            height={500}
            alt="Blog Poster"
          ></Image>
        </div>
      </Link>

      <div className="blogs-details-div col-span-1  ">
        <div className="blogs-details-container-1 mb-1.5 mr-3 flex justify-between content-between">
          <p className={`blogs-date ${montserratFont.className}`}>
            {formatDate(new Date(createdAt))}
          </p>
          <ShareButton href={`/blog/${blog.id}`} />
        </div>

        <div className="blogs-details-container-2" href={`/blog/${blog.id}`}>
          <Link href={`/blog/${blog.id}`} className="h-full">
            <div className="blogs-title-div">
              <div></div>
              <p className={`blogs-title ${montserratFont.className}`}>
                {trimString(blogTitle, 45)}
              </p>
            </div>
            <p className={`blogs-intro ${montserratFont.className}`}>
              {trimString(blogIntro, 200)}
            </p>
          </Link>
          <div className={`blogs-data ${montserratFont.className}`}>
            <hr />
            <div className="flex items-center justify-between gap-2 mt-2">
              <div className="flex items-center gap-2 ml-4">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                </Avatar>
                <p>{creatorName}</p>
              </div>
              <div className="likes-comments-container flex gap-3">
                <div className="likes-container flex gap-[0.1rem] items-center">
                  <LikeIcon />
                  <p>{blogLikes}</p>
                </div>
                <div className="comments-container flex gap-[0.1rem] items-center">
                  <CommentIcon />
                  <p>{blogComments}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function trimString(str, length) {
  // Use Intl.Segmenter to handle grapheme clusters (e.g., emojis)
  const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
  const segments = segmenter.segment(str);

  // Convert segments iterator to an array of strings
  const graphemes = Array.from(segments, (segment) => segment.segment);

  // Check if truncation is needed
  if (graphemes.length > length) {
    return graphemes.slice(0, length).join("") + "...";
  }

  // Return the original string if no truncation is needed
  return str;
}

function formatDate(date) {
  // Array of month names
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

  // Extract day, month, and year from the date
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  // Format the date
  return `${day} ${month}, ${year}`;
}

const ShareButton = (props) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check this out!",
          text: "This is an awesome React app.",
          url: window.location.origin + props.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      console.log("Web Share API not supported");
      // Optionally handle fallback here
    }
  };

  return (
    <button onClick={handleShare} className="share-button">
      <ShareIcon />
    </button>
  );
};

const ShareIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    id="share"
    width={20}
    height={20}
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
    width={20}
    height={20}
    id="comment"
  >
    <path d="M5.078 24.482A19.813 19.813 0 0 1 1.812 30c3.198 0 7.312-.42 10.482-2.364A19.52 19.52 0 0 0 16 28c8.836 0 16-5.82 16-13S24.836 2 16 2 0 7.82 0 15c0 3.744 1.96 7.11 5.078 9.482z"></path>
  </svg>
);

const LikeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    version="1"
    fill="currentColor"
    id="heart"
  >
    <path d="M2.2 9.4c0 1.3.2 3.3 2 5.1 1.6 1.6 6.9 5.2 7.1 5.4.2.1.4.2.6.2s.4-.1.6-.2c.2-.2 5.5-3.7 7.1-5.4 1.8-1.8 2-3.8 2-5.1 0-3-2.4-5.4-5.4-5.4-1.6 0-3.2.9-4.2 2.3C11 4.9 9.4 4 7.6 4 4.7 4 2.2 6.4 2.2 9.4z"></path>
  </svg>
);
