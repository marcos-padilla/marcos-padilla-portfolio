export type ExperienceType = 'work' | 'education' | 'freelance'

export interface ExperienceItem {
	id: string
	role: string
	company: string
	location: string
	period: string
	description: string
	type: ExperienceType
	skills: string[]
}

