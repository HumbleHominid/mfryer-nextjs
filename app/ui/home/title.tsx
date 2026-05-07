"use client";

import { useEffect, useRef } from "react";
import { useClientMediaQuery } from "@/app/lib/hooks/use-client-media-query";

const MAX_TILT_DEG_X = 22.5;
const MAX_TILT_DEG_Y = 15;
const FALLOFF = 0.6;
const SPRING_STIFFNESS = 0.08;
const SPRING_DAMPING = 0.75;

export default function Title() {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const velX = useRef(0);
  const velY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const targetX = useRef(0);
  const targetY = useRef(0);
  const rafId = useRef<number | null>(null);
  const isMobile = useClientMediaQuery("(max-width: 640px)");

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!titleRef.current) return;
      const bb = titleRef.current.getBoundingClientRect();
      const centerX = bb.left + bb.width / 2;
      const centerY = bb.top + bb.height / 2;
      const offsetX = e.clientX - centerX;
      const offsetY = e.clientY - centerY;
      targetY.current =
        MAX_TILT_DEG_Y * Math.tanh(offsetX / (window.innerWidth * FALLOFF));
      targetX.current =
        -MAX_TILT_DEG_X * Math.tanh(offsetY / (window.innerHeight * FALLOFF));
    };

    const animate = () => {
      velX.current =
        velX.current * SPRING_DAMPING +
        (targetX.current - currentX.current) * SPRING_STIFFNESS;
      velY.current =
        velY.current * SPRING_DAMPING +
        (targetY.current - currentY.current) * SPRING_STIFFNESS;
      currentX.current += velX.current;
      currentY.current += velY.current;
      if (titleRef.current) {
        titleRef.current.style.transform = `rotateY(${currentY.current}deg) rotateX(${currentX.current}deg)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [isMobile]);

  return (
    <div style={{ perspective: "800px" }}>
      <div className="w-min" ref={titleRef}>
        <h1 className="mb-8 text-7xl font-thin sm:text-8xl lg:text-9xl">
          <span>Hi, I&apos;m </span>
          <span className="font-semibold text-green-950">Michael</span>
          <span className="font-light text-blue-900">.</span>
        </h1>
        <p className="pl-8 text-3xl font-light leading-7 tracking-wide text-slate-700 lg:text-4xl lg:leading-8">
          Software Engineer
          <br />
          Data Scientist
          <span className="text-sm font-extralight tracking-tight text-slate-600 sm:align-middle sm:text-base lg:text-xl">
            {isMobile ? <br /> : <span> | </span>}
            Master&apos;s Candidate
          </span>
        </p>
      </div>
    </div>
  );
}
