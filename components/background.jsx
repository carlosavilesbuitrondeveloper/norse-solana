import { useRef, useEffect } from 'react'
export default function Background({ url }) {
	const vidRef = useRef(null)
	useEffect(() => {
		if (vidRef.current) vidRef.current.play()
	}, [])
	return (
		<div className='background-video z-20 w-full h-full absolute inset-o opacity-60'>
			<style jsx>
				{`
					.background-video video {
						object-fit: fill;
					}
				`}
			</style>
			<video ref={vidRef} autoPlay muted loop className='absolute h-full w-full text-white'>
				<source src={url} type='video/mp4' />
				Your browser does not support HTML5 video.
			</video>
		</div>
	)
}
