// app/(admin)/components/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const menus = [
	{ label: "직원 관리", href: "/employees", icon: Users },
	{ label: "휴가 캘린더", href: "/calendar", icon: Calendar },
];

export default function Sidebar() {
	const pathname = usePathname();
	const [collapsed, setCollapsed] = useState(false);

	return (
		<aside
			className={`h-screen bg-white border-r transition-all duration-200
			${collapsed ? "w-20" : "w-45"}`}
		>
			{/* 상단 */}
			<div className="flex items-center justify-between p-4">
				{!collapsed && (
					<span className="font-bold text-lg">휴가 관리</span>
				)}

				<button
					onClick={() => setCollapsed((v) => !v)}
					className="p-1 rounded hover:bg-gray-100"
				>
					{collapsed ? <ChevronRight /> : <ChevronLeft />}
				</button>
			</div>

			<nav className="px-4 space-y-2">
				{menus.map((menu) => {
					const active = pathname.startsWith(menu.href);
					const Icon = menu.icon;

					return (
						<Link
							key={menu.href}
							href={menu.href}
							className={`group relative flex items-center gap-3 px-1 py-2 rounded
                ${active ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"}`}
						>
							<Icon className="size-5 shrink-0" />

							{/* 펼침 상태 */}
							{!collapsed && <span>{menu.label}</span>}

							{/* 접힘 상태 툴팁 */}
							{collapsed && (
								<span
									className="absolute left-full ml-2 whitespace-nowrap
                    rounded bg-gray-800 px-2 py-1 text-xs text-white
                    opacity-0 group-hover:opacity-100 z-20"
								>
									{menu.label}
								</span>
							)}
						</Link>
					);
				})}
			</nav>
		</aside>
	);
}
