import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useWallet } from '@solana/wallet-adapter-react'

export default function Collection() {
	const router = useRouter()
	const wallet = useWallet()

	useEffect(() => {
		if (wallet && !wallet.connected) router.push('/auth')
	}, [wallet])

	return (
		<>
			<h1 className='text-green-500'>My Collection</h1>
			{wallet.connected && <p className='text-white text-4xl'>test</p>}
		</>
	)
}
