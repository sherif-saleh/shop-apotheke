import { TRepo } from '../types'
import {forEach, get} from 'lodash'
import {Language} from "material-ui-icons"

export const mapToReposList = (data: JSON): TRepo[] => {
	const receivedRepos = get(data, 'items')
	return receivedRepos.map((repo: Record<string, unknown>) => {
		return {
			id: get(repo, 'id') as number,
			name: get(repo, 'name') as string,
			githubLink: new URL(get(repo, 'html_url') as string),
			description: get(repo, 'description') as string,
			starsCount: get(repo, 'stargazers_count') as number,
			language: get(repo, 'language')
		} as TRepo
	})
}
