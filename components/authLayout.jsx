import Logo from '../components/logo'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useWallet } from '@solana/wallet-adapter-react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function AuthLayout() {
	const router = useRouter()
	const wallet = useWallet()

	useEffect(() => {
		if (wallet && wallet.connected) router.push('/collection')
	}, [wallet])

	return (
		<div className='flex min-h-full'>
			<style jsx global>{`
				.footer-main {
					display: none;
				}
				.main-connect {
					display: none;
				}
				.wallet-adapter-button.wallet-adapter-button-trigger {
					background-color: white;
					color: black;
					font-size: 40px;
					margin: 0 auto;
					letter-spacing: -1px;
					padding: 6px 30px;
					border-radius: 20px;
					font-weight: 400;
				}
				.wallet-adapter-button.wallet-adapter-button-trigger:hover {
					color: white;
				}
				.auth-bg {
					background-repeat: no-repeat;
					background-size: cover;
					background-position: center;
				}
			`}</style>
			<div
				style={{ backgroundImage: 'url(/images/bg-connect.png)' }}
				className='auth-bg flex flex-1 z-20 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-dark-gradient relative'
			>
				<div className='bg-black opacity-50	absolute inset-0 z-20' />
				<div className='mx-auto w-full max-w-sm lg:w-96 text-center z-30'>
					<h1 className='text-white text-7xl decorative'>Norse NFT</h1>
					<h2 className='text-white mt-3 text-lg'>A dark fantasy NFT collection.</h2>
					<Logo />
					<WalletMultiButton />
				</div>
			</div>
			<div className='relative hidden w-0 flex-1 lg:block'></div>
		</div>
	)
}
