import '../styles/globals.css'
import App from 'next/app'
import { client } from '../lib/sanity'
import { OrdersProvider } from '../OrdersContext'
import { useEffect, useState } from 'react'
import WhatsAppButton from '../components/whatsappButton'

function MyApp({ Component, pageProps }) {
    const [cart, setCart] = useState([])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const cartItems = localStorage.getItem('myCart')
            //console.log('cartItems', cartItems)
            if (cartItems) {
                let cartItemsJson = JSON.parse(cartItems)
                //console.log('cartItemsJson', cartItemsJson)
                if (cartItemsJson && cartItemsJson?.length > 0) {
                    //console.log('Saving new Cart')
                    setCart(cartItemsJson)
                }
            }
        }
    }, [])

    const addToCart = (item) => {
        localStorage.setItem('myCart', JSON.stringify([...cart, item]))
        setCart([...cart, item])
    }

    const removeFromCart = (item) => {
        const newCart = cart.filter((cartItem) => {
            return cartItem.id != item.id
        })

        setCart(newCart)
        localStorage.setItem('myCart', JSON.stringify(newCart))
    }

    const emptyCart = () => {
        setCart([])
        localStorage.setItem('myCart', JSON.stringify([]))
    }

    return (
        <OrdersProvider
            value={{
                cart,
                addToCart,
                removeFromCart,
                emptyCart,
            }}
        >
            <Component {...pageProps} />
            <WhatsAppButton />
        </OrdersProvider>
    )
}

export default MyApp
