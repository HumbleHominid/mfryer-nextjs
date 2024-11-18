import Link from "next/link";
import MFLogo from "@/app/ui/MFLogo";
import NavLinks from "@/app/ui/nav-links";
import { GitHub, Resume, YouTube } from "@/app/lib/ref-links";
import Image from "next/image";
import { DocumentIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
	return (
		<div className="h-15 flex justify-between w-full bg-white text-gray-800 text-sm font-medium px-4 py-3 sm:py-1 sticky top-0">
			<div className="flex justify-start gap-4">
				<Link
					className="hidden sm:flex items-end justify-start rounded-md self-center"
					href="/"
				>
					<MFLogo />
				</Link>
				<div className="flex gap-4">
					<NavLinks/>
				</div>
			</div>
			<div className="flex justify-end gap-4">
				<Link
					href={GitHub}
					className="self-center"
					target="_blank"
				>
					<Image
						aria-hidden
						src="/github-mark.svg"
						alt="GitHub icon"
						width={24}
						height={24}
					/>
				</Link>
				<Link
					href={Resume}
					className="self-center"
				>
					<DocumentIcon className="w-5"/>
				</Link>
				<Link
					href={YouTube}
					className="self-center"
					target="_blank"
				>
					<Image
						aria-hidden
						src="/youtube_social_icon_dark.png"
						alt="YouTube icon"
						width={24}
						height={24}
					/>
				</Link>
			</div>
		</div>
	)
}