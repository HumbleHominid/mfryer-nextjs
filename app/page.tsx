import Image from "next/image";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import HomeItem from "@/app/ui/home/home-item";
import ArcadiaVideo from "@/app/ui/video/ArcadiaVideo";
import Link from "next/link";
import { YouTube } from "./lib/ref-links";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 font-normal text-lg">
      <div className="relative min-h-lvh grid grid-rows-layout xl:mt-32">
        {/* Title Section */}
        <h1 className="text-7xl sm:text-8xl lg:text-9xl font-thin mb-8 w-3/4">
          <span>Hi, I&apos;m </span>
          <span className="font-semibold text-green-950">Michael</span>
          <span className="font-light text-blue-900">.</span>
        </h1>
        <p className="pl-8 leading-8 tracking-wide text-slate-700 font-light text-xl sm:text-2xl lg:text-4xl w-3/4 sm:w-1/2 md:3/4">
          I am a Software Engineer from Montana, USA.
        </p>
        {/* Scroll Indicator */}
        <div className="mt-auto place-self-center row-start-4 flex flex-col gap-6 items-center h-96">
          {/* Arrow */}
          <ArrowDownIcon width={48} height={48} className="animate-bounce" />
          {/* Line */}
          <div className="border h-full border-gray-600 rounded-lg" />
        </div>
      </div>
      {/* Info Section */}
      <div className="flex flex-col justify-stretch divide-y divide-slate-400 mb-48 overflow-hidden">
        {/* Lily */}
        <HomeItem
          dir="left"
        >
          <div className="flex gap-4 md:gap-12 items-center">
            <Image
              src="/irl.jpg"
              alt="Me IRL"
              width={612}
              height={816}
              loading="eager"
              className="rounded-lg shadow-xl float-left w-1/2 sm:w-1/4 md:w-1/4 h-auto"
            />
            <p className="p-4 text-3xl sm:text-6xl md:text-7xl xl:text-8xl">
              <span>And this is my cat, </span>
              <span className="font-black text-purple-950">Lily</span>
              <span className="font-bold text-indigo-900">.</span>
            </p>
          </div>
        </HomeItem>
        {/* Montana Tech */}
        <HomeItem
          dir="right"
        >
          <div className="flex flex-col items-center lg:inline">
            <Image
              src="/diplomas_edit.jpg"
              alt="Diplomas"
              width={612}
              height={816}
              loading="eager"
              className="rounded-lg shadow-xl float-right w-full sm:w-3/4 lg:w-1/2 h-auto ml-4 mb-2"
            />
            <p className="p-4 text-3xl sm:text-4txl md:text-5xl">
              <span>I graduated from </span>
              <span className="font-bold text-purple-950">Montana Tech</span>
              <span> with a Bachelor&apos;s of Science in </span>
              <span className="font-extrabold text-indigo-800">Software Engineering</span>
              <span> and </span>
              <span className="font-extrabold text-indigo-800">Computer Science</span>
              <span>.</span>
            </p>
          </div>
        </HomeItem>
        {/* Fish */}
        <HomeItem
          dir="left"
        >
          <div className="flex flex-col sm:flex-row gap-4 md:gap-12 items-center">
            <Image
              src="/fish.jpeg"
              alt="Feesh"
              width={612}
              height={816}
              loading="eager"
              className="rounded-lg shadow-xl float-right w-56 sm:w-50 md:w-5/12 h-auto"
            />
            <p className="p-4 text-3xl sm:text-3xl md:text-5xl xl:text-6xl">
              <span>I love to </span>
              <span className="font-bold text-green-950">fish</span>
              <span> when I&apos;m not programming.</span>
            </p>
          </div>
        </HomeItem>
        {/* YouTube */}
        <HomeItem
          dir="right"
        >
          <div className="flex flex-col items-center lg:inline">
            <div className="md:float-right w-full lg:w-1/2">
              <ArcadiaVideo
                width={1280/3}
                height={720/3}
              />
            </div>
            <p className="p-4 text-3xl sm:text-4txl md:text-5xl">
              <span>In 2022 I started making </span>
              <span className="font-bold text-green-950">Minecraft</span>
              <span> content on </span>
              <span className="font-bold text-red">
                <Link
                  href={YouTube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:underline-offset-4"
                >
                  YouTube
                </Link>
              </span>
              <span> which led me to join </span>
              <span className="font-extrabold text-indigo-800">Arcadia SMP</span>
              <span> in 2023.</span>
            </p>
          </div>
        </HomeItem>
        {/* Work */}
      </div>
    </main>
  );
}
