import Head from 'next/head'

export default function Meta({ title }) {
	return (
		<Head>
			<link rel='shortcut icon' href='/images/favicon.ico' />
			<meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable="no"' />
			<title>Norse NFT | {title}</title>
		</Head>
	)
}
