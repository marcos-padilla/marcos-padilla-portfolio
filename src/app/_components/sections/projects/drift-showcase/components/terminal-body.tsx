'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GitBranch, CheckCircle2 } from 'lucide-react'
import { FULL_COMMAND, TERMINAL_STEPS } from '../data'
import { TerminalPatch } from './terminal-patch'

export function TerminalBody() {
	const containerRef = useRef<HTMLDivElement>(null)
	const isInView = useInView(containerRef, { once: true, amount: 0.2 })

	const [step, setStep] = useState(0)
	const [typedText, setTypedText] = useState('')

	useEffect(() => {
		if (!isInView) return

		let timeout: NodeJS.Timeout

		// Step 0: Typing the command
		if (step === 0) {
			if (typedText.length < FULL_COMMAND.length) {
				timeout = setTimeout(() => {
					setTypedText(FULL_COMMAND.slice(0, typedText.length + 1))
				}, 40 + Math.random() * 30)
			} else {
				timeout = setTimeout(() => setStep(1), 600)
			}
		}
		// Step 1: Analysis
		else if (step === 1) {
			timeout = setTimeout(() => setStep(2), 800)
		}
		// Step 2: Finding Error
		else if (step === 2) {
			timeout = setTimeout(() => setStep(3), 1400)
		}
		// Step 3: Proposal
		else if (step === 3) {
			timeout = setTimeout(() => setStep(4), 1200)
		}

		return () => clearTimeout(timeout)
	}, [step, typedText, isInView])

	return (
		<div
			ref={containerRef}
			className='p-6 md:p-8 font-mono text-sm md:text-[15px] leading-relaxed min-h-[360px] text-slate-700'
		>
			<div className='flex items-center space-x-2 text-slate-500 mb-3'>
				<span>~/dev/project</span>
				<span className='text-slate-400'>on</span>
				<span className='text-indigo-600 flex items-center gap-1'>
					<GitBranch className='w-3 h-3' />
					feature/api-fix
				</span>
			</div>

			{/* Command Input */}
			<div className='flex items-center space-x-3 mb-6'>
				<span className='text-green-600 font-bold'>➜</span>
				<span className='text-slate-900 relative font-medium'>
					{typedText}
					{step === 0 && (
						<span className='absolute -right-2.5 top-0.5 animate-pulse w-2 h-4 bg-slate-400/80' />
					)}
				</span>
			</div>

			{/* Output Sequence */}
			<div className='space-y-4'>
				{step >= TERMINAL_STEPS.ANALYSIS && (
					<motion.div
						initial={{ opacity: 0, x: -4 }}
						animate={{ opacity: 1, x: 0 }}
						className='flex items-start gap-3'
					>
						<span className='text-indigo-600 font-bold shrink-0'>
							Drift
						</span>
						<span className='text-slate-600'>
							Scanning codebase context...
						</span>
					</motion.div>
				)}

				{step >= TERMINAL_STEPS.FINDING_ERROR && (
					<motion.div
						initial={{ opacity: 0, x: -4 }}
						animate={{ opacity: 1, x: 0 }}
						className='flex items-start gap-3'
					>
						<span className='text-indigo-600 font-bold shrink-0'>
							Drift
						</span>
						<span className='text-slate-700'>
							Identified{' '}
							<span className='text-red-600 font-medium'>
								RuntimeError
							</span>{' '}
							in{' '}
							<span className='text-slate-900 underline decoration-slate-300 underline-offset-2'>
								src/stream.py
							</span>
							.
						</span>
					</motion.div>
				)}

				{step >= TERMINAL_STEPS.PROPOSAL && <TerminalPatch />}

				{step >= TERMINAL_STEPS.SUCCESS && (
					<motion.div
						initial={{ opacity: 0, scale: 0.98 }}
						animate={{ opacity: 1, scale: 1 }}
						className='flex items-center gap-2 pt-2'
					>
						<CheckCircle2 className='w-4 h-4 text-green-600' />
						<span className='text-slate-900 font-medium'>
							Patch applied.
						</span>
						<span className='text-slate-500 text-xs px-2 py-0.5 bg-slate-100 rounded-full'>
							HEAD → c7a1b2
						</span>
					</motion.div>
				)}
			</div>
		</div>
	)
}
