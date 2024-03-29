import React, { useContext, useState } from 'react'
import Header from '../components/header'
import { client, urlFor } from '../lib/sanity'
import Footer from '../components/footer'
import getYouTubeID from 'get-youtube-id'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

export default function Entrerise({ websiteSettings, entreprise, categories }) {
    var youtubeId = entreprise ? getYouTubeID(entreprise?.youtubeUrl) : null
    //console.log('youtubeId ', youtubeId)
    return (
        <div className="h-full bg-white min-h-screen w-screen flex flex-col justify-between ">
            <Header websiteSettings={websiteSettings} categories={categories} />
            <div className="lg:max-w-[70%] sm:max-w-2xl  w-[95%] uppercase  text-grey-700 flex flex-col items-center mx-auto py-8 h-full    ">
                {entreprise?.image && (
                    <div className=" md:max-w-[60%] max-w-[80%] my-12">
                        {entreprise?.image?.image && (
                            <img src={urlFor(entreprise?.image?.image)} />
                        )}
                    </div>
                )}
                <div className=" my-2.5  md:w-[60%] w-full mx-auto h-fit">
                    <LiteYouTubeEmbed id={youtubeId} />
                </div>
                {entreprise?.content?.map((item) => {
                    return (
                        <div key={item?._key} className="my-2">
                            <p className="text-[12px] font-bold px-4 pt-4 pb-2 text-black">
                                {item?.title}
                            </p>
                            <p className="text-[11px] bg-grey-100 text-justify p-4 tracking-6 leading-relaxed">
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
    let websiteSettings = client.fetch(
        `*[_id == 'settings'][0]{
        categories{
            categorie1->,
            categorie2->,
            categorie3->
        },
        contact,
        logo,
        media,
        seo,
    }`,
        {}
    )
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
            youtubeUrl
            
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
