export default function ShadowWrapper({ children }) {
	return (
		<div className='p-4  relative z-20 w-full h-auto flex flex-col justify-center items-center text-white'>
			<div className='bg-black opacity-50	absolute inset-0 z-20' />
			{children}
		</div>
	)
}
