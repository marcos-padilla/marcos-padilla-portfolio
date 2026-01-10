export const FULL_COMMAND = 'drift fix main.py --model gpt-4o'

export const TERMINAL_STEPS = {
	TYPING: 0,
	ANALYSIS: 1,
	FINDING_ERROR: 2,
	PROPOSAL: 3,
	SUCCESS: 4,
} as const

export const GITHUB_URL = 'https://github.com/marcos-padilla/drift'
