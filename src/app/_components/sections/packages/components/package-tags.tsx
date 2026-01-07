import { Badge } from '@/components/ui/badge'
import type { PackageItem } from '../types'

interface PackageTagsProps {
	tags: PackageItem['tags']
}

export function PackageTags({ tags }: PackageTagsProps) {
	return (
		<div className='flex flex-wrap gap-2'>
			{tags.map((tag) => (
				<Badge
					key={tag}
					variant='outline'
					className='text-xs font-medium px-2 py-1 rounded-full bg-slate-50 border-slate-200 text-slate-600'
				>
					{tag}
				</Badge>
			))}
		</div>
	)
}

