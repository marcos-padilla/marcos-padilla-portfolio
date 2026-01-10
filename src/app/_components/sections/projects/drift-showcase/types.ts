import type { ReactNode } from 'react'

export interface TerminalStep {
	step: number
	label: string
}

export interface TerminalOutput {
	step: number
	content: ReactNode
}
