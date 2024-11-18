'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/about' },
	// { name: 'Game', href: '/game' },
]

export default function NavLinks() {
	const pathname = usePathname();

	return (
		<>
			{links.map((link) => {
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
							'flex h-[32px] grow items-center justify-center self-center rounded-md font-medium bg-gray-50 hover:bg-sky-100 hover:text-blue-600 px-5 shadow',
							{
								'bg-sky-100 text-blue-600': pathname === link.href
							},
						)}
					>
						<p className="font-medium text-lg ">{link.name}</p>
					</Link>
				);
			})}
		</>
	)
}