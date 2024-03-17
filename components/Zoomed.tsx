"use client";
import React, { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";

interface ImageProps {
  src: string | StaticImageData;
  alt: string;
}
export default function Zoomed({ src, alt }: ImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleZoomClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="image-container">
      <Image
        src={src}
        alt={alt}
        quality={100}
        className={`cursor-pointer rounded-lg h-[16rem] ${
          isZoomed ? "w-full h-[40rem] fixed top-0 left-0 z-50 " : ""
        }`}
        onClick={handleZoomClick}
        ref={imageRef}
      />
      {isZoomed && ( // Conditionally render zoom overlay
        <div
          className="zoom-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-40"
          onClick={handleZoomClick}
        />
      )}
    </div>
  );
}
