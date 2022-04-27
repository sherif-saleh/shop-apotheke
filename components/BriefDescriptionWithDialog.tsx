import { Box, Button, Typography } from '@mui/material'
import React, {useState} from 'react'
import styled from '@emotion/styled'
import {DescriptionDialog} from './DescriptionDialog'

type DescriptionProps = {
	title: string
	description: string
}

const ShortDescription = styled (Typography)(({ theme }) => ({
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	WebkitLineClamp: 1,
	WebkitBoxOrient: 'vertical',
	paddingRight: 16,
})) as typeof Typography

export const Description: React.FC<DescriptionProps> =({title, description}) => {
	const [openDialog, setOpenDialog] = useState(false)
	return (
		<Box display={'flex'} alignItems={'center'} width={'100%'}>
			<ShortDescription variant={'body2'} noWrap>{description}</ShortDescription>
			<Button variant={'text'} onClick={() => setOpenDialog(true)}>
				Read More
			</Button>
			<DescriptionDialog
				title={title}
				content={description}
				open={openDialog}
				onClose={() => setOpenDialog(false)}
			/>
		</Box>)
}
