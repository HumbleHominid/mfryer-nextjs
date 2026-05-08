import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { YouTube, GitHub, CV } from "@/app/lib/ref-links";
import ArcadiaVideo from "@/app/ui/video/ArcadiaVideo";
export const metadata: Metadata = {
  title: "About",
};

const alternateFloat = (i: number) =>
  i % 2 === 0 ? "float-left sm:mr-4" : "float-right sm:ml-4";

export default function Page() {
  return (
    <main className="flex flex-col gap-6 text-lg font-normal">
      <h1 className="text-9xl font-thin">About Me</h1>
      {/* Lead Paragraph */}
      <p className="text-2xl font-extralight leading-8 tracking-wide text-slate-700">
        Hello there! I am Michael Fryer, a{" "}
        <span className="font-normal">Data Scientist</span> &amp;{" "}
        <span className="font-normal">Software Engineer</span>. I graduated from{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.mtech.edu"
          className="font-light"
        >
          Montana Technological University
        </Link>{" "}
        in 2019 with a Bachelor of Science in Software Engineering and a
        Bachelor of Science in Computer Science. I am currently pursuing a
        Master&apos;s in Applied Data Science at{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.frankfurt-school.de/en/home"
          className="font-light"
        >
          Frankfurt School of Finance &amp; Management
        </Link>
        , where I also work as a Machine Learning Teaching Assistant.
      </p>
      {/* Background Paragraph */}
      <p className="sm:text-justify">
        While at Montana Tech, I worked as a Software Engineer at the Butte Food
        Bank, where I designed and built FRED, a full-stack inventory and
        reporting system. After graduating, I joined Heavy Iron Studios in LA as
        an Associate Game Programmer. During my tenure at Heavy Iron, I was the
        lead UI developer on Pac-Man: Mega Tunnel Battle. Our game was built in
        UE4 and delivered to Bandai Namco in the fall of 2020. In addition to my
        responsibilities on the game UI, I also created the Live Ops portal that
        Bandai Namco would use once the game shipped — for that I reached for
        Django. After we shipped, I was put on the Rocket League team where I
        briefly worked on a still-unreleased project. I took a planned career
        break after Heavy Iron Studios to pursue independent projects and
        transition into data science. During that time I built and deployed web
        applications for my content creation work, including the Arcadia site
        that aggregates and distributes video content for a creator collective.
        I collaborated with a team on regular content production while also
        completing self-directed study in Python, statistics, and machine
        learning — work that ultimately led to my acceptance into the M.Sc. in
        Applied Data Science at Frankfurt School of Finance &amp; Management.
      </p>
      {/* Education Paragraph */}
      <div>
        <Image
          src="/diplomas_edit.jpg"
          alt="Diplomas"
          width={816}
          height={459}
          className={clsx(
            "mb-4 h-auto w-full rounded-sm shadow-xl sm:mb-2 sm:w-7/12 md:w-1/2",
            alternateFloat(0),
          )}
        />
        <p className="sm:text-justify">
          During my schooling at Montana Tech, I served as the Secretary to my
          school&apos;s student chapter of ACM in 2017-2018 and as the President
          in 2018-2019. Before becoming Secretary, I volunteered at one of the
          local museums, the Butte Science Mine, on a project called Digital
          Signage. The project&apos;s vision was to bring more interactive,
          exploration-based digital interfaces to the museum that help children
          and adults learn more about a subject. Helping with Digital Signage
          secured my club roughly $4,000 for an industry trip we later took to
          Seattle, where we visited companies such as Microsoft, Valve, and a
          couple of startups. As the Secretary, and again as the President, I
          helped my department get accredited as a testing site for the ICPC
          regionals. This meant schools from all around Montana could commute to
          Butte to compete in the competition as opposed to the next closest
          testing site in Colorado. Many smaller schools, including ourselves,
          would not have been able to compete if there was not a local testing
          site like ours.
        </p>
      </div>
      {/* YouTube Paragraph */}
      <div>
        <div className="mb-4 w-full md:float-right md:mb-2 md:ml-4 md:w-1/2">
          <ArcadiaVideo width={1280 / 3} height={720 / 3} />
        </div>
        <p className="sm:text-justify">
          In my free time I love to pursue my hobbies of playing video games and
          creating video game content. In 2021, I started creating Minecraft
          content on{" "}
          <a target="_blank" rel="noreferrer noopener" href={YouTube}>
            YouTube
          </a>
          . Over the years I have gained over 500 subscribers and have felt my
          skills as a creator and editor grow. Starting this hobby allowed me
          the opportunity to become part of a Survival Multiplayer Server, or
          SMP. By working together with the other members of Arcadia SMP, we
          have created a wonderful world for viewers to enjoy. One of my
          favorite projects on Arcadia was creating a deckbuilder game for my
          fellow members to play. I did everything from scratch &mdash; card
          design, card balance, and &quot;
          <span className="italic">programming</span>&quot; in Minecraft. The
          one exception was card art, which a fellow server member helped me
          with. When the game finally released, it was incredible to watch my
          server members get hooked on it. Watching players theory-craft about
          card combos &mdash; or rage over their most-wanted cards not showing
          up in the shop &mdash; was endlessly entertaining. Seeing this project
          through from start to finish was highly rewarding and has given me
          plenty of ideas for similar projects in the future.
        </p>
      </div>
      {/* Other Hobbies Paragraph */}
      <div>
        <Image
          src="/fish.jpeg"
          alt="Fish"
          width={1024}
          height={771}
          className={clsx(
            "mb-4 h-auto w-full rounded-sm shadow-xl sm:mb-2 sm:w-7/12 md:w-1/2 lg:w-7/12",
            alternateFloat(2),
          )}
        />
        <p className="sm:text-justify">
          Not all my hobbies are related to the computer. I also love getting
          outdoors, especially during the summer. Taking a drive out to
          Polebridge, MT or floating down the Tobacco River are both fantastic
          ways to spend a summer day, as is throwing bags in the backyard. I
          also enjoy getting out early in the morning to do some trolling on
          Lake Koocanusa. In the fall of 2024, I caught the biggest rainbow
          trout I&apos;ve ever seen out on Koocanusa &mdash; it weighed in at
          around 4.5 pounds! After some time in the smoker it tasted delicious
          as well. I&apos;m looking forward to getting out fly fishing in the
          spring again. Montana winters can be pretty long, so you have to make
          the most of summer while it&apos;s around!
        </p>
      </div>
      {/* Cabin Paragraph */}
      <div>
        <Image
          src="/cabin_before.jpg"
          alt="Cabin Before"
          width={1008}
          height={756}
          className="float-left mb-4 h-auto w-full rounded-sm shadow-xl sm:mb-2 sm:mr-4 sm:w-5/12 md:w-5/12"
        />
        <Image
          src="/cabin_after.jpg"
          alt="Cabin After"
          width={378}
          height={672}
          className="float-right mb-2 ml-4 hidden h-auto w-full rounded-sm shadow-xl sm:inline sm:w-1/4 md:w-1/4"
        />
        <p className="mb-4 sm:m-0 sm:text-justify">
          In the fall of 2024, my parents and I renovated the exterior of the
          cabin I am currently living in. The previous owners hadn&apos;t taken
          great care of it, leading to significant exterior damage &mdash; they
          had never applied chinking to seal the logs, and the siding was nearly
          destroyed by birds going after bugs in the walls. We applied chinking
          to all the exterior logs to keep out bugs and help seal against the
          cold. We also ripped off all the old siding, which was unpainted
          tongue-and-groove just stapled to backer board. Once the six-week-late
          Hardie board finally showed up, we got it up over a fresh layer of
          Tyvek. There is still more work to be done inside, but the exterior
          work has already made a huge difference!
        </p>
        <Image
          src="/cabin_after.jpg"
          alt="Cabin After"
          width={378}
          height={672}
          className="float-right inline h-auto w-full rounded-sm shadow-xl sm:hidden sm:w-7/12 md:w-1/4"
        />
      </div>
      {/* Closing Paragraph */}
      <p className="sm:text-justify">
        If you made it this far, thanks for reading through all that. There are
        links to this project&apos;s{" "}
        <Link
          className="hover:underline hover:underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
          href={GitHub}
        >
          GitHub
        </Link>
        , my{" "}
        <Link
          className="hover:underline hover:underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
          href={YouTube}
        >
          YouTube
        </Link>
        , and a download for my{" "}
        <Link
          className="hover:underline hover:underline-offset-4"
          target="_self"
          rel="noopener noreferrer"
          href={CV}
        >
          CV
        </Link>{" "}
        here as well as in the footer.
      </p>
    </main>
  );
}
