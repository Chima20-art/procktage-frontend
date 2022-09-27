import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'

export default function Home({ websiteSettings }) {
    console.log('websiteSettings', websiteSettings)
    return (
        <div>
            <Header websiteSettings={websiteSettings} />
        </div>
    )
}
