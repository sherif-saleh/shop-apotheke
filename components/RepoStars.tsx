import React from 'react'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import {Typography} from '@mui/material'

type RepoStarsType = {
	starCount: number
}

export const RepoStars: React.FC<RepoStarsType> = ({starCount}) => {
	if(starCount) {
		return (
			<>
				<StarIcon color={'warning'}/>
				<Typography variant={'body2'}>
					{starCount}
				</Typography>
			</>
		)
	}
	
	return <StarBorderIcon color={'disabled'} />
	
}
