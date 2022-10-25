import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useProgram, useNFTs } from '@thirdweb-dev/react/solana'
import { Row, Col } from 'antd'
import Item from '../components/item'

export default function Browse() {
	const id = 'T3RaMKRnKnRTA8PXTyzA1mnpSnuMZaeT74fAsURjxX8'
	const { program, error } = useProgram(id, 'nft-drop')
	const [programInfo, setProgramInfo] = useState(null)
	const { data: metadata, isLoading } = useNFTs(program)

	const loadCollection = async () => {
		const programData = await program.getMetadata()
		setProgramInfo(programData)
		console.log(programData)
	}

	useEffect(() => {
		if (program) loadCollection()
	}, [program])

	useEffect(() => {
		if (metadata) console.log(metadata)
	}, [metadata])

	return (
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
	)
}
