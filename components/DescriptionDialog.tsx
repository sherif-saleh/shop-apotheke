import React from 'react'
import {Dialog, DialogContent, DialogTitle, IconButton, Typography} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

export type DescriptionDialogProps = {
	title: string,
	content: string,
	open: boolean
	onClose: () => void
}

export const DescriptionDialog: React.FC<DescriptionDialogProps> =({title, content, onClose, open}) =>  {
	
	return (
		<Dialog onClose={onClose} open={open}>
			<DialogTitle sx={{ m: 0, p: 2 }} >
				{title}
				{onClose ? (
					<IconButton
						aria-label="close"
						onClick={onClose}
						sx={{
							position: 'absolute',
							right: 8,
							top: 8,
							color: (theme) => theme.palette.grey[500],
						}}
					>
						<CloseIcon />
					</IconButton>
				) : null}
			</DialogTitle>
			<DialogContent dividers>
				<Typography gutterBottom>
					{content}
				</Typography>
			</DialogContent>
		</Dialog>
	)
}
