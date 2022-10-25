import 'antd/dist/antd.css'
import '../styles/globals.scss'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { ThirdwebProvider } from '@thirdweb-dev/react/solana'

function MyApp({ Component, pageProps }) {
	return (
		<ThirdwebProvider network={'devnet'}>
			<WalletModalProvider>
				<Component {...pageProps} />
			</WalletModalProvider>
		</ThirdwebProvider>
	)
}

export default MyApp
