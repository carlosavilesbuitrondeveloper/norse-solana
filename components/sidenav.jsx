import { Drawer } from 'antd'
import Link from 'next/link'
import { useWallet } from '@solana/wallet-adapter-react'
import { AiOutlineHome } from 'react-icons/ai'
import { MdCollections } from 'react-icons/md'
import { BsBook } from 'react-icons/bs'

export default function SideNav({ collapsed, setCollapsed }) {
	const wallet = useWallet()
	return (
		<>
			<style jsx global>
				{`
					.ant-drawer-content,
					.ant-drawer-header {
						background-color: rgba(16, 34, 68, 0.82);
					}
					.ant-drawer-header-title {
						justify-content: flex-end;
					}
					.ant-drawer-header-title svg {
						fill: white;
						font-size: 30px;
					}
					.ant-drawer-close {
						margin: 0;
					}
				`}
			</style>

			<Drawer placement='left' onClose={() => setCollapsed(false)} visible={collapsed}>
				<ul>
					<li className='mb-10'>
						<Link href='/'>
							<a className='text-white text-3xl flex items-center'>
								<AiOutlineHome className='mr-3' /> Home
							</a>
						</Link>
					</li>
					{wallet && wallet.connected && (
						<li className='mb-10'>
							<Link href='/collection'>
								<a className='text-white text-3xl flex items-center'>
									<MdCollections className='mr-3' /> My Collection
								</a>
							</Link>
						</li>
					)}

					<li className='mb-10'>
						<Link href='/browse'>
							<a className='text-white text-3xl flex items-center'>
								<BsBook className='mr-3' />
								Browse
							</a>
						</Link>
					</li>
				</ul>
			</Drawer>
		</>
	)
}
