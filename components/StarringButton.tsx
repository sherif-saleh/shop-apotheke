import {TRepo} from '../types'
import React from 'react'
import {IconButton} from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'

type StarringButtonProps = {
	isStarred: boolean
	repoId: TRepo['id']
	onStar: (id: number) => void
	onUnstar: (id: number) => void
}

export const StarringButton: React.FC<StarringButtonProps> =({isStarred, repoId, onStar, onUnstar}) => {
	
	return (
		<IconButton onClick={() => isStarred ? onUnstar(repoId) : onStar(repoId)}>
			{isStarred ? <StarIcon color={'warning'}/> : <StarBorderIcon color={'info'}/>}
		</IconButton>
	)
}
