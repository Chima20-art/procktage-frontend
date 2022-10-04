import '../styles/globals.css'
import App from 'next/app'
import { client } from '../lib/sanity'

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp
