import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'

export default function Home({ websiteSettings }) {
    return (
        <div className="min-h-screen">
            <Header websiteSettings={websiteSettings} />
        </div>
    )
}
