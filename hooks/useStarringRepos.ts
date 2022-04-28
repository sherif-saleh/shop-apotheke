import { useEffect, useState } from 'react'
import {without, concat, uniq} from 'lodash'

export const useStarringRepos = () => {
	const [starredReposIds, setStarredReposIds] = useState<number [] | undefined>(undefined)
	const unstarRepo = (id: number) => {
		const refinedStarredReposIds: number [] = without(starredReposIds, id)
		setStarredReposIds(refinedStarredReposIds)
	}
	const starRepo = (id: number) => {
		const unified = concat(starredReposIds, id) as number[]
		setStarredReposIds(uniq(unified))
	}
	
	useEffect(() => {
		const readFromLocalStorrage = JSON.parse(window.localStorage.getItem('starredReposIds')!)
		const localStarredReposIds = readFromLocalStorrage ? readFromLocalStorrage : []
		if (starredReposIds === undefined) {
			setStarredReposIds(localStarredReposIds);
		} else {
			window.localStorage.setItem('starredReposIds', JSON.stringify(starredReposIds))
		}

	}, [starredReposIds])
	
	return { starredReposIds, starRepo, unstarRepo }
}
