"use client";

import { GitHub, CV, Bluesky, Email, LinkedIn } from "@/app/lib/ref-links";
import { DocumentIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import NavSocial from "@/app/ui/navbar/nav-social";
import NavSocialWrapper from "@/app/ui/navbar/nav-social-wrapper";
import CvModal from "@/app/ui/cv/cv-modal";
import { useCvModal } from "@/app/lib/hooks/use-cv-modal";
import clsx from "clsx";

const socials = [
  { id: "linkedin", href: LinkedIn, src: "/icons/linked-in.png", alt: "LinkedIn", title: "LinkedIn", width: 635, height: 540 },
  { id: "github",   href: GitHub,   src: "/icons/github-mark-dark.svg", alt: "GitHub", title: "GitHub", width: 98, height: 96 },
  { id: "bluesky",  href: Bluesky,  src: "/icons/bluesky_icon.svg", alt: "Bluesky", title: "Bluesky", width: 600, height: 530 },
];

export default function NavSocials({
  isNavExpanded,
  collapseCallback,
  onCvModalChange,
}: {
  isNavExpanded: boolean;
  collapseCallback?: () => void;
  onCvModalChange?: (isOpen: boolean) => void;
}) {
  const { isOpen, open, close, isMobile } = useCvModal(onCvModalChange);

  return (
    <>
      <div
        className={clsx(
          "flex items-center gap-4 transition-all duration-0 md:gap-12",
          isNavExpanded ? "translate-y-0" : "-translate-y-full delay-1000",
        )}
      >
        {/* Front decorator */}
        <NavSocialWrapper visible={isNavExpanded} delayFactor={1}>
          <div className="h-1 w-16 rounded-sm bg-purple-800 sm:w-32" />
        </NavSocialWrapper>
        {/* Social icons */}
        {socials.map(({ id, href, src, alt, title, width, height }, index) => (
          <NavSocialWrapper key={id} visible={isNavExpanded} delayFactor={index + 2}>
            <NavSocial href={href}>
              <Image
                src={src}
                alt={`${alt} Icon`}
                title={title}
                width={width}
                height={height}
                className="h-auto w-8 md:w-10"
              />
            </NavSocial>
          </NavSocialWrapper>
        ))}
        {/* CV */}
        <NavSocialWrapper visible={isNavExpanded} delayFactor={socials.length + 2}>
          {isMobile ? (
            <div onClick={collapseCallback}>
              <NavSocial href={CV} target="">
                <DocumentIcon
                  title="View CV"
                  fill="black"
                  width={96}
                  height={96}
                  className="w-8 md:w-10"
                />
              </NavSocial>
            </div>
          ) : (
            <button
              onClick={open}
              className="hover:cursor-pointer hover:drop-shadow-md hover:filter"
              aria-label="View CV"
            >
              <div className="transition-position h-auto w-10 duration-300 ease-in-out hover:-translate-x-1 hover:-translate-y-1">
                <DocumentIcon
                  title="View CV"
                  fill="black"
                  width={96}
                  height={96}
                  className="w-8 md:w-10"
                />
              </div>
            </button>
          )}
        </NavSocialWrapper>
        {/* Email */}
        <NavSocialWrapper visible={isNavExpanded} delayFactor={socials.length + 3}>
          <NavSocial href={`mailto:${Email}`}>
            <EnvelopeIcon
              title="Hire me!"
              width={96}
              height={96}
              className="w-8 md:w-10"
            />
          </NavSocial>
        </NavSocialWrapper>
      </div>
      <CvModal isOpen={isOpen} onClose={close} />
    </>
  );
}
