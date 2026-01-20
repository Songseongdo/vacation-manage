// app/(admin)/components/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
	{ label: "직원 관리", href: "/employees" },
	{ label: "휴가 캘린더", href: "/calendar" },
];

export default function Sidebar() {
	const pathname = usePathname();

	return (
		<aside className="w-64 bg-white border-r">
			<div className="p-6 font-bold text-lg">휴가 관리</div>

			<nav className="px-4 space-y-2">
				{menus.map((menu) => {
					const active = pathname.startsWith(menu.href);

					return (
						<Link
							key={menu.href}
							href={menu.href}
							className={`block px-4 py-2 rounded
                ${active ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"}`}
						>
							{menu.label}
						</Link>
					);
				})}
			</nav>
		</aside>
	);
}
