import React from "react";
import { X } from "lucide-react";

const Video = ({ setShowVideo }) => {
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#181c31] rounded-lg shadow-lg overflow-hidden">
        {/* Close Button */}
        <button
          onClick={() => setShowVideo(false)}
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-200"
          aria-label="Close video"
        >
          <X size={28} />
        </button>

        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/r44RKWyfcFw?si=Ao9rzTSL6T7pBTuc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Video;
