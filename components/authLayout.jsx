import Logo from '../components/logo'

export default function AuthLayout() {
	return (
		<div className='flex min-h-full'>
			<style jsx global>{`
				.footer-main {
					display: none;
				}
				.main-connect {
					display: none;
				}
			`}</style>
			<div className='flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-dark-gradient'>
				<div className='mx-auto w-full max-w-sm lg:w-96 text-center'>
					<h1 className='text-white text-7xl decorative'>Norse NFT</h1>
					<Logo />
				</div>
			</div>
			<div className='relative hidden w-0 flex-1 lg:block'></div>
		</div>
	)
}
