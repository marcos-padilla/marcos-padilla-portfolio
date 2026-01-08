import type { ExperienceItem } from './types'

export const experiences: ExperienceItem[] = [
	{
		id: 'exp-1',
		role: 'Freelance Full-Stack Developer',
		company: 'Self-Employed',
		location: 'Remote - Based in Florida',
		period: '2022 - Present',
		description:
			'Helping business owners design and build full-stack systems, custom automations, and data-driven solutions to accelerate their growth. Specializing in scalable web applications, API integrations, and workflow automation that eliminate manual processes and unlock operational efficiency.',
		type: 'freelance',
		skills: ['Next.js', 'TypeScript', 'Node.js', 'Automation', 'System Design'],
	},
	{
		id: 'exp-2',
		role: 'Frontend Developer Intern',
		company: 'Caribbean Digital Solutions',
		location: 'Santa Clara, Cuba',
		period: '2021 - 2022',
		description:
			'Developed responsive web interfaces and user-facing features for local business applications. Collaborated with senior developers to implement modern UI components and improve user experience across multiple client projects.',
		type: 'work',
		skills: ['React', 'JavaScript', 'CSS', 'UI/UX'],
	},
	{
		id: 'exp-3',
		role: 'BS in Computer Science',
		company: 'University of Technology',
		location: 'Boston, MA',
		period: '2020 - 2022',
		description:
			'Started pursuing a Bachelor of Science in Computer Science. Focused on core programming concepts, algorithms, and software engineering principles. Incomplete due to relocation to the United States.',
		type: 'education',
		skills: ['Algorithms', 'Data Structures', 'Java', 'Python'],
	},
	{
		id: 'exp-4',
		role: 'ICPC Enthusiast and Competitor',
		company: 'Competitive Programming',
		location: 'Cuba',
		period: '2016 - 2020',
		description:
			'Active participant in the International Collegiate Programming Contest (ICPC). Earned medals in three regional competitions, demonstrating strong problem-solving skills, algorithmic thinking, and teamwork in competitive programming environments.',
		type: 'education',
		skills: ['Algorithms', 'Data Structures', 'C++', 'Problem Solving'],
	},
]

