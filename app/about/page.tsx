import { Metadata } from "next";

export const metadata : Metadata = {
	title: "About",
};

export default function Page() {
	return(
		<main className="flex flex-col gap-6 font-normal text-lg">
			<h1 className="text-9xl font-thin">About Me</h1>
		</main>
	);
}