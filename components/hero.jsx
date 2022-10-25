import Link from 'next/link'

export default function Hero({ image }) {
	return (
		<div className='relative'>
			<main className='lg:relative'>
				<div className='mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left'>
					<div className='px-4 sm:px-8 lg:w-1/2 xl:pr-16'>
						<h1
							style={{ lineHeight: '1.1em' }}
							className='font-semibold decorative tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'
						>
							<span className='block xl:inline'>The end is near, </span> <span className='block text-red-600 xl:inline'>Norse</span> NFT has arrived.
						</h1>
						<p className='mx-auto mt-3 max-w-md text-lg text-gray-200 sm:text-xl md:mt-5 md:max-w-3xl'>
							Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
						</p>
						<div className='mt-10 sm:flex sm:justify-center lg:justify-start'>
							<div className='rounded-md shadow'>
								<Link href='/browse'>
									<a className='flex w-full items-center justify-center rounded-md border border-transparent bg-black hover:text-white hover:bg-slate-800 text-white px-8 py-3 text-base font-medium md:py-4 md:px-10 md:text-lg'>
										Browse NFTs
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className='relative flex items-center justify-center h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2 mb-10'>
					<img src={image} alt='main fenrir feature image' className='w-2/3 md:w-1/3 lg:w-2/3' style={{ maxWidth: '60%', borderRadius: '50%' }} />
				</div>
			</main>
		</div>
	)
}
