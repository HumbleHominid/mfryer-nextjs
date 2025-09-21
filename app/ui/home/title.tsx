"use client";

import { useEffect, useState, useRef } from "react";
import { useClientMediaQuery } from "@/app/lib/hooks/use-client-media-query";

// Change the skew of the title based on the mouse position in the screen
export default function Title() {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const [skewAng, setSkewAng] = useState(0);
  const [rotateAng, setRotateAng] = useState(0);
  const isMobile = useClientMediaQuery("(max-width: 640px)");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (titleRef.current) {
        const newCursorPos = {
          x: e.clientX,
          y: e.clientY,
        };
        // Get the center of the title rect
        const bb = titleRef.current.getBoundingClientRect();
        const centerX = bb.left + bb.width / 2;
        const centerY = bb.top + bb.height / 2;
        const lerp = (x: number, y: number, t: number): number => {
          return (1 - t) * x + t * y;
        };
        // Calculate the rotation relative to cursor x in range [-5, 5]
        const maxRotate = 30;
        if (newCursorPos.x < centerX) {
          setRotateAng(lerp(-maxRotate, 0, newCursorPos.x / centerX));
        } else {
          const screenWidth = screen.availWidth;
          setRotateAng(
            lerp(
              0,
              maxRotate,
              (newCursorPos.x - centerX) / (screenWidth - centerX),
            ),
          );
        }
        // Calculate the skew relative to cursor x and y in range [-10, 10]
        const maxAng = 10;
        if (newCursorPos.y < centerY) {
          const newSkewAng = lerp(-maxAng, 0, newCursorPos.y / centerY);
          setSkewAng(newSkewAng * (rotateAng / maxRotate));
        } else {
          const screenHeight = screen.availHeight;
          const newSkewAng = lerp(
            0,
            maxAng,
            (newCursorPos.y - centerY) / (screenHeight - centerY),
          );
          setSkewAng(newSkewAng * (rotateAng / maxRotate));
        }
      }
    };
    if (!isMobile) {
      addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (!isMobile) {
        removeEventListener("mousemove", handleMouseMove);
      }
    };
  });

  return (
    <div
      className="w-min transform"
      style={{ transform: `skewY(${skewAng}deg) rotateX(${rotateAng}deg)` }}
      ref={titleRef}
    >
      <h1 className="mb-8 text-7xl font-thin sm:text-8xl lg:text-9xl">
        <span>Hi, I&apos;m </span>
        <span className="font-semibold text-green-950">Michael</span>
        <span className="font-light text-blue-900">.</span>
      </h1>
      <p className="pl-8 text-xl font-light leading-5 tracking-wide text-slate-700 sm:text-2xl sm:leading-6 lg:text-4xl lg:leading-8">
        Software Engineer
        <br />
        Data Scientist
        <span className="text-sm font-extralight tracking-tight text-slate-600 sm:align-middle sm:text-base lg:text-xl">
          {isMobile ? <br /> : <span> | </span>}
          Master's Candidate
        </span>
      </p>
    </div>
  );
}
