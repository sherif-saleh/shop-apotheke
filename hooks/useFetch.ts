import { useEffect, useState } from 'react'
import { NetworkRequestStatus, TRepo } from '../types'
import { mapToReposList } from '../utils/mappers'


export const useFetch = (url: URL) => {
	const [status, setStatus] = useState<NetworkRequestStatus>('idle')
	const [data, setData] = useState<TRepo[]>([])
	
	useEffect(() => {
		if (!url) { return }
		const fetchData = async () => {
			setStatus('loading')
			const response = await fetch(url.href)
			const fetchedData = await response.json()
			setData(mapToReposList(fetchedData))
			setStatus(response.status === 200 ? 'success' : 'error')
		}
		
		fetchData().then()
	}, [url])
	
	return { status, data }
}
