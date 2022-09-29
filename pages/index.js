import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Footer from './footer'

export default function Home({ websiteSettings }) {
    return (
        <div className="h-screen  ">
            <Header websiteSettings={websiteSettings} />
            <div className="h-1/3 ">Content</div>
            <Footer websiteSettings={websiteSettings} />
        </div>
    )
}
