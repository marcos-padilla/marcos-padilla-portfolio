import type { ExperienceItem } from './types'

export const experiences: ExperienceItem[] = [
	{
		id: 'exp-1',
		role: 'Senior Frontend Engineer',
		company: 'TechFlow Solutions',
		location: 'San Francisco, CA (Remote)',
		period: '2022 - Present',
		description:
			'Leading the frontend migration from Legacy React to Next.js 14. Improved Core Web Vitals by 40%. Mentoring a team of 4 junior developers and establishing internal UI/UX guidelines.',
		type: 'work',
		skills: ['Next.js', 'TypeScript', 'GraphQL', 'System Design'],
	},
	{
		id: 'exp-2',
		role: 'Full Stack Developer',
		company: 'Creative Pulse Agency',
		location: 'New York, NY',
		period: '2020 - 2022',
		description:
			'Built high-converting marketing sites and custom internal tools for enterprise clients. Integrated headless CMS solutions (Sanity, Contentful) to empower non-technical teams.',
		type: 'work',
		skills: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
	},
	{
		id: 'exp-3',
		role: 'Freelance Web Developer',
		company: 'Self-Employed',
		location: 'Global',
		period: '2018 - 2020',
		description:
			'Delivered 15+ custom web projects for startups and small businesses. Managed full project lifecycle from requirement gathering to deployment and maintenance.',
		type: 'freelance',
		skills: ['Webflow', 'JavaScript', 'Shopify', 'Design'],
	},
	{
		id: 'exp-4',
		role: 'BS in Computer Science',
		company: 'University of Technology',
		location: 'Boston, MA',
		period: '2014 - 2018',
		description:
			'Graduated Cum Laude. Specialized in Human-Computer Interaction and Distributed Systems. Lead developer for the university robotics club.',
		type: 'education',
		skills: ['Algorithms', 'Data Structures', 'Java', 'Python'],
	},
]

