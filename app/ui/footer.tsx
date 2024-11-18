import Image from 'next/image';
import { Email, GitHub, Resume, YouTube } from '@/app/lib/ref-links';
import { DocumentIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center px-8">
			{/* GitHub */}
		  <Link
				className="flex items-center gap-2 hover:underline hover:underline-offset-4"
				href={GitHub}
				target="_blank"
				rel="noopener noreferrer"
		  >
			<Image
			  aria-hidden
			  src="github-mark-white.svg"
			  alt="GitHub icon"
			  width={16}
			  height={16}
			/>
				<span>GitHub</span>
				</Link>
			{/* Resume */}
		  <Link
				className="flex items-center gap-2 hover:underline hover:underline-offset-4"
				href={Resume}
				target="_blank"
				rel="noopener noreferrer"
		  >
				<DocumentIcon className="w-5"/>
				<span>Resume</span>
		  </Link>
			{/* YouTube */}
			<Link
				className="flex items-center gap-2 hover:underline hover:underline-offset-4"
				href={YouTube}
				target="_blank"
				rel="noopener noreferrer"
			>
			<Image
			  aria-hidden
			  src="/youtube_social_icon_dark.png"
			  alt="YouTube icon"
			  width={20}
			  height={20}
				className="filter invert contrast-200"
			/>
			<span>YouTube</span>
			</Link>

			{/* Email */}
			<div
				className="flex relative items-center gap-2 hover:cursor-pointer hover:underline hover:underline-offset-4"
			>
				<EnvelopeIcon className="w-5"/>
				<span className="select-all">{Email}</span>
			</div>
		</footer>
	);
}
