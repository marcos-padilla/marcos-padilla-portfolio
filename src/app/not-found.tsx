'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Home, ArrowLeft, Code2 } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const errorLines = [
	'$ cd /path/to/page',
	'$ ls -la',
	'❌ File not found: index.html',
	'',
	'Possible causes:',
	'  • The page has been moved or deleted',
	'  • The URL was mistyped',
	'  • The page never existed',
	'',
	'Available commands:',
	'  • home() - Return to homepage',
	'  • back() - Go to previous page',
]

export default function NotFound() {
	const [displayedText, setDisplayedText] = useState('')
	const [currentLineIndex, setCurrentLineIndex] = useState(0)
	const [showCursor, setShowCursor] = useState(true)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	useEffect(() => {
		// Typing animation for error lines
		const interval = setInterval(() => {
			if (currentLineIndex < errorLines.length) {
				const currentLine = errorLines[currentLineIndex]
				if (displayedText.length < currentLine.length) {
					setDisplayedText(
						currentLine.substring(0, displayedText.length + 1)
					)
				} else {
					setDisplayedText('')
					setCurrentLineIndex((prev) => prev + 1)
				}
			}
		}, 50)

		return () => clearInterval(interval)
	}, [currentLineIndex, displayedText])

	useEffect(() => {
		// Cursor blink animation
		const cursorInterval = setInterval(() => {
			setShowCursor((prev) => !prev)
		}, 530)

		return () => clearInterval(cursorInterval)
	}, [])

	return (
		<div className='min-h-screen bg-zinc-50 text-zinc-900 flex items-center justify-center p-4 relative overflow-hidden'>
			{/* Subtle background pattern */}
			<div className='absolute inset-0 opacity-[0.02]'>
				<div
					className='absolute inset-0'
					style={{
						backgroundImage: `
              linear-gradient(rgba(15, 23, 42, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15, 23, 42, 0.1) 1px, transparent 1px)
            `,
						backgroundSize: '40px 40px',
					}}
				/>
			</div>

			{/* Gradient orbs */}
			<div className='absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -translate-y-1/2' />
			<div className='absolute bottom-0 right-1/4 w-96 h-96 bg-slate-200/30 rounded-full blur-3xl translate-y-1/2' />

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				className='relative z-10 w-full max-w-4xl'
			>
				{/* Console window - light theme */}
				<div className='bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-xl overflow-hidden'>
					{/* Console header */}
					<div className='bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between'>
						<div className='flex items-center gap-3'>
							<div className='flex gap-2'>
								<div className='w-3 h-3 rounded-full bg-red-400/60' />
								<div className='w-3 h-3 rounded-full bg-yellow-400/60' />
								<div className='w-3 h-3 rounded-full bg-green-400/60' />
							</div>
							<div className='flex items-center gap-2 ml-4'>
								<Terminal className='w-4 h-4 text-slate-500' />
								<span className='text-sm text-slate-600 font-mono'>
									console@marcos-padilla.dev
								</span>
							</div>
						</div>
						<Code2 className='w-5 h-5 text-slate-400' />
					</div>

					{/* Console body */}
					<div className='p-8 font-mono text-sm bg-white'>
						{/* Error header */}
						<div className='mb-8'>
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.2, duration: 0.4 }}
								className='flex items-center gap-3 mb-2'
							>
								<span className='text-6xl font-bold text-slate-900'>404</span>
							</motion.div>
							<motion.p
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4, duration: 0.4 }}
								className='text-slate-600 text-lg font-semibold'
							>
								Page Not Found
							</motion.p>
						</div>

						{/* Error message with typing animation */}
						<div className='text-slate-700 space-y-1.5 mb-8 min-h-[200px]'>
							{errorLines.slice(0, currentLineIndex).map((line, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.2 }}
									className={
										line.startsWith('❌')
											? 'text-red-600 font-semibold'
											: line.startsWith('$')
											? 'text-blue-600'
											: line.startsWith('  •')
											? 'text-slate-600 ml-4'
											: line.startsWith('Possible') ||
											  line.startsWith('Available')
											? 'text-slate-800 font-semibold mt-2'
											: 'text-slate-500'
									}
								>
									{line || '\u00A0'}
								</motion.div>
							))}
							{currentLineIndex < errorLines.length && (
								<div className='text-slate-700'>
									{displayedText}
									<span
										className={`inline-block w-2 h-4 bg-slate-900 ml-1 align-middle ${
											showCursor ? 'opacity-100' : 'opacity-0'
										} transition-opacity duration-150`}
									/>
								</div>
							)}
						</div>

						{/* Action buttons */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1.8, duration: 0.5 }}
							className='flex flex-wrap gap-4 pt-6 border-t border-slate-200'
						>
							<Button
								asChild
								className='bg-slate-900 hover:bg-slate-800 text-white font-semibold shadow-sm hover:shadow-md transition-all'
							>
								<Link href='/'>
									<Home className='w-4 h-4 mr-2' />
									Go Home
								</Link>
							</Button>
							<Button
								asChild
								variant='outline'
								className='border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900'
								onClick={() => window.history.back()}
							>
								<Link
									href='#'
									onClick={(e) => {
										e.preventDefault()
										window.history.back()
									}}
								>
									<ArrowLeft className='w-4 h-4 mr-2' />
									Go Back
								</Link>
							</Button>
						</motion.div>

						{/* Decorative code snippet */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 2.2, duration: 0.5 }}
							className='mt-8 pt-6 border-t border-slate-200'
						>
							<div className='bg-slate-50 rounded-lg p-4 border border-slate-200'>
								<pre className='text-xs text-slate-600 font-mono overflow-x-auto'>
									{`// The page you're looking for doesn't exist
function navigate() {
  return {
    home: '/',
    back: history.back()
  }
}`}
								</pre>
							</div>
						</motion.div>
					</div>
				</div>

				{/* Subtle floating elements */}
				{mounted && (
					<div className='absolute inset-0 pointer-events-none overflow-hidden -z-10'>
						{[...Array(8)].map((_, i) => (
							<motion.div
								key={i}
								className='absolute w-1 h-1 bg-slate-300 rounded-full'
								initial={{
									x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
									y: (typeof window !== 'undefined' ? window.innerHeight : 1080) + 20,
									opacity: 0,
								}}
								animate={{
									y: -20,
									opacity: [0, 0.4, 0],
								}}
								transition={{
									duration: Math.random() * 4 + 3,
									repeat: Infinity,
									delay: Math.random() * 2,
									ease: 'easeOut',
								}}
							/>
						))}
					</div>
				)}
			</motion.div>
		</div>
	)
}
