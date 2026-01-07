'use client'

import { AnimatePresence } from 'framer-motion'
import { services } from './data'
import { useServicesScroll } from './hooks/use-services-scroll'
import { useExpandedService } from './hooks/use-expanded-service'
import {
	ServicesHeader,
	ServicesBackground,
	ServicesProgressBar,
	ServiceListItem,
	ServiceCard,
	MobileServiceCard,
	ExpandedCard,
} from './components'

export default function ServicesSection() {
	const { expandedId, setExpandedId } = useExpandedService()
	const { containerRef, activeService, scrollYProgress, scrollToService } =
		useServicesScroll(expandedId)

	const selectedService = services.find((s) => s.id === expandedId) ?? null
	const activeServiceData = services[activeService]

	return (
		<section className='relative w-full bg-white font-sans'>
			<ServicesHeader />

			{/* Main Sticky Content Area */}
			<div
				ref={containerRef}
				className='relative w-full h-[300vh] hidden lg:block'
			>
				<div className='sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center'>
					<ServicesBackground
						activeService={activeServiceData}
					/>

					<div className='relative z-10 w-full max-w-7xl mx-auto h-full flex px-6'>
						{/* Left Column: Navigation/List */}
						<div className='w-1/2 h-full flex flex-col justify-center py-20 pr-12'>
							<div className='space-y-2'>
								{services.map((service, index) => (
									<ServiceListItem
										key={service.id}
										service={service}
										isActive={
											index === activeService
										}
										onClick={() =>
											scrollToService(index)
										}
									/>
								))}
							</div>
						</div>

						{/* Right Column: Dynamic Content Card */}
						<div className='w-1/2 h-full flex flex-col justify-center items-center pl-12 relative perspective-1000'>
							<ServiceCard
								service={activeServiceData}
								onExpand={() =>
									setExpandedId(activeServiceData.id)
								}
								isExpanded={
									expandedId === activeServiceData.id
								}
							/>
						</div>
					</div>

					<ServicesProgressBar
						scrollYProgress={scrollYProgress}
						activeService={activeServiceData}
					/>
				</div>
			</div>

			{/* Mobile/Tablet View (Stacked) */}
			<div className='lg:hidden relative z-10 w-full px-6 pb-24 space-y-12'>
				{services.map((service, index) => (
					<MobileServiceCard
						key={service.id}
						service={service}
						index={index}
						onExpand={() => setExpandedId(service.id)}
					/>
				))}
			</div>

			{/* Full Screen Overlay Modal */}
			<AnimatePresence>
				{selectedService && (
					<ExpandedCard
						service={selectedService}
						onClose={() => setExpandedId(null)}
					/>
				)}
			</AnimatePresence>

			{/* Footer Blend */}
			<div className='h-32 w-full bg-gradient-to-t from-white to-transparent pointer-events-none relative z-20 -mt-32' />
		</section>
	)
}
