import { Drawer } from 'antd'
import Link from 'next/link'
import { useWallet } from '@solana/wallet-adapter-react'
import { AiOutlineHome, AiFillGithub } from 'react-icons/ai'
import { MdCollections } from 'react-icons/md'
import { BsBook } from 'react-icons/bs'
import { GrYoutube } from 'react-icons/gr'
import Logo from '../components/logo'

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

			<Drawer placement='left' onClose={() => setCollapsed(false)} open={collapsed}>
				<div className='flex h-full flex-col justify-between'>
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
						<li className='mb-10'>
							<a href='https://github.com/carlosavilesbuitrondeveloper/norse-solana' target='_blank' className='text-white text-3xl flex items-center'>
								<AiFillGithub className='mr-3' />
								Github
							</a>
						</li>
						<li className='mb-10'>
							<a href='https://youtu.be/gKkV_Ez2tNs' target='_blank' className='text-white text-3xl flex items-center'>
								<GrYoutube className='mr-3' />
								Video
							</a>
						</li>
					</ul>

					<div>
						<Logo className='mx-auto w-1/2' />
						<p className='text-white text-2xl text-center font-semibold'>Solana Norse</p>
					</div>
				</div>
			</Drawer>
		</>
	)
}
