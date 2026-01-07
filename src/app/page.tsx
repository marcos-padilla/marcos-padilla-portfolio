import { TopNav } from '@/components/common/top-nav'
import Hero from '@/app/_components/sections/hero'
import { Skills } from '@/components/sections/skills'
import { Projects } from '@/components/sections/projects'
import { ParallaxShowcase } from '@/components/sections/parallax-showcase'
import { HorizontalScroll } from '@/components/sections/horizontal-scroll'
import PackagesSection from './_components/sections/packages'
import { Timeline } from '@/components/sections/timeline'
import { Contact } from '@/components/sections/contact'
import ServicesSection from './_components/sections/services'

export default function Page() {
	return (
		<div className='min-h-screen bg-zinc-50 text-zinc-900'>
			<TopNav />
			<Hero />
			<ServicesSection />
			<PackagesSection />
			<Skills />
			<Projects />
			<ParallaxShowcase />
			<HorizontalScroll />
			<Timeline />
			<Contact />
		</div>
	)
}
