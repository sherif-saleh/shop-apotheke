import {FormControlLabel, FormGroup, Switch} from "@mui/material"
import React from "react"
import {showReposYouStarred} from "../assets/labels"

type StarredReposFilter = {
	checked?: boolean,
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => unknown
	disabled?: boolean,
}

export const StarredRepoFilter: React.FC<StarredReposFilter> = ({ checked=false, handleChange, disabled=false}) => {
	
	return (
		<FormGroup>
			<FormControlLabel
				control={<Switch checked={checked} onChange={handleChange} disabled={disabled}/>}
				label={showReposYouStarred} />
		</FormGroup>
	)
}
