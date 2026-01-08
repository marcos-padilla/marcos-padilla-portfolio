import Hero from '@/app/_components/sections/hero'
import ProjectsSection from './_components/sections/projects'
import PackagesSection from './_components/sections/packages'
import TimelineSection from './_components/sections/timeline'
import { Contact } from '@/components/sections/contact'
import ServicesSection from './_components/sections/services'

export default function Page() {
	return (
		<div className='min-h-screen bg-zinc-50 text-zinc-900'>
			<Hero />
			<ServicesSection />
			<PackagesSection />
			<ProjectsSection />
			<TimelineSection />
			<Contact />
		</div>
	)
}
