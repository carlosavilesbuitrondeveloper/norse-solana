import { Layout, Row, Col } from 'antd'

export default function Footer() {
	return (
		<>
			<style jsx global>{`
				.footer-nav-item {
					color: white;
					transition: all 0.25s;
				}
				.footer-nav-active {
					color: white !important;
				}
				.footer-main {
					background: none;
					background-repeat: repeat-x;
					background-position: bottom center;
					background-size: contain;
					height: 120px;
					z-index: 100;
				}
			`}</style>
			<Layout.Footer className='footer-main decorative flex flex-col justify-center items-center relative' style={{ color: 'white', padding: 0 }}>
				<Row gutter={16} className='flex items-center justify-between px-4 w-full mt-10'>
					<Col xs={24} md={12} className='mb-1 text-center md:text-left text-lg md:text-xl'>
						&copy; 2022 Norse Solana NFT
					</Col>
					<Col xs={24} md={12} className='flex flex-wrap justify-center md:justify-end w-full' style={{ display: 'flex' }}>
						Solana Hackathon
					</Col>
				</Row>
			</Layout.Footer>
		</>
	)
}
