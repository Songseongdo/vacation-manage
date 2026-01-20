import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "휴가 관리",
	description: "휴가 관리용 프로그램",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
