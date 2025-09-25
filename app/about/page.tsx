import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { YouTube, GitHub, CV } from "@/app/lib/ref-links";
import ArcadiaVideo from "@/app/ui/video/ArcadiaVideo";

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  let incVal = 0;

  return (
    <main className="flex flex-col gap-6 text-lg font-normal">
      <h1 className="text-9xl font-thin">About Me</h1>
      {/* Lead Paragraph */}
      <p className="text-2xl font-extralight leading-8 tracking-wide text-slate-700">
        Hello there! I am Michael Fryer, a Software Engineer that graduated from{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.mtech.edu"
          className="font-normal"
        >
          Montana Technological University
        </Link>{" "}
        in 2019 with a Bachelor of Science in Software Engineering and a
        Bachelor of Science in Computer Science with emphasis in Game Design. I
        am now pursuing a Master&apos;s in Applied Data Science at{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.frankfurt-school.de/en/home"
          className="font-normal"
        >
          Frankfurt School of Finance &amp; Management
        </Link>
        .
      </p>
      {/* Background Paragraph */}
      <p className="sm:text-justify">
        I have previously worked at Heavy Iron Studios in LA as an Associate
        Game Developer. During my tenure at Heavy Iron, I was the lead UI
        developer on PacMan: Mega Tunnel Battle. Our game was built in UE4 and
        delivered to Bandai Namco in the fall of 2020. In addition to my
        responsibilities on the game UI, I also created the Live Ops portal that
        Bandai Namco would use once the game was shipped. For that project, I
        chose to use Django as my front-end framework of choice. After our
        deliverable, I was put on the Rocket League team where I briefly worked
        on a still unreleased project. After leaving for personal reasons, I
        have been pursuing my passion for content creation. Over the course of
        these years, I have grown both my YouTube channel and my Twitch channel.
        By dedicating myself to working on content creation I was invited to
        become part of a content creation team where I would work
        collaboratively with other members to create entertaining content. This
        journey has let me develop many skills I wouldn&apos;t have otherwise.
        This includes video editing, image editing, project management, and
        leadership.
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
            ++incVal % 2 === 0 ? "float-right sm:ml-4" : "float-left sm:mr-4",
          )}
        />
        <p className="sm:text-justify">
          During my schooling at Montana Tech, I served as the Secretary to my
          school&apos;s student chapter of ACM in 2017-2018 and as the President
          in 2018-2019. Before becoming the Secretary in 2016, I volunteered to
          work for one of the local museums in town, the Butte Science Mine, on
          a project called Digital Signage. The project&apos;s vision is to
          bring more interactive exploration-based digital interfaces to the
          museum that helps children and adults learn more about a subject.
          Helping with Digital Signage secured my club roughly $4,000 for a
          future industry trip we took to Seattle where we visited companies
          such as Microsoft, Valve, and a couple start-ups. As the Secretary,
          and again as the President, I helped my department get accredited as a
          testing site for the ICPC regionals. This meant schools from all
          around Montana could commute to Butte to compete in the competition as
          opposed to the next closest testing site in Colorado. Many smaller
          schools, including ourselves, would not have been able to compete in
          the competition if there was not a local testing site like ours.
        </p>
      </div>
      {/* YouTube Paragraph */}
      <div>
        <div
          className={clsx(
            "mb-4 w-full md:mb-2 md:w-1/2",
            ++incVal % 2 === 0
              ? "md:float-right md:ml-4"
              : "md:float-left md:mr-4",
          )}
        >
          <ArcadiaVideo width={1280 / 3} height={720 / 3} />
        </div>
        <p className="sm:text-justify">
          In my free time I love to pursue my hobbies of playing video games and
          creating video game content. In 2021 I started creating Minecraft
          content on{" "}
          <a target="_blank" rel="noreferrer noopener" href={YouTube}>
            YouTube
          </a>
          . Over these years I have gained over 500 subscribers and have felt my
          skills as a creator and editor grow. Starting this hobby allowed me
          the opportunity to become part of a Survival Multiplayer Server, or
          SMP. By working together with the other members of Arcadia SMP, we
          have created a wonderful world for viewers to enjoy. One of my
          favorite projects on Arcadia was creating a deckbuilder game for my
          fellow members to play. I did everything from scratch from card
          design, card balance, and &quot;
          <span className="italic">programming</span>&quot; in Minecraft. The
          one exception would be card art which a fellow server member helped me
          with. When the game finally released, it was so amazing to see how
          many of my server members became addicted to it. The theory crafting
          about which cards go well together and players getting angry about the
          cards that they wanted not showing up in the shop was amazing to
          witness. Seeing this project through from start to finish was highly
          rewarding and has given me more ideas on how to go about similar
          projects in the future.
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
            ++incVal % 2 === 0 ? "float-right sm:ml-4" : "float-left sm:mr-4",
          )}
        />
        <p className="sm:text-justify">
          Not all my hobbies are related to the computer. I also enjoy getting
          outdoors, especially during the summer. Taking a drive out to
          Polebridge, MT or floating down the tobacco are both fantastic ways to
          spend a summer day. Or even spending time closer to home by just
          throwing bags in the backyard. I also enjoy getting out early in the
          morning to go do some trolling on Lake Koocanusa. In the fall of 2024
          I caught the biggest rainbow trout I&apos;ve ever seen out on
          Koocanusa. It weighed in around 4.5 pounds! After some time in the
          smoker it tasted delicious as well! I&apos;m looking forward to
          getting out a fly fishing in the spring again. Montana winters can be
          pretty long so you have to make the most out of summer while it&apos;s
          around!
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
          In the fall of 2024, my parent&apos;s and I renovated the exterior
          cabin I am currently living in. This cabin was not taken care of very
          well by the previous owners leading to significant exterior damage.
          The previous owners had never applied chinking to maintain the
          exterior logs. The siding was all but completely destroyed by birds
          trying to get at bugs in the walls. We applied chinking to all the
          exterior logs so no bugs can get in and to help seal off the cold
          winter. We also ripped off all of the old siding which was un-painted
          tongue-in-grove that was just stapled to backer-board. Once the 6-week
          late Hardieboard finally showed up, we got that up over a fresh layer
          of Tyvek. There is still more work to be done inside but the exterior
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
          target="_blank"
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
