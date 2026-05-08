"use client";

import Image from "next/image";
import Link from "next/link";
import { Email, GitHub, CV } from "@/app/lib/ref-links";
import { DocumentIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import FooterLink from "@/app/ui/footer/footer-link";
import CvModal from "@/app/ui/cv/cv-modal";
import { useCvModal } from "@/app/lib/hooks/use-cv-modal";

export default function Footer() {
  const { isOpen, open, close, isMobile } = useCvModal();
  const footerLinkClass =
    "flex items-center gap-2 hover:underline hover:underline-offset-4 hover:cursor-pointer";

  return (
    <>
      <footer className="row-start-3 flex flex-col flex-wrap items-center justify-center gap-6 px-8 sm:flex-row">
        {/* GitHub */}
        <FooterLink href={GitHub} className={footerLinkClass}>
          <Image
            aria-hidden
            src="/icons/github-mark-dark.svg"
            alt="GitHub icon"
            width={16}
            height={16}
            className="inline"
          />
          <span>GitHub</span>
        </FooterLink>
        {/* CV */}
        {isMobile ? (
          <FooterLink href={CV} className={footerLinkClass} target="_self">
            <DocumentIcon className="w-5" />
            <span>CV</span>
          </FooterLink>
        ) : (
          <button onClick={open} className={footerLinkClass}>
            <DocumentIcon className="w-5" />
            <span>CV</span>
          </button>
        )}
        {/* Email */}
        <FooterLink href={`mailto:${Email}`} className={footerLinkClass}>
          <EnvelopeIcon className="w-5" />
          <span>{Email}</span>
        </FooterLink>
      </footer>
      <CvModal isOpen={isOpen} onClose={close} />
    </>
  );
}
