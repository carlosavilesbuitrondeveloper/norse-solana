import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useWallet } from '@solana/wallet-adapter-react'
import { useProgram, useNFTs } from '@thirdweb-dev/react/solana'
import { Row } from 'antd'
import Item from '../components/item'

export default function Collection() {
	const router = useRouter()
	const wallet = useWallet()
	const id = 'T3RaMKRnKnRTA8PXTyzA1mnpSnuMZaeT74fAsURjxX8'
	const { program, error } = useProgram(id, 'nft-drop')
	const { data: metadata, isLoading } = useNFTs(program)

	useEffect(() => {
		if (metadata) console.log(metadata)
	}, [metadata])

	useEffect(() => {
		if (wallet && !wallet.connected) {
			router.push('/auth')
		} else {
			console.log(wallet)
		}
	}, [wallet])

	return (
		<div className='page-content mx-auto'>
			<h1 className='text-white text-5xl text-center mt-10 decorative font-semibold mb-20'>Your Treasure Hoard</h1>
			{isLoading && <p className='text-white text-4xl'>Loading NFTs.</p>}
			{!isLoading && metadata && (
				<Row gutter={12} className='mt-10'>
					{metadata.map(item => (
						<Item item={item} key={item.metadata.name} program={program} type='check' />
					))}
				</Row>
			)}
		</div>
	)
}
