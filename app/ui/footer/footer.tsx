import Image from 'next/image';
import { Email, GitHub, Resume, YouTube } from '@/app/lib/ref-links';
import { DocumentIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import FooterLink from '@/app/ui/footer/footer-link';

export default function Footer() {
	const footerLinkClass = "flex items-center gap-2 hover:underline hover:underline-offset-4";

	return (
		<footer className="row-start-3 flex flex-col sm:flex-row gap-6 flex-wrap items-center justify-center px-8">
			{/* GitHub */}
		  <FooterLink
				href={GitHub}
				className={footerLinkClass}
		  >
				{/* Dark-mode Icon */}
				<Image
					aria-hidden
					src="github-mark-white.svg"
					alt="GitHub icon"
					width={16}
					height={16}
					className="hidden dark:inline"
				/>
				{/* Light-mode Icon */}
				<Image
					aria-hidden
					src="github-mark.svg"
					alt="GitHub icon"
					width={16}
					height={16}
					className="dark:hidden inline"
				/>
				<span>GitHub</span>
				</FooterLink>
			{/* Resume */}
		  <FooterLink
				href={Resume}
				className={footerLinkClass}
		  >
				<DocumentIcon className="w-5"/>
				<span>Resume</span>
		  </FooterLink>
			{/* YouTube */}
			<FooterLink
				href={YouTube}
				className={footerLinkClass}
			>
				<Image
					aria-hidden
					src="/youtube_social_icon_dark.png"
					alt="YouTube icon"
					width={20}
					height={20}
					className="dark:filter dark:invert dark:contrast-200"
				/>
			<span>YouTube</span>
			</FooterLink>

			{/* Email */}
			<div
				className={`${footerLinkClass} hover:cursor-pointer`}
			>
				<EnvelopeIcon className="w-5"/>
				<span className="select-all">{Email}</span>
			</div>
		</footer>
	);
}
