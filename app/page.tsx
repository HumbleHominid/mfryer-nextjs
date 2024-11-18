import Link from "next/link";
import { GitHub, YouTube } from "./lib/ref-links";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 font-normal text-lg">
      <h1 className="text-9xl font-thin">Home</h1>
      <p className="m-0 p-0 text-slate-700 dark:text-gray-200 font-extralight text-2xl">Welcome to my website. This website is built using Next.js and Tailwind and deployed via Vercel.</p>
      <div>
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
