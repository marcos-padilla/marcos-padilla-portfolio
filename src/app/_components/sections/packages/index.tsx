'use client'

import { packages } from './data'
import { PackagesBackground, PackagesHeader, SpotlightCard } from './components'

export default function PackagesSection() {
	return (
		<section id='packages' className='relative w-full py-32 bg-white font-sans overflow-hidden'>
			<PackagesBackground />

			<div className='relative z-10 max-w-7xl mx-auto px-6'>
				<PackagesHeader />

				{/* Grid Layout */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
					{packages.map((pkg, i) => (
						<SpotlightCard key={pkg.id} pkg={pkg} index={i} />
					))}
				</div>
			</div>
		</section>
	)
}
