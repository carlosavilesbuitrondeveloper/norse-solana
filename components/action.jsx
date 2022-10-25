import Link from 'next/link'
export default function Action({ image }) {
	return (
		<div className='bg-gray-900'>
			<div className='mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8'>
				<img
					src={image}
					className='block mx-auto mb-4'
					style={{ height: '256px', width: 'auto', borderRadius: '50%' }}
					alt='browse cards promotional image'
				/>
				<h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
					<span className='block'>Claim your NFTs today.</span>
					<span className='block'>Collection is available now.</span>
				</h2>
				<p className='mt-4 text-lg leading-6 text-gray-100'>
					Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
				</p>
				<Link href='/browse'>
					<a className='mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent px-5 py-3 bg-red-600 hover:text-white hover:bg-slate-800 text-white font-medium  sm:w-auto'>
						Browse NFTs
					</a>
				</Link>
			</div>
		</div>
	)
}
