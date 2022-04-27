import React, {useEffect, useState} from 'react'
import {useFetch} from '../hooks/useFetch'
import {githubReposFetchUrl} from '../assets/links'
import {useStarringRepos} from '../hooks/useStarringRepos'
import {ReposDataGrid} from './ReposDataGrid'
import {Box} from '@mui/system'
import {Grid, Skeleton} from '@mui/material'
import {StarredRepoFilter} from './StarredReposFilter'
import {TRepo} from '../types'

export const ReposFilterableGrid: React.FC =() => {
	const { data: repos, status: reqStatus } = useFetch(githubReposFetchUrl)
	const { starredReposIds, starRepo, unstarRepo} = useStarringRepos()
	const [starringFilterChecked, setStarringFilter] = useState(false)
	const [filteredRepos, setFilterRepos] = useState<TRepo[]>([])
	
	const toggleFilterRepos = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) {
			setFilterRepos(repos.filter((repo)=> starredReposIds && (starredReposIds?.indexOf(repo.id) > -1)))
			setStarringFilter(true)
		} else {
			setFilterRepos([])
			setStarringFilter(false)
		}
	}
	
	useEffect(() => {
		if (starringFilterChecked) {
			setFilterRepos(repos.filter((repo)=> starredReposIds && (starredReposIds?.indexOf(repo.id) > -1)))
			if (!starredReposIds || starredReposIds.length === 0) {
				setStarringFilter(false)
			}
		}
	},[starredReposIds, repos, starringFilterChecked])
	
	return reqStatus !== 'loading' ? (
		<>
			<Box display={'flex'} flexWrap={'wrap'} py={2} justifyItems={'space-between'} alignItems={'center'} height={80}>
				{ starredReposIds && starredReposIds.length > 0 ?
					<StarredRepoFilter
						checked={starringFilterChecked}
						handleChange={(event) => toggleFilterRepos(event)}
					/> : null }
				
			</Box>
			<Box>
				<ReposDataGrid
					repos={starringFilterChecked ? filteredRepos : repos}
					locallyStarredReposIds={starredReposIds}
					onStarRepo={starRepo}
					onUnstarRepo={unstarRepo}/>
			</Box>
		</>
	) :
		<Grid container spacing={2}>
			<Grid item sm={3}>
				<Skeleton height={50}/>
			</Grid>
			<Grid item sm={3}>
				<Skeleton height={50}/>
			</Grid>
			<Grid item sm={3}>
				<Skeleton height={50}/>
			</Grid>
			<Grid item sm={3}>
				<Skeleton height={50}/>
			</Grid>
		</Grid>
}
