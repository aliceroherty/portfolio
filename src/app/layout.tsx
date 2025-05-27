import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimationDisabledProvider } from './context/AnimationDisabledContext'
import { cookies } from 'next/headers'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: "Alice Carrier's Portfolio",
	description: 'A professional portfolio showcasing my work and skills.',
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const cookieStore = await cookies()
	const disableAnimations =
		cookieStore.get('DISABLE_ANIMATIONS')?.value === 'true'

	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<AnimationDisabledProvider initialDisabled={disableAnimations}>
					{children}
				</AnimationDisabledProvider>
			</body>
		</html>
	)
}
