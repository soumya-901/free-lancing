// components/VideoLink.js
// import { FaLink } from 'react-icons/fa';
"use client";

import axios from "axios";
import { ChangeEvent, useState } from "react";

interface VideoFormat {
  url: string;
  qualityLabel: string;
}

const VideoLink = () => {
  const [url, setUrl] = useState<string>("");
  const [formats, setFormats] = useState<VideoFormat[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleDownload = async () => {
    if (!url) {
      alert("Please enter a YouTube URL");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = downloadUrl;
        a.download = `${url}.mp4`;
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else {
        alert("Failed to download video.");
      }
    } catch (error) {
      console.error("Error during download:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const downloadVideo = (format: VideoFormat) => {
    window.open(format.url, "_blank");
  };
  return (
    <div className="flex flex-col items-center w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[55vw] xl:w-[45vw] p-5">
      <div className="flex flex-col sm:flex-row  items-center w-[100%]  border-2 border-blue-500 rounded-md p-2">
        <div className="flex items-center w-[100%]  mb-2 sm:mb-0">
          <img
            className="text-gray-400 mx-1"
            src="/utils/link.svg"
            width={30}
          />
          <input
            type="text"
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste your video link here"
            className="flex-grow  py-3 w-[90%] sm:w-[50%]   outline-none text-gray-600 placeholder-gray-400"
          />
        </div>
        <button
          onClick={handleDownload}
          className="flex text-2xl font-bold w-[80%] sm:w-[40%] md:w-[30%] lg:w-[20%]  min-w-[10rem] justify-center bg-seoblue text-white  py-2.5 rounded-md hover:bg-seoblue transition duration-300"
        >
          Download{" "}
          <img
            className="inline-flex ml-1"
            width={15}
            height={15}
            src="/utils/arrow.svg"
            alt=""
          />
        </button>
      </div>
      <div className="text-2xl text-gray-600 flex items-center">
        <span>Scanned by</span>
        <img
          src="/path-to-norton-logo.png" // Replace with your local image path or URL
          alt="Norton Safe Web"
          className="h-5 ml-2"
        />
      </div>
    </div>
  );
};
export default VideoLink;
