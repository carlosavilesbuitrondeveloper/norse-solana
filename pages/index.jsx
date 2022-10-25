import Wrapper from '../components/wrapper'
import Hero from '../components/hero'
import Meta from '../components/meta'
import Factions from '../components/factions'
import ShadowWrapper from '../components/shadowWrapper'

export default function Home() {
	const factions = [
		{
			name: 'Futurists',
			role: 'Inquisition',
			imageUrl: '/images/ui-faction-01.jpg',
			bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
		},
		{
			name: 'Cultists',
			role: 'Corrupted',
			imageUrl: '/images/ui-faction-02.jpg',
			bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
		},
		{
			name: 'Protectors',
			role: 'Pure',
			imageUrl: '/images/ui-faction-03.jpg',
			bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
		},
		{
			name: 'Supernaturals',
			role: 'Ethereal',
			imageUrl: '/images/ui-faction-04.jpg',
			bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
		},
	]

	return (
		<>
			<Meta title='Norse NFT | Home' />
			<Wrapper>
				{/* Hero */}
				<Hero image='https://storage.neptunecs.com/fenrir/ui/wolf.jpg' />

				{/* Factions */}
				<ShadowWrapper>
					<Factions title='The Factions' factions={factions} />
				</ShadowWrapper>
			</Wrapper>
		</>
	)
}
