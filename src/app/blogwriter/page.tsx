"use client";

import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";

// Dynamically import JoditEditor to ensure it only runs in the browser
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const Example = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <JoditEditor
      ref={editor}
      value={content}
      // config={config}
      onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
      onChange={(newContent) => {
        console.log(newContent);
      }}
      className="text-black !h-screen"
    />
  );
};

export default Example;
