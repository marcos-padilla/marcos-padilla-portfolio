import { useState, useEffect } from 'react'

export function useExpandedService() {
	const [expandedId, setExpandedId] = useState<string | null>(null)

	// Handle escape key
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setExpandedId(null)
		}
		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [])

	return {
		expandedId,
		setExpandedId,
	}
}

