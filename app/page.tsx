import Link from "next/link";
import { GitHub, YouTube } from "./lib/ref-links";
import Image from "next/image";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 font-normal text-lg">
      <div className="min-h-lvh grid grid-rows-layout mb-48">
        {/* Title Section */}
        <h1 className="text-8xl sm:text-8xl lg:text-9xl font-thin mb-8 w-3/4">
          <span>Hi, I&apos;m </span>
          <span className="font-normal text-green-950">Michael</span>
          <span className="font-light text-blue-900">.</span>
        </h1>
        <p className="pl-8 leading-8 tracking-wide text-slate-700 font-light text-2xl lg:text-4xl w-1/2 sm:w-3/4">
          I am a Software Engineer from Montana, USA.
        </p>
        {/* Scroll Indicator */}
        <div className="absolute -bottom-60 place-self-center row-start-4 flex flex-col gap-6 items-center h-96">
          {/* Arrow */}
          <ArrowDownIcon width={24} height={24} className="animate-bounce" />
          {/* Line */}
          <div className="border h-full border-gray-600 rounded-lg" />
        </div>
      </div>
      <div className="">
        <Image
          src="/irl.jpg"
          alt="Me IRL"
          width={612}
          height={816}
          className="rounded-sm shadow-xl float-left h-auto w-40 lg:w-60 mr-4"
        />
        <p className="mb-4 p-0">
          I am Software Developer who graduated with the class of 2019 from Montana Tech. I graduated with a Bachelor&apos;s of Science in both Software Engineering and Computer Science. As part of my graduation, I was presented with an award for <span className="italic">Outstanding Achievement in the Department of Computer Science</span> from my department head.
        </p>
        <p className="mb-4 p-0">
          After graduating I worked in the games industry for several years before pursuing my passion for content creation by starting a <Link href={YouTube} className="hover:underline hover:underline-offset-4 italic" target="_blank">YouTube</Link> channel. Other hobbies include gaming, fishing, and kayaking.
        </p>
        <p className="mb-4 p-0">
          Please checkout <Link href="/about" className="hover:underline hover:underline-offset-4 italic">About</Link> for more information about myself. The source code for this application is available on my <Link href={GitHub} className="hover:underline hover:underline-offset-4 italic" target="_blank">GitHub</Link>. My resume and email are available in the footer or in the navbar.
        </p>
      </div>
    </main>
  );
}
