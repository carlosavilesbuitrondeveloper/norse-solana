import { Layout } from 'antd'
import Background from './background'
import Footer from './footer'

export default function Layout({ children }) {
	return (
		<div className='flex flex-col h-screen w-full'>
			<div className='bg-gradient w-full h-full relative'>
				<Background url='/video/storm.mp4' />
				<Layout className='w-full h-full z-30 relative' style={{ background: 'none' }}>
					<Layout style={{ background: 'none', color: 'white' }}>
						<Layout.Content className='relative'>
							<div className='w-full h-full'>{children}</div>
						</Layout.Content>
						<Footer />
					</Layout>
				</Layout>
			</div>
		</div>
	)
}
