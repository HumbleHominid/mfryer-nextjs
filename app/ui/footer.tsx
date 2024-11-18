'use client';

import Image from 'next/image';
import { Email, GitHub, Resume } from '@/app/lib/ref-links';
import { DocumentIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

export default function Footer() {
	let showCopied = false;
	const copyEmail = function() {
		navigator.clipboard.writeText(Email).then(() => {
			showCopied = true;
		});
	}

	return (
		<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
			{/* GitHub */}
		  <a
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
		  </a>
			{/* Resume */}
		  <a
			className="flex items-center gap-2 hover:underline hover:underline-offset-4"
			href={Resume}
			target="_blank"
			rel="noopener noreferrer"
		  >
			<DocumentIcon className="w-5"/>
			<span>Resume</span>
		  </a>
			{/* Email */}
			<div
			className="flex relative items-center gap-2 hover:cursor-pointer hover:underline hover:underline-offset-4"
			onClick={copyEmail}
			>
				<EnvelopeIcon className="w-5"/>
				<span className="select-all">{Email}</span>
			</div>
		</footer>
	);
  }
