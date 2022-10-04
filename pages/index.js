import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Footer from './footer'
import Accueil from './home'
import { motion } from 'framer-motion'

export default function Home({ websiteSettings, homePage }) {
    return (
        <div className="h-full bg-[#FFF8ED] flex flex-col justify-between ">
            <Header websiteSettings={websiteSettings} homePage={homePage} />
            <Accueil homePage={homePage} />
            <div className="w-screen">
                <Footer websiteSettings={websiteSettings} />
            </div>
        </div>
    )
}
