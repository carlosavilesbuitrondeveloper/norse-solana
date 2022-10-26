import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useWallet } from '@solana/wallet-adapter-react'
import { useProgram, useNFTs } from '@thirdweb-dev/react/solana'
import { Row } from 'antd'
import programAddress from '../components/program'
import Item from '../components/item'
import Logo from '../components/logo'
import Meta from '../components/meta'

export default function Collection() {
	const router = useRouter()
	const wallet = useWallet()
	const id = programAddress
	const { program, error } = useProgram(id, 'nft-drop')
	const { data: metadata, isLoading, error: nfterror } = useNFTs(program)

	useEffect(() => {
		if (metadata) console.log(metadata)
	}, [metadata])

	useEffect(() => {
		if (wallet && !wallet.connected) router.push('/auth')
	}, [wallet])

	return (
		<div className='page-content mx-auto'>
			<Meta title='Norse NFT | Collection' />
			<h1 className='text-white text-5xl text-center mt-10 decorative font-semibold mb-6'>Your Treasure Hoard</h1>
			<p className='text-white mb-20 text-lg text-center'>Your claimed NFTs on Solana Norse will be shown below.</p>
			{isLoading && (
				<div className='text-white text-4xl w-1/2 mx-auto text-center mt-10'>
					<p>Loading NFTs.</p>
					<Logo className='w-6/12 mx-auto' />
				</div>
			)}
			{!isLoading && metadata && (
				<Row gutter={12} className='mt-10'>
					{metadata.map(item => (
						<Item item={item} key={item.metadata.name} program={program} type='check' />
					))}
				</Row>
			)}
			{nfterror && (
				<div className='text-white text-4xl w-1/2 mx-auto text-center mt-10 mb-10'>Sorry we could not load our collection. Please try again later.</div>
			)}
		</div>
	)
}
