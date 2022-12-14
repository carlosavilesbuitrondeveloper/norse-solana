import { Layout } from 'antd'
import Background from './background'
import Header from './header'
import Footer from './footer'
require('@solana/wallet-adapter-react-ui/styles.css')

export default function Wrapper({ children }) {
	return (
		<div className='flex flex-col h-screen w-full'>
			<div className='bg-gradient w-full h-full relative'>
				<Background url='/video/storm.mp4' />
				<Layout className='w-full h-full z-30 relative' style={{ background: 'none' }}>
					<Layout style={{ background: 'none', color: 'white' }}>
						<Layout.Content className='relative'>
							<div className='w-full h-full'>
								<Header />
								<div className='w-full h-full overflow-x-hidden overflow-y-auto relative'>{children}</div>
							</div>
						</Layout.Content>
						<Footer />
					</Layout>
				</Layout>
			</div>
		</div>
	)
}
