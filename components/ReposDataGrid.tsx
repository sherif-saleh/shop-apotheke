import React from 'react'
import {DataGridColumnFields, TRepo} from '../types'
import * as labels from '../assets/labels'
import {DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid'
import {Description} from './BriefDescriptionWithDialog'
import {Box, Chip} from '@mui/material'
import {GitHubLinkIconButton} from './GitHubLinkIconButton'
import {StarringButton} from './StarringButton'
import {RepoStars} from './RepoStars'

type FilterListProps = {
	repos: readonly TRepo[]
	locallyStarredReposIds: readonly number [] | undefined
	onStarRepo: (id: number) => void
	onUnstarRepo: (id: number) => void
}
type ReposGridColumn = {
	field: DataGridColumnFields
	headerName: string
} & GridColDef

export const ReposDataGrid: React.FC<FilterListProps> = ({repos, locallyStarredReposIds = [],onStarRepo, onUnstarRepo}) => {
	const columns: ReposGridColumn [] = [{
		field: 'name',
		headerName: labels.name,
		width: 300
	}, {
		field: 'url',
		headerName: labels.url,
		headerAlign: 'center',
		renderCell: (params: GridValueGetterParams) => {
			return (
				<Box display={'flex'} width={'100%'} justifyContent={'center'} alignItems={'center'}>
					<GitHubLinkIconButton gitHubRepoLink={params.row.githubLink.href}/>
				</Box>
			)
		}
	}, {
		field: 'description',
		headerName: labels.description,
		headerAlign: 'center',
		width: 800,
		renderCell: (params: GridValueGetterParams) => {
			return (
				<Box display={'flex'} width={'100%'} justifyContent={'center'} alignItems={'center'}>
					<Description title={params.row.name} description={params.row.description}/>
				</Box>
			)
		}
	}, {
		field: 'starsCount',
		headerName: labels.stars,
		headerAlign: 'center',
		renderCell: (params: GridValueGetterParams) => {
			return (
				<Box display={'flex'} width={'100%'} justifyContent={'center'} alignItems={'center'}>
					<RepoStars starCount={params.row.starsCount} />
				</Box>
			)
		}
	}, {
		field: 'language',
		headerName: labels.language,
		headerAlign: 'center',
		width:200,
		renderCell: (params: GridValueGetterParams) => {
			 return (
				 <Box display={'flex'} width={'100%'} justifyContent={'center'} alignItems={'center'}>
					 { params.row.language ? (<Chip label={params.row.language}></Chip>) : null }
				 </Box>
			 )
		}
		
	}, {
		field: 'actions',
		headerName: labels.starIt,
		headerAlign: 'center',
		renderCell: (params: GridValueGetterParams) => {
			return (
				<Box display={'flex'} width={'100%'} justifyContent={'center'} alignItems={'center'}>
					<StarringButton
						isStarred={locallyStarredReposIds.indexOf(params.row.id) > -1}
						repoId={params.row.id}
						onStar={onStarRepo}
						onUnstar={onUnstarRepo}
					/>
				</Box>
			)
		},
	}]
	return (
			<DataGrid
				style={{ minHeight: 900, width: '100%' }}
				rows={repos}
				columns={columns} />
	)
	
}
