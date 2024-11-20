import clsx from "clsx"

export default function NavExpansionWidget({
	isNavExpanded,
	clickCallback,
} : {
	isNavExpanded: boolean;
	clickCallback: () => void;
}) {
	return (
		<div
			className="flex flex-col w-16 h-4 gap-8 hover:cursor-pointer overflow-hidden"
			onClick={() => clickCallback()}
		>
			<div
				className={clsx(
					"top-0 transition-all transform duration-150 text-center hover:tracking-megaWide text-purple-900 font-sans font-semibold leading-4 tracking-wider ",
					isNavExpanded ? "-translate-y-4" : "translate-y-0",
					{
						"dark:text-purple-400" : !isNavExpanded
					},
				)}
			>
				MENU<br/>
				BACK
			</div>
		</div>
	)
}