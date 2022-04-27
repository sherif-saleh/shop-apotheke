import {getLastWeekDate} from './dates'

describe('Testing dates getters', () => {
	test('it returns last week date', () => {
		const lastWeekDate = new Date(getLastWeekDate())
		const now = new Date()
		console.log(getLastWeekDate())
		const dayDiff = Math.floor(Math.abs((now.getTime()) - (lastWeekDate.getTime())) / (1000 * 60 * 60 * 24))
		
		expect(dayDiff).toBeGreaterThan(6)
	})
	
	test('it returns last week date matching dashes regex', () => {
		const lastWeekDate = getLastWeekDate()
		const expectedDateRegex = /(\d{4}-\d{1,2}-\d{1,2})/gm
		
		expect(lastWeekDate).toMatch(expectedDateRegex)
	})
})
