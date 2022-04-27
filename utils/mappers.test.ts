import * as mappers from './mappers'
import {TRepo} from '../types'

const mockedGitHubList = (require('./mockedGithubList.json'))
const mockedMappedGitHubReposList : TRepo[] = [
	{
		id: 446413939,
		name: 'lib-management-new',
		description: 'This is new repository created for web stack development LAB. Created on 10/01/2022',
		githubLink: new URL('https://github.com/Logeshn009/lib-management-new'),
		starsCount: 1,
		language: 'HTML'
	}, {
		id: 452123221,
		name: 'quant-rs',
		description: 'Pure rust quantitative trading class library. Created by Huang Zhisong, Beijing, CN, 2022-01-26',
		githubLink: new URL('https://github.com/sci-rust/quant-rs'),
		starsCount: 1,
		language: null
	}
]

describe('Testing mapToReposList', () => {
	test('it returns an array with expected typed data', () => {
		const mappedRepos = mappers.mapToReposList(mockedGitHubList)
		expect(mappedRepos).toEqual(mockedMappedGitHubReposList) //timezone issues use dayjs or moment instead.
	})
	
	// test('it returns last week date matching dashes regex', () => {
	// 	const lastWeekDate = getLastWeekDate()
	// 	const expectedDateRegex = /(\d{4}-\d{1,2}-\d{1,2})/gm
	//
	// 	expect(lastWeekDate).toMatch(expectedDateRegex)
	// })
})
