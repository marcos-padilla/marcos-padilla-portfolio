'use client'

import type { SectionName } from '@/lib/types'
import { useState, createContext, useContext } from 'react'

type ActiveSectionProviderProps = {
	children: React.ReactNode
}

type ActiveSectionContextType = {
	activeSection: SectionName
	setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
	timeOfLastClick: number
	setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
	null
)

export default function ActiveSectionProvider({
	children,
}: ActiveSectionProviderProps) {
	const [activeSection, setActiveSection] = useState<SectionName>('Home')
	const [timeOfLastClick, setTimeOfLastClick] = useState(0)

	return (
		<ActiveSectionContext.Provider
			value={{
				activeSection,
				setActiveSection,
				timeOfLastClick,
				setTimeOfLastClick,
			}}
		>
			{children}
		</ActiveSectionContext.Provider>
	)
}

export function useActiveSection() {
	const context = useContext(ActiveSectionContext)

	if (context === null) {
		throw new Error(
			'useActiveSectionContext must be used within an ActiveSectionContextProvider'
		)
	}

	return context
}
