import { HiOutlineMenu } from 'react-icons/hi'

export default function Header() {
	return (
		<div className='decorative w-full h-12 bg-black text-white flex justify-between items-center p-2 relative z-50'>
			<div className='flex items-center flex-1'>
				<button className='text-white text-2xl'>
					<HiOutlineMenu />
				</button>
				<div className='ml-3 text-xl'>Norse NFT</div>
			</div>
			<button className='bg-white text-black px-4 py-1 rounded-2xl hover:bg-gray-800 hover:text-white transition-all'>Connect Wallet</button>
		</div>
	)
}
