export const getLastWeekDate = (): string => {
	
	const dateObj = new Date()
	const month = dateObj.getUTCMonth() + 1
	const day = dateObj.getUTCDate() - 7
	const year = dateObj.getUTCFullYear()
	
	return `${year}-${month}-${day}`
}
