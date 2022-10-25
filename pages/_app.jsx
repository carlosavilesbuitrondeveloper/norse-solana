import 'antd/dist/antd.css'
import '../styles/globals.scss'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'

import { ThirdwebProvider } from '@thirdweb-dev/react/solana'
import Wrapper from '../components/wrapper'

function MyApp({ Component, pageProps }) {
	return (
		<Wrapper>
			<ThirdwebProvider network={'devnet'}>
				<WalletModalProvider>
					<Component {...pageProps} />
				</WalletModalProvider>
			</ThirdwebProvider>
		</Wrapper>
	)
}

export default MyApp
