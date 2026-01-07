import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface ChipProps {
	label: string
	className?: string
}

export function Chip({ label, className }: ChipProps) {
	return (
		<Badge
			variant="outline"
			className={cn(
				'inline-flex items-center rounded-full border-zinc-200 bg-white/70 px-2.5 py-1 text-xs text-zinc-700',
				className
			)}
		>
			{label}
		</Badge>
	)
}

