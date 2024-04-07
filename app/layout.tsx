import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import Header from '@/components/globals/header'
import ActiveSectionProvider from '@/providers/active-section-provider'
import { ToggleTheme } from '@/components/globals/toggle-theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Marcos Padilla | Crafting Powerful Full-Stack Web Solutions for Businesses',
	description: `Welcome to Marcos Padilla's portfolio, where expertise meets innovation in full-stack web development. Discover how Marcos creates tailored solutions that elevate businesses through seamless digital experiences and cutting-edge technology. Explore a range of projects showcasing mastery in web development, from front-end design to back-end functionality, all designed to drive growth and success for businesses`,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
			suppressContentEditableWarning
			className='!scroll-smooth'
		>
			<body
				className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
					storageKey='marcos-padilla-theme'
				>
					<ActiveSectionProvider>
						<Header />
						{children}
						<ToggleTheme />
					</ActiveSectionProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
