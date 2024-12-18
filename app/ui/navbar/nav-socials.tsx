import { GitHub, Resume, Bluesky, Email } from "@/app/lib/ref-links";
import { DocumentIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
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
				"flex items-center gap-4 md:gap-12 transition-all duration-0",
				isNavExpanded ? "translate-y-0" : "delay-1000 -translate-y-full",
			)}
		>
			{/* Front decorator */}
			<NavSocialWrapper
				visible={isNavExpanded}
				delayFactor={++count}
			>
				<div className="h-1 w-16 sm:w-32 bg-purple-800 rounded-sm" />
			</NavSocialWrapper>
			{/* GitHub */}
			<NavSocialWrapper
				visible={isNavExpanded}
				delayFactor={++count}
			>
				<NavSocial href={GitHub}>
					<Image
						src="/icons/github-mark-dark.svg"
						alt="GitHub Icon"
						title="GitHub"
						width={98}
						height={96}
						className="w-8 m:w-10 h-auto"
					/>
				</NavSocial>
			</NavSocialWrapper>
			{/* Bluesky */}
			<NavSocialWrapper
				visible={isNavExpanded}
				delayFactor={++count}
			>
				<NavSocial href={Bluesky}>
					<Image
						src="/icons/bluesky_icon.svg"
						alt="Bluesky Icon"
						title="Bluesky"
						width={600}
						height={530}
						className="w-8 m:w-10 h-auto"
					/>
				</NavSocial>
			</NavSocialWrapper>
			{/* Resume */}
			<NavSocialWrapper
				visible={isNavExpanded}
				delayFactor={++count}
			>
				<NavSocial href={Resume}>
					<DocumentIcon
						title="View Resume"
						fill="black"
						width={96}
						height={96}
						className="w-8 md:w-10"
					/>
				</NavSocial>
			</NavSocialWrapper>
			{/* Email */}
			<NavSocialWrapper
				visible={isNavExpanded}
				delayFactor={++count}
			>
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
	);
}