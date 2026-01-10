'use client'

import { DriftBackground, DriftHero, TerminalDemo } from './components'
import { GITHUB_URL } from './data'

export default function DriftShowcase() {
	return (
		<section className='relative w-full min-h-screen bg-zinc-50 text-slate-900 overflow-hidden font-sans flex flex-col justify-center'>
			<DriftBackground />

			<div className='max-w-7xl mx-auto px-6 py-24 relative z-10 w-full'>
				<DriftHero
					badgeText='Open Source • Model Agnostic'
					title='Your AI Copilot,'
					titleHighlight='Living in Terminal.'
					description='Drift is a free, open-source CLI assistant. Bring your own model—OpenAI, Anthropic, or Local—and automate refactoring, debugging, and file operations without leaving your keyboard.'
					githubUrl={GITHUB_URL}
				/>

				<div className='w-full mt-16'>
					<TerminalDemo />
				</div>
			</div>
		</section>
	)
}
