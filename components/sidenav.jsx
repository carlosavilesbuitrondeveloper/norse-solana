import { Drawer } from 'antd'

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
				<p className='text-white text-2xl'>Fenrir Options</p>
			</Drawer>
		</>
	)
}
