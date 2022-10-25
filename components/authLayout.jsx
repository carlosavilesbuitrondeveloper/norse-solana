import Logo from '../components/logo'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useWallet } from '@solana/wallet-adapter-react'
require('@solana/wallet-adapter-react-ui/styles.css')
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
			`}</style>
			<div className='flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-dark-gradient'>
				<div className='mx-auto w-full max-w-sm lg:w-96 text-center'>
					<h1 className='text-white text-7xl decorative'>Norse NFT</h1>
					<Logo />
					<WalletMultiButton />
				</div>
			</div>
			<div className='relative hidden w-0 flex-1 lg:block'></div>
		</div>
	)
}
