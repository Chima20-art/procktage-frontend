import '../styles/globals.css'
import App from 'next/app'
import { client } from '../lib/sanity'
import { OrdersProvider } from '../OrdersContext'

function MyApp({ Component, pageProps }) {
    return (
        <OrdersProvider>
            <Component {...pageProps} />
        </OrdersProvider>
    )
}

export default MyApp
