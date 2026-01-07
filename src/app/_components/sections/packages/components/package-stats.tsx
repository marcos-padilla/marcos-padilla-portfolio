import { Star, Download } from 'lucide-react'
import type { PackageItem } from '../types'

interface PackageStatsProps {
	pkg: PackageItem
}

export function PackageStats({ pkg }: PackageStatsProps) {
	return (
		<div className='flex gap-3 text-slate-500'>
			<div className='flex items-center gap-1 text-xs font-medium'>
				<Star size={14} className='text-amber-500' /> {pkg.stars}
			</div>
			<div className='flex items-center gap-1 text-xs font-medium'>
				<Download size={14} /> {pkg.downloads}
			</div>
		</div>
	)
}

