import Hero from '../components/hero'
import Meta from '../components/meta'
import Factions from '../components/factions'
import ShadowWrapper from '../components/shadowWrapper'
import Action from '../components/action'

export default function Home() {
	const factions = [
		{
			name: 'Futurists',
			role: 'Dark',
			imageUrl: '/images/ui-faction-01.jpg',
			bio: 'Followers of the dark powers that seek to merge magic and technology. Futurists will often have infernals and other supernaturnal creatures working for them.',
		},
		{
			name: 'Cultists',
			role: 'Dark',
			imageUrl: '/images/ui-faction-02.jpg',
			bio: 'Cultists use dark rituals to attain greater knowledge of the infernal dimensions. Cultists will often summon spirits to battle on their behalf.',
		},
		{
			name: 'Protectors',
			role: 'Light',
			imageUrl: '/images/ui-faction-03.jpg',
			bio: 'Light defenders that might use or not use magic. Humans and ethereals comprise most of the protector faction but you do find the odd infernal in their ranks on occasion.',
		},
		{
			name: 'Supernaturals',
			role: 'Light/Dark',
			imageUrl: '/images/ui-faction-04.jpg',
			bio: 'Summoned creatues, warriors, guardians and more. Supernaturals is the umbrella term for any being not born in one of the human dimensions.',
		},
	]

	return (
		<>
			<Meta title='Norse NFT | Home' />

			{/* Hero */}
			<Hero image='https://storage.neptunecs.com/fenrir/ui/wolf.jpg' />

			{/* Factions */}
			<ShadowWrapper>
				<Factions title='The Factions' factions={factions} />
			</ShadowWrapper>

			{/* Call to Action */}
			<Action image='/images/dark-lady-ui.jpg' />
		</>
	)
}
