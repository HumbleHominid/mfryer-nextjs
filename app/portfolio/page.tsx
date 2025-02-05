import { Metadata } from "next";
import PortfolioItem from "../ui/portfolio/portfolio-items";
import SlideInItem from "../ui/slide-in-item";

export const metadata : Metadata = {
	title: "Portfolio",
};

export default function Page() {
	const portfolioItems = [
		{title: 'ArcadiaSMP Website', link: 'https://arcadia.yt', description: 'Website for Arcadia SMP. Publishes new member uploads and displays member\'s social media information. Pulls upload information from the youtube api.'},
		{title: 'Personal Website', link: 'https://mfryer.us', description: 'Personal portfolio website built in NextJS and Tailwind. Resume and contact information available from here.'},
		{title: 'Hangman', link: 'https://hangman.mfryer.us', description: 'A "daily game" where the hangman word is pulled from Merriam-Webster\'s Word of the day. Built with NextJS and Tailwind.'},
		{title: 'Snake', link: 'https://snake.mfryer.us', description: 'The game Snake built in NextJS.'},
		{title: 'ArcadiaSMP Social Media Application', link: 'https://github.com/HumbleHominid/arcadia-tweet-bot', description: 'Social media application to automatically post announcements of ArcadiaSMP member\'s video releases. Built with python using tweepy and atproto libraries.'},
		{title: 'Entity Component System', link: 'https://github.com/HumbleHominid/entity-component-system', description: 'The start of an entity component system game engine written in c++ and vulkan.'},
		{title: 'Pong', link: 'https://github.com/HumbleHominid/Pong', description: 'The game Pong written in C for the MSP430. Final project for my embedded systems course completed with two other classmates.'},
		{title: 'Wumpus World', link: 'https://github.com/HumbleHominid/Wumpus-World', description: 'Text-based python implementation of "Hunt the Wumpus" created while I was still in school.'}
	]
	return (
		<main className="flex flex-col w-full">
			<h1 className="text-8xl md:text-9xl font-thin mb-10">Portfolio</h1>
			<div
				className="flex flex-col md:w-9/12 xl:w-1/2 self-center divide-y divide-slate-400"
			>
				{portfolioItems.map((item) => {
					return (
						<SlideInItem key={item.title} className="p-8">
							<PortfolioItem
								data={item}
							/>
						</SlideInItem>
					)
				})}
			</div>
		</main>
	);
}