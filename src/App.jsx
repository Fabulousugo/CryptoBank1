import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'

import { Account } from './components'
import Navbar    from './pages/Navbar'
import Cryptbank from './pages/Cryptbank'
import Hero from './pages/Hero'
import AboutPage from './pages/About'
import Footer from './pages/Footer'
import Levels from './components/Levels'
import Warning from './components/Warning'

import 'bulma/css/bulma.min.css';


import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import {  goerli } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [goerli],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'SaverSmart',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})



export function App() {
  const { isConnected } = useAccount()
  return (
    <>
    
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
    <div style={{overflow:'hidden',backgroundColor:'wheat'}}>
      <Navbar/>

      {/* <ConnectButton /> */}
      <Hero/>
      <Warning/>
      <Cryptbank/>
      <Levels/>
      <AboutPage/>
      <Footer/>
      
      </div>


      {/* <ConnectButton />
      {isConnected && <Account />} */}
      </RainbowKitProvider>
    </WagmiConfig>
    </>
  )
}
