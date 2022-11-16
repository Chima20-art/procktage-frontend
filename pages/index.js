import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import Accueil from '../components/home'
import { motion } from 'framer-motion'
import { client } from '../lib/sanity'
import { NextSeo } from 'next-seo'
import { setConfig } from 'next/config'
import { urlFor } from '../lib/sanity'

export default function Home({ websiteSettings, homePage, categories }) {
    console.log('websiteSettings', websiteSettings)
    return (
        <div className="h-full bg-beige min-h-screen flex flex-col justify-between ">
            <NextSeo
                title={
                    websiteSettings?.seo?.title
                        ? websiteSettings?.seo?.title
                        : 'Procktage'
                }
                description={
                    websiteSettings?.seo?.description
                        ? websiteSettings?.seo?.description
                        : '"Emballage Marrakech Marocgrossiste emballage, fournisseur emballage, fournisseur packaging, ... packaging plastique maroc"'
                }
                openGraph={{
                    type: 'website',
                    url: 'https://www.procktage.ma/',
                    title: websiteSettings?.seo?.title
                        ? websiteSettings?.seo?.title
                        : 'Procktage',
                    description: websiteSettings?.seo?.description
                        ? websiteSettings?.seo?.description
                        : '"Emballage Marrakech Marocgrossiste emballage, fournisseur emballage, fournisseur packaging, ... packaging plastique maroc"',

                    images: [
                        {
                            url: websiteSettings?.seo?.image
                                ? urlFor(websiteSettings?.seo?.image)
                                : 'https://cdn.sanity.io/images/e970xo45/production/ac2545313e3c5494288649bdd7cd719c471165d4-2000x1325.jpg',
                            width: 600,
                            height: 400,
                            alt: 'Og Image Alt',
                        },
                    ],
                }}
            />
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
        `*[_type == 'homePage' && !(_id in path("drafts.**"))][0]{
        Sections[]{
          image,
          title,
          refrence->{
            title,
            slug,
            subCategories[]->{
              title,
              _id,
              "count":count(*[ _type=='product' && !(_id in path("drafts.**")) && references(^._id)])
            }
          },
          _key
        },
      }`,
        {}
    )
    let categories = client.fetch(
        `*[_type == 'category' && !(_id in path("drafts.**"))]{
          _id,
          title,
           subCategories[]->{
                title,
                _id,
                slug,
                "count":count(*[ _type=='product' && !(_id in path("drafts.**")) && references(^._id)])
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
