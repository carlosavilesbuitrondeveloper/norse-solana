import { HiOutlineMenu } from 'react-icons/hi'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useWallet } from '@solana/wallet-adapter-react'
import { useState } from 'react'
import Link from 'next/link'
import SideNav from './sidenav'
import Logo from './logo'

export default function Header() {
	const [open, setOpen] = useState(false)
	const wallet = useWallet()

	return (
		<div className='decorative w-full h-12 bg-black text-white flex justify-between items-center p-2 relative z-50'>
			<SideNav collapsed={open} setCollapsed={setOpen} />
			<div className='flex items-center flex-1'>
				<button className='text-white text-2xl' onClick={() => setOpen(!open)}>
					<HiOutlineMenu />
				</button>
				<div className='ml-3 text-xl'>
					<Link href='/'>
						<a className='flex items-center'>
							<Logo className='mr-1 w-2/12 md:w-1/12' />
							Norse NFT
						</a>
					</Link>
				</div>
			</div>
			{wallet && !wallet.connected && (
				<div className='main-connect'>
					<Link href='/auth'>
						<a className='bg-white text-black px-4 py-1 rounded-2xl hover:bg-gray-800 hover:text-white transition-all'>Connect Wallet</a>
					</Link>
				</div>
			)}
			{wallet.connected && <WalletMultiButton />}
		</div>
	)
}
