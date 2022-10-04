import React from 'react'
import Header from '../components/header'
import { client } from '../lib/sanity'
import Footer from '../components/footer'

export default function Categories({ websiteSettings, categories }) {
    return (
        <div className="h-full bg-[#FFF8ED] min-h-screen flex flex-col justify-between ">
            <Header websiteSettings={websiteSettings} categories={categories} />
            <div>categories</div>
            <div className="w-screen">
                <Footer websiteSettings={websiteSettings} />
            </div>
        </div>
    )
}

export async function getStaticProps(context) {
    let websiteSettings = client.fetch(`*[_type == 'settings'][0]`, {})
    let categories = client.fetch(
        `*[_type == 'category']{
          _id,
          title,
           subCategories[]->{
                title,
                _id,
                "count":count(*[ _type=='product' && references(^._id)])
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
