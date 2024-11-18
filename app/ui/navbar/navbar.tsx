import Link from "next/link";
import MFLogo from "@/app/ui/MFLogo";
import NavLinks from "@/app/ui/navbar/nav-links";
import { GitHub, Resume, YouTube } from "@/app/lib/ref-links";
import NavImage from "@/app/ui/navbar/nav-image";
import { DocumentIcon } from '@heroicons/react/24/solid';
import NavSocial from "@/app/ui/navbar/nav-social";

export default function Navbar() {
	return (
		<div className="h-15 flex justify-between w-full bg-white text-gray-800 text-sm font-medium px-4 py-3 sm:py-1 sticky top-0">
			{/* Left Section */}
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
			{/* Right Section */}
			<div className="flex justify-end gap-4">
				{/* GitHub */}
				<NavSocial
					href={GitHub}
				>
					<NavImage
						src="/github-mark.svg"
						alt="GitHub icon"
					/>
				</NavSocial>
				{/* Resume */}
				<NavSocial
					href={Resume}
				>
					<DocumentIcon className="w-5"/>
				</NavSocial>
				{/* YouTube */}
				<NavSocial
					href={YouTube}
				>
					<NavImage
						src="/youtube_social_icon_dark.png"
						alt="YouTube icon"
					/>
				</NavSocial>
			</div>
		</div>
	)
}