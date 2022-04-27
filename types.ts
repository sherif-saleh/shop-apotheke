export type NetworkRequestStatus = 'idle' | 'loading' | 'success' | 'error'

export type DataGridColumnFields = 'name' | 'url' | 'description' | 'starsCount' | 'language' | 'actions'

export type TRepo = {
	id: number
	name: string
	githubLink: URL
	description: string
	starsCount: number
	language: string | null
}




