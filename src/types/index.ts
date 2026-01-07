export type Project = {
	title: string
	description: string
	tags: string[]
	links?: { label: string; href: string }[]
}

export type PackageItem = {
	name: string
	description: string
	tech: string[]
	href?: string
}

export type Service = {
	title: string
	description: string
	bullets: string[]
}

export type TimelineItem = {
	period: string
	title: string
	org?: string
	details: string[]
}

export type Profile = {
	name: string
	title: string
	location: string
	blurb: string
	ctaPrimary: { label: string; href: string }
	ctaSecondary: { label: string; href: string }
	socials: { label: string; href: string }[]
}

export type Highlight = {
	label: string
	value: string
}

export type Skills = {
	[key: string]: string[]
}

