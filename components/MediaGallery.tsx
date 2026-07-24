"use client";

import React, { useEffect, useState } from "react";
import type { GalleryItem } from "@/data/contentConfig";

type MediaGalleryProps = {
  items: GalleryItem[];
};

const MediaGallery: React.FC<MediaGalleryProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  const active = activeIndex !== null ? items[activeIndex] : null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className="text-left p-4 rounded-lg border border-gray-700 bg-transparent hover:bg-[#122B39] hover:border-[#2eb0cb] transition-all duration-300"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs uppercase tracking-wider text-[#2eb0cb] border border-[#2eb0cb]/30 bg-[#2eb0cb]/5 px-2 py-0.5 rounded-full">
                {item.type === "pdf" ? "PDF" : "Image"}
              </span>
              <span className="text-gray-500 text-sm">View ↗</span>
            </div>
            <h3 className="mt-3 text-white font-medium">{item.title}</h3>
            {item.description && (
              <p className="mt-1 text-sm text-gray-400 leading-relaxed">{item.description}</p>
            )}
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-10"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full h-full max-w-5xl bg-[#0C0E23] rounded-xl border border-gray-700 overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-4 py-3 border-b border-gray-700">
              <h3 className="text-white font-medium truncate">{active.title}</h3>
              <button
                onClick={() => setActiveIndex(null)}
                aria-label="Close viewer"
                className="text-gray-400 hover:text-white transition-colors text-xl leading-none px-2"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-auto bg-black/20">
              {active.type === "pdf" ? (
                <iframe src={active.src} title={active.title} className="w-full h-full min-h-[70vh]" />
              ) : (
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-full object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MediaGallery;
