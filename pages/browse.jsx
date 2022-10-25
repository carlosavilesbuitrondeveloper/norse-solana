import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useProgram, useNFTs } from '@thirdweb-dev/react/solana'
import { Row } from 'antd'
import Minter from '../components/minter'
import Item from '../components/item'

export default function Browse() {
	const id = 'T3RaMKRnKnRTA8PXTyzA1mnpSnuMZaeT74fAsURjxX8'
	const { program, error } = useProgram(id, 'nft-drop')
	const { data: metadata, isLoading } = useNFTs(program)

	useEffect(() => {
		if (metadata) console.log(metadata)
	}, [metadata])

	return (
		<>
			<Minter image='/images/bg-smoke.jpeg' program={program} />
			<div className='page-content mx-auto'>
				{isLoading && <p className='text-white text-4xl'>Loading NFTs.</p>}
				{!isLoading && metadata && (
					<Row gutter={12} className='mt-10'>
						{metadata.map(item => (
							<Item item={item} key={item.metadata.name} program={program} />
						))}
					</Row>
				)}
			</div>
		</>
	)
}
