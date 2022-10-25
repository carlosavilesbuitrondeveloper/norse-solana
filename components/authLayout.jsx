export default function AuthLayout() {
	return (
		<div className='flex min-h-full'>
			<div className='flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-dark-gradient'>
				<div className='mx-auto w-full max-w-sm lg:w-96'>
					<p>Login info</p>
				</div>
			</div>
			<div className='relative hidden w-0 flex-1 lg:block'></div>
		</div>
	)
}
