import {getLastWeekDate} from '../utils/dates'

export const githubReposFetchUrl = new URL(
	`https://api.github.com/search/repositories?q=created=>${getLastWeekDate()}&sort=stars&order=desc`)

