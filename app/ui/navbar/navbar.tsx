import NavBadge from "@/app/ui/navbar/nav-badge";
import NavMail from "@/app/ui/navbar/nav-mail";

export default function Navbar() {
	return (
		<div className="flex justify-between w-full text-gray-800 text-sm font-medium sticky top-0">
			<div className="m-4">
				<NavBadge />
			</div>
			<NavMail />
		</div>
	)
}