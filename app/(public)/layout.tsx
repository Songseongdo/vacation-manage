export default function PublicLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen">
			<header className="h-14 border-b px-6 flex items-center">
				휴가 캘린더
			</header>

			<main className="p-6">{children}</main>
		</div>
	);
}
