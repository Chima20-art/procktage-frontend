import '../styles/globals.css'
import App from 'next/app'
import { client } from '../lib/sanity'

function MyApp({ Component, pageProps, websiteSettings }) {
    return <Component {...pageProps} websiteSettings={websiteSettings} />
}
MyApp.getInitialProps = async (appContext) => {
    //   // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext)

    const websiteSettings = await client.fetch(`*[_type == 'settings'][0]`, {})
    //console.log('websiteSettings', websiteSettings)

    return { ...appProps, websiteSettings }
}

export default MyApp
