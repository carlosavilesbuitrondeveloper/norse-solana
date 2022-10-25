import { useClaimNFT, useClaimConditions } from '@thirdweb-dev/react/solana'

export default function Minter({ image, program }) {
	const { data: claimCondition, isLoading: loadingClaimCondition } = useClaimConditions(program)
	const { mutateAsync: claim, isLoading, error } = useClaimNFT(program)

	const handleClaim = async () => {
		try {
			await claim({ amount: 1 })
			console.log('claim done')
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<div className='relative bg-gray-900'>
			<style jsx>
				{`
					@media (min-width: 600px) {
						.placeholder-height {
							min-height: 160px;
						}
					}
				`}
			</style>
			<div className='absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full'>
				<div className='h-full w-full xl:grid xl:grid-cols-2'>
					<div className='h-full xl:relative xl:col-start-2'>
						<img className='h-full w-full object-cover opacity-80 xl:absolute xl:inset-0' src={image} alt='Smoke girl background' />
						<div
							aria-hidden='true'
							className='absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r'
						/>
					</div>
				</div>
			</div>
			<div className='mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8'>
				<div className='relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24'>
					<h2 className='text-8xl decorative font-semibold text-red-600'>Claim Your Destiny</h2>
					<p className='text-xl mt-10'>Don't wait. Norse NFT's will be gone soon. Claim one now.</p>
					<p className='text-xl mt-6'>Claiming is free (for now) and you will receive one random NFT from the unclaimed NFTs..</p>
					<button
						onClick={handleClaim}
						className='text-5xl decorative mx-auto mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent px-5 py-3 bg-red-600 hover:text-white hover:bg-slate-800 text-white font-medium  sm:w-auto'
					>
						Claim
					</button>

					{!loadingClaimCondition && (
						<p className='mt-10 text-white text-xl'>
							Inventory Remaining: {claimCondition.claimedSupply} / {claimCondition.maxClaimable}
						</p>
					)}

					<div className='placeholder-height'></div>
				</div>
			</div>
		</div>
	)
}
