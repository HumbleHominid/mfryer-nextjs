import { GitHub, Resume, Bluesky } from "@/app/lib/ref-links";
import { DocumentIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import NavSocial from "@/app/ui/navbar/nav-social";
import NavSocialWrapper from "@/app/ui/navbar/nav-social-wrapper";
import clsx from "clsx";

export default function NavSocials({
	isNavExpanded,
} : {
	isNavExpanded: boolean;
})  {
	let count = 0;
	return (
		<div
			className={clsx(
				"flex items-center gap-12",
				{
					"collapse" : !isNavExpanded,
				},
			)}
		>
			{/* Front decorator */}
			<NavSocialWrapper
				visible={isNavExpanded}
				delayFactor={++count}
			>
				<div className="h-1 w-32 bg-purple-800 rounded-sm" />
			</NavSocialWrapper>
			{/* GitHub */}
			<NavSocialWrapper
				visible={isNavExpanded}
				delayFactor={++count}
			>
				<NavSocial href={GitHub} >
					<Image
						src="/icons/github-mark-dark.svg"
						alt="GitHub Icon"
						title="GitHub"
						width={98}
						height={96}
					/>
				</NavSocial>
			</NavSocialWrapper>
			{/* Bluesky */}
			<NavSocialWrapper
				visible={isNavExpanded}
				delayFactor={++count}
			>
				<NavSocial href={Bluesky} >
					<Image
						src="/icons/bluesky_icon.svg"
						alt="Bluesky Icon"
						title="Bluesky"
						width={600}
						height={530}
					/>
				</NavSocial>
			</NavSocialWrapper>
			{/* Resume */}
			<NavSocialWrapper
				visible={isNavExpanded}
				delayFactor={++count}
			>
				<NavSocial href={Resume} >
					<DocumentIcon
						title="View Resume"
						fill="black"
						width={96}
						height={96}
						className="w-10"
					/>
				</NavSocial>
			</NavSocialWrapper>
		</div>
	);
}