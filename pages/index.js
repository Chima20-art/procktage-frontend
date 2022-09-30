import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Footer from './footer'

export default function Home({ websiteSettings }) {
    return (
        <div className="h-screen bg-[#FFF8ED] flex flex-col justify-between ">
            <Header websiteSettings={websiteSettings} />
            <div className=" ">Content</div>
            <div className="w-screen">
                <Footer websiteSettings={websiteSettings} />
            </div>
        </div>
    )
}
