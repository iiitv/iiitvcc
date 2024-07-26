"use client";
import React, { useState } from "react";
import { supabase } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";
import { Button as MUIButton } from "@mui/material";

export default function Page() {
  const [selectedPosterFile, setSelectedPosterFile] = useState<File | null>(null);
  const [selectedBlogFile, setSelectedBlogFile] = useState<File | null>(null);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [eventId, setEventId] = useState<string>("7");
  const [blogId, setBlogId] = useState<string>("24");
  const [events, setEvents] = useState<any[]>([]);
  const [blogs, setBlogs] = useState<any[]>([]);
  const createEvent = async () => {
    const response = await fetch("/api/v1/create/event/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event: {
          name: "CodeStrike v6.0",
          description: "A competitive coding event",
          date: "2024-07-30",
          duration: 180,
          mode: true,
          host_link: "https://www.example.com",
          requirements: ["Laptop", "Notebook"],
          hosted_registration: true,
          register_until: "2024-05-28",
          registration_link: "https://www.example.com",
        },
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  const submitBlog = async () => {
    if (!selectedPosterFile || !selectedBlogFile) {
      console.error("Missing required files for blog submission");
      return;
    }

    const formData = new FormData();
    formData.append("poster", selectedPosterFile);
    formData.append("blog", selectedBlogFile);
    selectedImages.forEach((image) => {
      formData.append("images", image);
    });
    formData.append("blogData", JSON.stringify({
      title: "Seventh Blog",
      intro: "This is the seventh blog",
    }));

    const response = await fetch("/api/v1/submit/blog/", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log(data);
  };

  const deleteEvent = async () => {
    const response = await fetch(`/api/v1/delete/event/?id=${eventId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const getBlog = async () => {
    const response = await fetch(`/api/v1/get/blog/?id=${blogId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const getEvent = async () => {
    const response = await fetch(`/api/v1/get/event/?id=${eventId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const getEvents = async () => {
    const response = await fetch("/api/v1/get/events/?category=past", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setEvents(data);
    console.log(data);
  };

  const getBlogs = async () => {
    const response = await fetch("/api/v1/get/blogs/?page=1&limit=5", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setBlogs(data.blogs);
    console.log(data);
  };

  const handlePosterFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setSelectedPosterFile(file);
    }
  };

  const handleBlogFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setSelectedBlogFile(file);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedImages(Array.from(event.target.files));
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Test APIs</h1>
      <div className="space-y-2">
        <Button onClick={createEvent} className="w-full bg-green-500 text-white">Create Event</Button>
        <Button onClick={submitBlog} className="w-full bg-yellow-500 text-white">Submit Blog</Button>
        <Button onClick={deleteEvent} className="w-full bg-red-500 text-white">Delete Event</Button>
        <Button onClick={getBlog} className="w-full bg-teal-500 text-white">Get Blog</Button>
        <Button onClick={getEvent} className="w-full bg-indigo-500 text-white">Get Event</Button>
        <Button onClick={getEvents} className="w-full bg-pink-500 text-white">Get Events</Button>
        <Button onClick={getBlogs} className="w-full bg-gray-500 text-white">Get Blogs</Button>
      </div>
      <label htmlFor="poster-file" className="block">
        <MUIButton variant="contained" component="span" className="bg-purple-500 text-white">
          Select Poster Image
        </MUIButton>
        <input
          accept="image/*"
          id="poster-file"
          type="file"
          className="hidden"
          onChange={handlePosterFileChange}
        />
      </label>
      <label htmlFor="blog-file" className="block mt-4">
        <MUIButton variant="contained" component="span" className="bg-purple-500 text-white">
          Select Blog File
        </MUIButton>
        <input
          accept=".md,.txt, .html" // Adjust as needed for your blog files
          id="blog-file"
          type="file"
          className="hidden"
          onChange={handleBlogFileChange}
        />
      </label>
      <label htmlFor="images-file" className="block mt-4">
        <MUIButton variant="contained" component="span" className="bg-purple-500 text-white">
          Select Images
        </MUIButton>
        <input
          accept="image/*"
          id="images-file"
          type="file"
          className="hidden"
          multiple
          onChange={handleImageChange}
        />
      </label>
      {selectedPosterFile && (
        <div className="mt-4">
          <p>Selected poster file: {selectedPosterFile.name}</p>
        </div>
      )}
      {selectedBlogFile && (
        <div className="mt-4">
          <p>Selected blog file: {selectedBlogFile.name}</p>
        </div>
      )}
      {selectedImages.length > 0 && (
        <div className="mt-4">
          <p>Selected images:</p>
          <ul>
            {selectedImages.map((image) => (
              <li key={image.name}>{image.name}</li>
            ))}
          </ul>
        </div>
      )}
      {events?.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Events:</h2>
          <ul>
            {events.map((event) => (
              <li key={event.id}>{event.name}</li>
            ))}
          </ul>
        </div>
      )}
      {blogs.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Blogs:</h2>
          <ul>
            {blogs.map((blog) => (
              <li key={blog.id}>{blog.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}