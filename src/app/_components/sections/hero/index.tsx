'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'
import { BackgroundEffects } from './background-effects'
import { StatusPill } from './status-pill'
import { HeroTitle } from './hero-title'
import { HeroSubheadline } from './hero-subheadline'
import { LocationBadge } from './location-badge'
import { HeroCTAs } from './hero-ctas'
import { CredibilityCards } from './credibility-cards'
import { SideContent } from './side-content'
import { HeroVisualCard } from './hero-visual-card'
import { StackMarquee } from './stack-marquee'
import type { HeroProps } from './types'

export default function PortfolioHeroSection({
	name = 'Your Name',
	headline = 'Developer • AI Engineer • Data Analyst',
	subheadline = 'I build fast, beautiful products — and I ship data + AI that actually moves metrics.',
	location = 'Based in New York • Open to remote',
	primaryCta = { label: 'View Projects', href: '#projects' },
	secondaryCta = { label: 'Download Résumé', href: '/resume.pdf' },
}: HeroProps) {
	const containerRef = useRef<HTMLDivElement | null>(null)

	// Mouse-driven parallax (subtle)
	const mx = useMotionValue(0)
	const my = useMotionValue(0)
	const sx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.2 })
	const sy = useSpring(my, { stiffness: 120, damping: 18, mass: 0.2 })

	const tiltX = useTransform(sy, [-0.5, 0.5], [8, -8])
	const tiltY = useTransform(sx, [-0.5, 0.5], [-10, 10])

	const glowX = useTransform(sx, [-0.5, 0.5], ['35%', '65%'])
	const glowY = useTransform(sy, [-0.5, 0.5], ['40%', '60%'])

	const [reducedMotion, setReducedMotion] = useState(false)
	useEffect(() => {
		const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
		const onChange = () => setReducedMotion(mq.matches)
		onChange()
		mq.addEventListener?.('change', onChange)
		return () => mq.removeEventListener?.('change', onChange)
	}, [])

	useEffect(() => {
		const el = containerRef.current
		if (!el) return

		const onMove = (e: PointerEvent) => {
			const r = el.getBoundingClientRect()
			const px = (e.clientX - r.left) / r.width // 0..1
			const py = (e.clientY - r.top) / r.height
			mx.set(px - 0.5)
			my.set(py - 0.5)
		}
		const onLeave = () => {
			mx.set(0)
			my.set(0)
		}

		el.addEventListener('pointermove', onMove)
		el.addEventListener('pointerleave', onLeave)
		return () => {
			el.removeEventListener('pointermove', onMove)
			el.removeEventListener('pointerleave', onLeave)
		}
	}, [mx, my])

	return (
		<section className='relative isolate overflow-hidden bg-white'>
			<BackgroundEffects />

			<div
				ref={containerRef}
				className='mx-auto max-w-7xl px-6 pb-14 pt-20 sm:pb-18 sm:pt-24'
			>
				<div className='grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]'>
					{/* Left: Copy */}
					<div>
						<StatusPill />
						<HeroTitle name={name} headline={headline} />
						<HeroSubheadline subheadline={subheadline} />
						<LocationBadge location={location} />
						<HeroCTAs
							primaryCta={primaryCta}
							secondaryCta={secondaryCta}
						/>
						<CredibilityCards />
					</div>

					{/* Right: Animated "Wow" visual */}
					<div className='relative'>
						<SideContent reducedMotion={reducedMotion} />
						<HeroVisualCard
							reducedMotion={reducedMotion}
							tiltX={tiltX}
							tiltY={tiltY}
							glowX={glowX}
							glowY={glowY}
						/>
					</div>
				</div>

				<StackMarquee />
			</div>

			{/* local keyframes */}
			<style>{`
        .tickerTrack {
          width: max-content;
          animation: ticker var(--duration) linear infinite;
          will-change: transform;
        }
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .dash {
          animation: dash 1.2s linear infinite;
        }
        @keyframes dash {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -22; }
        }
        @media (prefers-reduced-motion: reduce) {
          .tickerTrack { animation: none; }
          .dash { animation: none; }
        }
      `}</style>
		</section>
	)
}
