import '../styles/globals.css'
import App from 'next/app'
import { client } from '../lib/sanity'

function MyApp({ Component, pageProps, websiteSettings, homePage }) {
    return (
        <Component
            {...pageProps}
            websiteSettings={websiteSettings}
            homePage={homePage}
        />
    )
}

MyApp.getInitialProps = async (appContext) => {
    //   // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext)

    const websiteSettings = await client.fetch(`*[_type == 'settings'][0]`, {})
    const homePage = await client.fetch(
        `*[_type == 'homePage'][0]{
        Sections[]{
          image,
          title,
          refrence->{
            title,
            subCategories[]->{
              title,
              _id,
              "count":count(*[ _type=='product' && references(^._id)])
            }
          },
          _key
        },
      }`,
        {}
    )

    return { ...appProps, websiteSettings, homePage }
}

export default MyApp
