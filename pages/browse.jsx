import { useEffect } from 'react'
import { useProgram, useNFTs } from '@thirdweb-dev/react/solana'
import { Row } from 'antd'
import Minter from '../components/minter'
import Item from '../components/item'
import Logo from '../components/logo'
import Meta from '../components/meta'

export default function Browse() {
	const id = 'T3RaMKRnKnRTA8PXTyzA1mnpSnuMZaeT74fAsURjxX8'
	const { program, error } = useProgram(id, 'nft-drop')
	const { data: metadata, isLoading, error: nfterror } = useNFTs(program)

	useEffect(() => {
		if (metadata) console.log(metadata)
	}, [metadata])

	return (
		<>
			<Meta tile='Browse' />
			<Minter image='/images/bg-smoke.jpeg' program={program} />
			<div className='page-content mx-auto'>
				{isLoading && (
					<div className='text-white text-4xl w-1/2 mx-auto text-center mt-10'>
						<p>Loading NFTs.</p>
						<Logo className='w-6/12 mx-auto' />
					</div>
				)}
				{!isLoading && metadata && (
					<Row gutter={12} className='mt-10'>
						{metadata.map(item => (
							<Item item={item} key={item.metadata.name} program={program} />
						))}
					</Row>
				)}
				{nfterror && (
					<div className='text-white text-4xl w-1/2 mx-auto text-center mt-10 mb-10'>Sorry we could not load our collection. Please try again later.</div>
				)}
			</div>
		</>
	)
}
