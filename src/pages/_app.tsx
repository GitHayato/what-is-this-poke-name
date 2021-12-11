import '../styles/global.css'

import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

import { store } from '../app/store'
import { Header } from '../components/Header'
import { Toaster } from 'react-hot-toast'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Toaster />
      <Component {...pageProps} />
    </Provider>
  )
}
