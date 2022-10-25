import { Drawer } from 'antd'
import Link from 'next/link'
import { useWallet } from '@solana/wallet-adapter-react'

export default function SideNav({ collapsed, setCollapsed }) {
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
							<a className='text-white text-3xl'>Home</a>
						</Link>
					</li>

					<li className='mb-10'>
						<Link href='/collection'>
							<a className='text-white text-3xl'>My Collection</a>
						</Link>
					</li>

					<li className='mb-10'>
						<Link href='/browse'>
							<a className='text-white text-3xl'>Browse</a>
						</Link>
					</li>
				</ul>
			</Drawer>
		</>
	)
}
