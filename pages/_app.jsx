import 'antd/dist/antd.css'
import '../styles/globals.scss'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { ThirdwebProvider } from '@thirdweb-dev/react/solana'
import Wrapper from '../components/wrapper'

function MyApp({ Component, pageProps }) {
	return (
		<ThirdwebProvider network={'devnet'}>
			<WalletModalProvider>
				<Wrapper>
					<Component {...pageProps} />
				</Wrapper>
			</WalletModalProvider>
		</ThirdwebProvider>
	)
}

export default MyApp
