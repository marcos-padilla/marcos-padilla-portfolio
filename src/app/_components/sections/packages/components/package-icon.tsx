import type { PackageItem } from '../types'

interface PackageIconProps {
	pkg: PackageItem
}

export function PackageIcon({ pkg }: PackageIconProps) {
	const Icon = pkg.icon

	return (
		<div
			className={`p-3 rounded-xl bg-gradient-to-br ${pkg.gradient} bg-opacity-10 shadow-sm relative group-hover:scale-110 transition-transform duration-300 border border-slate-200`}
		>
			<Icon className='text-slate-900 w-6 h-6 relative z-10' />
			{/* Icon Glow */}
			<div
				className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-10 blur-lg`}
			/>
		</div>
	)
}

