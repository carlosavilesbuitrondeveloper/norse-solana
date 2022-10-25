export default function Factions({ title, factions }) {
	return (
		<div className='relative z-40'>
			<div className='relative mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24'>
				<div className='space-y-12'>
					<h2 className='text-3xl font-semibold tracking-tight sm:text-4xl'>{title}</h2>

					<ul role='list' className='space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0'>
						{factions.map(item => (
							<li key={item.name}>
								<div className='space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8'>
									<div className='aspect-w-3 aspect-h-2 h-0 sm:aspect-w-3 sm:aspect-h-4'>
										<img className='rounded-lg object-cover shadow-lg' src={item.imageUrl} alt='' />
									</div>
									<div className='sm:col-span-2'>
										<div className='space-y-4'>
											<div className='space-y-1 text-lg font-medium leading-6'>
												<h3 className='text-red-600 font-semibold'>{item.name}</h3>
												<p className='text-gray-100'>{item.role}</p>
											</div>
											<div className='text-lg'>
												<p className='text-gray-50'>{item.bio}</p>
											</div>
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
