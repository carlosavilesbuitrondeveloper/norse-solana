import Wrapper from '../components/wrapper'
import Hero from '../components/hero'
import Meta from '../components/meta'

export default function Home() {
	return (
		<>
			<Meta title='Norse NFT | Home' />
			<Wrapper>
				<Hero image='https://storage.neptunecs.com/fenrir/ui/wolf.jpg' />
			</Wrapper>
		</>
	)
}
