import Image from 'next/image';
import { Email, GitHub, Resume } from '@/app/lib/ref-links';
import { DocumentIcon } from '@heroicons/react/24/solid';

export default function Footer() {
	return (
		<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
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
			GitHub
		  </a>
		  <a
			className="flex items-center gap-2 hover:underline hover:underline-offset-4"
			href={Resume}
			target="_blank"
			rel="noopener noreferrer"
		  >
			<DocumentIcon className="w-5"/> Resume
		  </a>
		</footer>
	);
  }
