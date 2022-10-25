import 'antd/dist/antd.css'
import '../styles/globals.scss'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'

import { ThirdwebProvider } from '@thirdweb-dev/react/solana'
import Wrapper from '../components/wrapper'

function MyApp({ Component, pageProps }) {
	return (
		<ThirdwebProvider network={'https://solana-devnet.g.alchemy.com/v2/7d-C_qttUPHcfzcKDCTCh_tx6j7EhQkw'}>
			<WalletModalProvider>
				<Wrapper>
					<Component {...pageProps} />
				</Wrapper>
			</WalletModalProvider>
		</ThirdwebProvider>
	)
}

export default MyApp
