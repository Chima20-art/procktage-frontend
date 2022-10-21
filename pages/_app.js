import '../styles/globals.css'
import App from 'next/app'
import { client } from '../lib/sanity'
import { OrdersProvider } from '../OrdersContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const removeFromCart = (item) => {
        const newCart = cart.filter((cartItem) => {
            return cartItem.id != item.id
        })

        setCart(newCart)
    }

    return (
        <OrdersProvider
            value={{
                cart,
                addToCart,
                removeFromCart,
            }}
        >
            <Component {...pageProps} />
        </OrdersProvider>
    )
}

export default MyApp
