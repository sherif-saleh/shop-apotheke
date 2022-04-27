import React from 'react'
import * as labels from '../assets/labels'
import GitHubIcon from '@mui/icons-material/GitHub'
import {IconButton} from '@mui/material'

type GitHubIconButtonProps = {
	gitHubRepoLink: string
}

export const GitHubLinkIconButton: React.FC<GitHubIconButtonProps> = ({ gitHubRepoLink }) => (
		<IconButton color='primary' aria-label={labels.url} href={gitHubRepoLink} target='_blank'>
			<GitHubIcon/>
		</IconButton>
	)

