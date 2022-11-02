import React, { useContext, useState } from 'react'
import Header from '../components/header'
import { client, urlFor } from '../lib/sanity'
import Footer from '../components/footer'

export default function Entrerise({ websiteSettings, categories }) {
    return (
        <div className="h-full bg-[#FFF8ED] min-h-screen w-screen flex flex-col justify-between ">
            <Header websiteSettings={websiteSettings} categories={categories} />
            <div className="lg:max-w-4xl sm:max-w-2xl  w-[95%] uppercase  my-10 text-grey-700 flex flex-col items-center mx-auto py-8 h-full  bg-[#f5f5f5] w-full border border-grey-300 ">
                {' '}
                entreprise dfbvdgb
            </div>
            <div className="w-screen">
                <Footer websiteSettings={websiteSettings} />
            </div>
        </div>
    )
}

export async function getStaticProps(context) {
    let websiteSettings = client.fetch(`*[_type == 'settings'][0]`, {})
    let categories = client.fetch(
        `*[_type == 'category' && !(_id in path("drafts.**")) ]{
          _id,
          title,
           subCategories[]->{
                title,
                _id,
                image,
                slug,
                "count":count(*[ _type=='product' && !(_id in path("drafts.**")) && references(^._id)])
              }
        }`
    )
    let promises = [websiteSettings, categories]
    promises = await Promise.all(promises)
    websiteSettings = promises[0]
    categories = promises[1]

    return {
        props: { websiteSettings, categories }, // will be passed to the page component as props
    }
}
