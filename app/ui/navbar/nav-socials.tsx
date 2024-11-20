import { GitHub, Resume, Bluesky } from "@/app/lib/ref-links";
import { DocumentIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import NavSocial from "./nav-social";

export default function NavSocials()  {
	return (
		<div className="flex items-center gap-12">
			{/* Front decorator */}
			<div className="h-1 w-32 bg-purple-800 rounded-sm" />
			{/* GitHub */}
			<NavSocial href={GitHub} >
				<Image
					src="/icons/github-mark-dark.svg"
					alt="GitHub Icon"
					title="GitHub"
					width={98}
					height={96}
				/>
			</NavSocial>
			{/* Bluesky */}
			<NavSocial href={Bluesky} >
				<Image
					src="/icons/bluesky_icon.svg"
					alt="Bluesky Icon"
					title="Bluesky"
					width={600}
					height={530}
				/>
			</NavSocial>
			{/* Resume */}
			<NavSocial href={Resume} >
				<DocumentIcon
					title="View Resume"
					fill="black"
					width={96}
					height={96}
					className="w-10"
				/>
			</NavSocial>
		</div>
	);
}