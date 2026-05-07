import { ArrowDownIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import SlideInItem from "@/app/ui/slide-in-item";
import ArcadiaVideo from "@/app/ui/video/ArcadiaVideo";
import Link from "next/link";
import { YouTube, Email } from "@/app/lib/ref-links";
import Title from "@/app/ui/home/title";
import InfoSlide from "@/app/ui/home/info-slide";

export default function Home() {
  return (
    <main className="bg-blobs flex flex-col gap-6 text-lg font-normal">
      <div className="relative grid min-h-lvh grid-rows-layout xl:mt-32">
        {/* Title Section */}
        <Title />
        {/* Scroll Indicator */}
        <div className="row-start-4 mt-auto flex h-96 flex-col items-center gap-6 place-self-center">
          <ArrowDownIcon width={48} height={48} className="animate-bounce" />
          <div className="h-full rounded-lg border border-gray-600" />
        </div>
      </div>
      {/* Info Section */}
      <div className="mb-32 flex flex-col justify-stretch divide-y divide-slate-400">
        {/* Lily */}
        <InfoSlide
          side="left"
          src="/irl.jpg"
          alt="Me IRL"
          width={612}
          height={816}
          imageClassName="h-auto w-1/2 rounded-lg shadow-xl md:mr-12 md:w-1/4"
        >
          <p className="p-4 text-5xl sm:text-6xl md:text-7xl xl:text-8xl">
            <span>And this is my cat, </span>
            <span className="font-black text-purple-950">Lily</span>
            <span className="font-bold text-indigo-900">.</span>
          </p>
        </InfoSlide>
        {/* Montana Tech */}
        <InfoSlide
          side="right"
          src="/diplomas_edit.jpg"
          alt="Diplomas"
          width={612}
          height={816}
          imageClassName="mb-2 h-auto w-full rounded-lg shadow-xl sm:w-1/2 lg:w-1/2"
        >
          <p className="sm:text-4txl p-4 text-3xl md:text-5xl">
            <span>I graduated from </span>
            <span className="font-bold text-purple-950">Montana Tech</span>
            <span> with a Bachelor&apos;s of Science in </span>
            <span className="font-extrabold text-indigo-800">
              Software Engineering
            </span>
            <span> and </span>
            <span className="font-extrabold text-indigo-800">
              Computer Science
            </span>
            <span>.</span>
          </p>
        </InfoSlide>
        {/* Frankfurt School */}
        <InfoSlide
          side="left"
          src="/frankfurt-school.jpg"
          alt="Frankfurt School"
          width={612}
          height={816}
          imageClassName="mb-2 h-auto w-full rounded-lg shadow-xl sm:mb-0 sm:w-1/2 md:mr-12 md:w-1/2 xl:w-7/12"
        >
          <p className="p-4 text-3xl md:text-5xl xl:text-6xl">
            {"In 2025 I began pursuing a "}
            <span className="font-bold text-purple-950">
              Master&apos;s in Applied Data Science
            </span>
            {" at "}
            <span className="font-extrabold text-indigo-800">
              Frankfurt School of Finance & Management
            </span>
            {"."}
          </p>
        </InfoSlide>
        {/* Beethoven */}
        <InfoSlide
          side="right"
          src="/beethoven.jpeg"
          alt="Beethoven"
          width={612}
          height={816}
          imageClassName="h-auto w-1/2 rounded-lg shadow-xl md:ml-12 md:w-1/4"
        >
          <p className="p-4 text-3xl sm:text-4xl md:text-5xl">
            {"I was able to to meet "}
            <span className="font-bold text-purple-950">Mr. Beets</span>
            {" at his home in "}
            <span className="font-extrabold text-indigo-800">
              Bonn, Germany
            </span>
            {"."}
          </p>
        </InfoSlide>
        {/* Karneval */}
        <InfoSlide
          side="left"
          src="/karneval.jpeg"
          alt="Karneval in Cologne"
          width={612}
          height={816}
          imageClassName="mb-2 h-auto w-full rounded-lg shadow-xl sm:mb-0 sm:w-1/2 md:mr-12 md:w-1/2 xl:w-7/12"
        >
          <p className="p-4 text-3xl md:text-5xl xl:text-6xl">
            {"I got to experience "}
            <span className="font-bold text-purple-950">Karneval</span>
            {" in "}
            <span className="font-extrabold text-indigo-800">
              Köln, Germany
            </span>
            {"."}
          </p>
        </InfoSlide>
        {/* Bald */}
        <InfoSlide
          side="right"
          src="/bald.jpeg"
          alt="Bald"
          width={612}
          height={816}
          imageClassName="h-auto w-1/2 rounded-lg shadow-xl md:ml-12 md:w-1/4"
        >
          <p className="p-4 text-3xl md:text-5xl xl:text-6xl">
            {"I also lost every single "}
            <span className="font-bold text-purple-950">strand of hair</span>
            {" on my "}
            <span className="font-bold text-indigo-800">head</span>
            {"."}
          </p>
        </InfoSlide>
        {/* Fish */}
        <InfoSlide
          side="left"
          src="/fish.jpeg"
          alt="Feesh"
          width={612}
          height={816}
          imageClassName="mb-2 h-auto w-full rounded-lg shadow-xl sm:mb-0 sm:w-1/3 md:mr-12 md:w-1/3 xl:w-5/12"
        >
          <p className="p-4 text-3xl md:text-5xl xl:text-6xl">
            <span>I love to </span>
            <span className="font-bold text-green-950">fish</span>
            <span> when I&apos;m not programming.</span>
          </p>
        </InfoSlide>
        {/* YouTube */}
        <SlideInItem className="mb-8 p-8">
          <div className="mb-2 lg:float-right lg:mb-0 lg:ml-4 lg:h-full lg:w-1/2">
            <ArcadiaVideo width={1280 / 3} height={720 / 3} />
          </div>
          <p className="p-4 text-3xl sm:text-4xl md:text-5xl">
            <span>I also make </span>
            <span className="font-bold text-green-950">Minecraft</span>
            <span> content on </span>
            <span className="text-red font-bold">
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
        </SlideInItem>
        {/* Tech Stack */}
        <InfoSlide
          side="left"
          src="/tech-stack.png"
          alt="Tech Stack"
          width={612}
          height={816}
          imageClassName="mb-2 h-auto w-full rounded-lg sm:w-1/2"
        >
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
        </InfoSlide>
        {/* Work */}
        <SlideInItem className="mb-8 p-8">
          <div className="float-right mb-2 ml-4 h-32 w-32">
            <EnvelopeIcon width={96} height={96} className="h-auto w-full" />
          </div>
          <p className="p-4 text-3xl sm:text-4xl md:text-5xl">
            <span>Want to </span>
            <span className="font-extrabold text-green-600">hire</span>
            <span> me? Send me an </span>
            <Link
              href={`mailto:${Email}`}
              rel="noopener noreferrer"
              target="_blank"
              title="Hire me!"
            >
              <span className="font-extrabold text-indigo-800 hover:underline hover:underline-offset-4">
                Email
              </span>
            </Link>
            <span>!</span>
          </p>
        </SlideInItem>
      </div>
    </main>
  );
}
