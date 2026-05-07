"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { LinkIcon, StarIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import type { Repo } from "@/app/lib/portfolio";

function langChipClass(lang: string | null): string {
  switch (lang?.toLowerCase()) {
    case "typescript":
      return "bg-blue-100 text-blue-700";
    case "javascript":
      return "bg-yellow-100 text-yellow-700";
    case "python":
      return "bg-green-100 text-green-700";
    case "c++":
    case "c":
      return "bg-gray-100 text-gray-700";
    case "html":
      return "bg-orange-100 text-orange-700";
    case "css":
      return "bg-pink-100 text-pink-700";
    default:
      return "bg-slate-100 text-slate-600";
  }
}

function relativeTime(date: Date | string): string {
  const d = date instanceof Date ? date : new Date(date);
  const days = Math.floor((Date.now() - d.getTime()) / 86_400_000);
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

export default function PortfolioItem({ data }: { data: Repo }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = descRef.current;
    if (el) setIsOverflowing(el.scrollHeight > el.clientHeight);
  }, []);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const container = el.parentElement;
    if (!container) return;
    el.style.whiteSpace = "nowrap";
    let size = parseFloat(window.getComputedStyle(el).fontSize);
    while (el.scrollWidth > container.clientWidth && size > 14) {
      size -= 0.5;
      el.style.fontSize = `${size}px`;
    }
  }, []);

  return (
    <div
      className={clsx(
        "flex flex-col gap-3 rounded-xl border p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md",
        data.pinned
          ? "border-purple-200 bg-purple-50/40"
          : "border-slate-200 bg-white/70",
      )}
    >
      {/* Header */}
      <div className="flex items-start gap-2">
        {data.pinned && (
          <StarIcon className="mt-1 h-4 w-4 shrink-0 text-purple-600" />
        )}
        <Link
          ref={titleRef}
          href={data.link}
          target="_blank"
          rel="noreferrer noopener"
          className="text-3xl font-light decoration-1 underline-offset-2 hover:underline"
        >
          {data.title}
          <LinkIcon width={18} height={18} className="ml-1 inline align-top" />
        </Link>
      </div>

      {/* Description */}
      <p
        ref={descRef}
        className={clsx(
          "overflow-hidden pl-1 text-lg font-light leading-6 tracking-wide text-slate-700 transition-[max-height] duration-300 ease-in-out",
          isExpanded ? "max-h-125" : "max-h-12",
        )}
      >
        {data.description ?? "No description."}
      </p>

      {/* Expand caret — only rendered when text overflows 2 lines */}
      {isOverflowing && (
        <button
          onClick={() => setIsExpanded((v) => !v)}
          className="flex w-full cursor-pointer justify-center text-slate-400 hover:text-slate-600"
          aria-label={
            isExpanded ? "Collapse description" : "Expand description"
          }
        >
          <ChevronDownIcon
            className={clsx(
              "h-4 w-4 transition-transform duration-300",
              isExpanded && "rotate-180",
            )}
          />
        </button>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-1">
        {data.language ? (
          <span
            className={clsx(
              "rounded-full px-2 py-0.5 text-xs font-medium",
              langChipClass(data.language),
            )}
          >
            {data.language}
          </span>
        ) : (
          <span />
        )}
        <span className="text-xs text-slate-400">
          {relativeTime(data.lastUpdated)}
        </span>
      </div>
    </div>
  );
}
