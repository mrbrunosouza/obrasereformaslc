import { AppProps } from 'next/app'

import { Header } from '../Components/Header'

import { GlobalStyles } from '../../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      <Header />
    </>
  )
}

export default MyApp
