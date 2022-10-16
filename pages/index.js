import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import Accueil from '../components/home'
import { motion } from 'framer-motion'
import { client } from '../lib/sanity'

export default function Home({ websiteSettings, homePage, categories }) {
    return (
        <div className="h-full bg-[#FFF8ED] min-h-screen flex flex-col justify-between ">
            <Header websiteSettings={websiteSettings} categories={categories} />
            <Accueil homePage={homePage} />
            <div className="w-screen">
                <Footer websiteSettings={websiteSettings} />
            </div>
        </div>
    )
}

export async function getStaticProps(context) {
    let websiteSettings = client.fetch(`*[_type == 'settings'][0]`, {})
    let homePage = client.fetch(
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
    let categories = client.fetch(
        `*[_type == 'category']{
          _id,
          title,
           subCategories[]->{
                title,
                _id,
                slug,
                "count":count(*[ _type=='product' && references(^._id)])
              }
        }`
    )
    let promises = [websiteSettings, homePage, categories]
    promises = await Promise.all(promises)
    websiteSettings = promises[0]
    homePage = promises[1]
    categories = promises[2]

    return {
        props: { websiteSettings, homePage, categories }, // will be passed to the page component as props
    }
}
