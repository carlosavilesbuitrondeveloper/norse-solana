import Head from 'next/head'

export default function Meta({ title }) {
	return (
		<Head>
			<title>{title}</title>
			<link rel='icon' href='/favicon.ico' />
			<meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable="no"' />
		</Head>
	)
}
