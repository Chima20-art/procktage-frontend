import React, { useContext, useState } from 'react'
import Header from '../components/header'
import { client, urlFor } from '../lib/sanity'
import Footer from '../components/footer'

export default function Entrerise({ websiteSettings, entreprise, categories }) {
    return (
        <div className="h-full bg-[#FFF8ED] min-h-screen w-screen flex flex-col justify-between ">
            <Header websiteSettings={websiteSettings} categories={categories} />
            <div className="lg:max-w-4xl sm:max-w-2xl  w-[95%] uppercase  text-grey-700 flex flex-col items-center mx-auto py-8 h-full    ">
                <div className=" md:max-w-[60%] max-w-[80%] my-12">
                    <img src={urlFor(entreprise?.image?.image)} />
                </div>
                {entreprise?.content?.map((item) => {
                    return (
                        <div key={item?._key} className="my-2">
                            <p className="text-[12px] font-bold px-4 py-1">
                                {item?.title}
                            </p>
                            <p className="text-[9px] bg-orange-100 text-justify p-4 leading-relaxed">
                                {item?.text}
                            </p>
                        </div>
                    )
                })}
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
    let entreprise = client.fetch(
        `*[_type == 'entreprise'  && !(_id in path("drafts.**"))][0]{
            image,
            content,
            _id,
            
          }`,
        {}
    )
    let promises = [websiteSettings, categories, entreprise]
    promises = await Promise.all(promises)
    websiteSettings = promises[0]

    categories = promises[1]
    entreprise = promises[2]

    return {
        props: { websiteSettings, categories, entreprise }, // will be passed to the page component as props
    }
}
