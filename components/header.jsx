import { HiOutlineMenu } from 'react-icons/hi'
import Link from 'next/link'
import { useState } from 'react'
import SideNav from './sidenav'

export default function Header() {
	const [open, setOpen] = useState(false)

	return (
		<div className='decorative w-full h-12 bg-black text-white flex justify-between items-center p-2 relative z-50'>
			<SideNav collapsed={open} setCollapsed={setOpen} />
			<div className='flex items-center flex-1'>
				<button
					className='text-white text-2xl'
					onClick={() => {
						setOpen(!open)
					}}
				>
					<HiOutlineMenu />
				</button>
				<div className='ml-3 text-xl'>
					<Link href='/'>
						<a>Norse NFT</a>
					</Link>
				</div>
			</div>
			<div className='main-connect'>
				<Link href='/auth'>
					<a className='bg-white text-black px-4 py-1 rounded-2xl hover:bg-gray-800 hover:text-white transition-all'>Connect Wallet</a>
				</Link>
			</div>
		</div>
	)
}
