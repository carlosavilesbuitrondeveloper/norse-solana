import { Col } from 'antd'
import { useClaimNFT } from '@thirdweb-dev/react/solana'

export default function Item({ item, program }) {
	const { mutateAsync: claim, isLoading, error } = useClaimNFT(program)

	const handleClaim = async () => {
		claim({ amount: 1 })
	}

	return (
		<Col xs={12} lg={8} className='flex flex-col items-center justify-center mb-10'>
			<h3 className='text-3xl decorative mb-6'>{item.metadata.name}</h3>
			<img src={item.metadata.image} alt={item.metadata.name} className='block w-7/12 mb-6 rounded-full' />
			<div className='item-body text-left'>
				<div className='mb-6'>
					{item.metadata.attributes.map((entry, index) => (
						<p key={index} className='text-xl'>
							<span className='heavy text-2xl'>{entry.trait_type.toUpperCase()}</span> : {entry.value.toUpperCase()}
						</p>
					))}
				</div>

				{item.owner === '11111111111111111111111111111111' && <h4 className='text-xl'>Status: Unclaimed</h4>}
				{item.owner !== '11111111111111111111111111111111' && <h4 className='text-xl'>Status: Claimed</h4>}
			</div>
		</Col>
	)
}
