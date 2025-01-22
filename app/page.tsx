import Image from "next/image";
import { ArrowDownIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import HomeItem from "@/app/ui/home/home-item";
import ArcadiaVideo from "@/app/ui/video/ArcadiaVideo";
import Link from "next/link";
import { YouTube, Email } from "@/app/lib/ref-links";
import Title from "@/app/ui/home/title";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 font-normal text-lg bg-blobs">
      <div className="relative min-h-lvh grid grid-rows-layout xl:mt-32">
        {/* Title Section */}
        <Title />
        {/* Scroll Indicator */}
        <div className="mt-auto place-self-center row-start-4 flex flex-col gap-6 items-center h-96">
          {/* Arrow */}
          <ArrowDownIcon width={48} height={48} className="animate-bounce" />
          {/* Line */}
          <div className="border h-full border-gray-600 rounded-lg" />
        </div>
      </div>
      {/* Info Section */}
      <div className="flex flex-col justify-stretch divide-y divide-slate-400 mb-32">
        {/* Lily */}
        <HomeItem>
          <Image
            src="/irl.jpg"
            alt="Me IRL"
            width={612}
            height={816}
            loading="eager"
            className="rounded-lg shadow-xl float-left w-1/2 md:w-1/4 h-auto mr-4 md:mr-12"
          />
          <p className="p-4 text-5xl sm:text-6xl md:text-7xl xl:text-8xl">
            <span>And this is my cat, </span>
            <span className="font-black text-purple-950">Lily</span>
            <span className="font-bold text-indigo-900">.</span>
          </p>
        </HomeItem>
        {/* Montana Tech */}
        <HomeItem>
          <Image
            src="/diplomas_edit.jpg"
            alt="Diplomas"
            width={612}
            height={816}
            loading="eager"
            className="rounded-lg shadow-xl float-right w-full sm:w-1/2 lg:w-1/2 h-auto ml-4 mb-2"
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
        </HomeItem>
        {/* Fish */}
        <HomeItem>
          <Image
            src="/fish.jpeg"
            alt="Feesh"
            width={612}
            height={816}
            loading="eager"
            className="rounded-lg shadow-xl float-left w-full sm:w-1/3 md:w-1/3 xl:w-5/12 h-auto mr-4 md:mr-12 mb-2 sm:mb-0"
          />
          <p className="p-4 text-3xl md:text-5xl xl:text-6xl">
            <span>I love to </span>
            <span className="font-bold text-green-950">fish</span>
            <span> when I&apos;m not programming.</span>
          </p>
        </HomeItem>
        {/* YouTube */}
        <HomeItem>
          <div className="lg:float-right w-full lg:w-1/2 mb-2 lg:mb-0 lg:ml-4">
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
        </HomeItem>
        {/* Tech Stack */}
        <HomeItem>
          <Image
            src="/tech-stack.png"
            alt="Tech Stack"
            width={612}
            height={816}
            loading="eager"
            className="rounded-lg float-left w-full sm:w-1/2 h-auto mr-4 mb-2"
          />
          <p className="p-4 text-3xl md:text-5xl xl:text-6xl">
            <span>This application was built using </span>
            <span className="font-bold">Next.js</span>
            <span>, </span>
            <span className="font-bold text-blue-400">Tailwind</span>
            <span>, </span>
            <span>and deployed via </span>
            <span className="font-bold">Vercel</span>
            <span>.</span>
          </p>
        </HomeItem>
        {/* Work */}
        <HomeItem>
          <div className="h-32 w-32 float-right ml-4 mb-2">
            <EnvelopeIcon
              width={96}
              height={96}
              className="w-full h-auto"
            />
          </div>
          <p className="p-4 text-3xl sm:text-4txl md:text-5xl">
            <span>Want to </span>
            <span className="font-extrabold text-green-600">hire</span>
            <span> me? Send me an </span>
            <Link
              href={`mailto:${Email}`}
              rel="noopener noreferrer"
              target="_blank"
              title="Hire me!"
            >
              <span className="font-extrabold text-indigo-800 hover:underline hover:underline-offset-4">Email</span>
            </Link>
            <span>!</span>
          </p>
        </HomeItem>
      </div>
    </main>
  );
}
