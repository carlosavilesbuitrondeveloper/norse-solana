import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useProgram, useNFTs } from '@thirdweb-dev/react/solana'
import { Row, Col } from 'antd'

export default function Browse() {
	const id = '4EwFAG2i3kZES9shKWd3UYTkbWzQv8rgXL5cGP33kMuj'
	const { program, error } = useProgram(id, 'nft-collection')
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
			{!isLoading && metadata && (
				<Row gutter={12} className='mt-10'>
					{metadata.map(item => (
						<Col xs={12} lg={8} key={item.metadata.id} className='flex items-center justify-center mb-10'>
							<img src={item.metadata.image} alt={item.metadata.name} className='block w-7/12' />
						</Col>
					))}
				</Row>
			)}
		</div>
	)
}
