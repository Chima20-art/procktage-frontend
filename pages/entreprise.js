import React, { useContext, useState } from 'react'
import Header from '../components/header'
import { client, urlFor } from '../lib/sanity'
import Footer from '../components/footer'

export default function Entrerise({ websiteSettings, entreprise, categories }) {
    console.log('entreeeprise', entreprise)
    return (
        <div className="h-full bg-[#FFF8ED] min-h-screen w-screen flex flex-col justify-between ">
            <Header websiteSettings={websiteSettings} categories={categories} />
            <div className="lg:max-w-4xl sm:max-w-2xl  w-[95%] uppercase  text-grey-700 flex flex-col items-center mx-auto py-8 h-full   w-full border  ">
                <div className=" md:max-w-[60%] max-w-[80%] my-12">
                    <img src={urlFor(entreprise?.image?.image)} />
                </div>
                <div className="">
                    <p className="text-[12px] font-bold px-4 py-1">
                        Emballage fastfood
                    </p>
                    <p className="text-[9px] bg-[#f5f5f5] text-justify p-4 leading-relaxed">
                        Découvrez notre gamme d'accessoires et d'emballages
                        adaptées à la restauration rapide - fast food. Vous
                        trouverez tout ce dont vous avez besoin pour faire
                        déguster et habiller les plus savoureuses préparations !
                        Proxy propose des emballages pour le snacking à tarifs
                        réduits et cela sans perte de qualité! Retrouvez notre
                        gamme de gobelets, de barquettes et sacs de qualité qui
                        garantiront une parfaite dégustation à vos clients !
                        pots carton wraps, couverts, barquettes salade, sacs à
                        sandwich, carrés rainés, agitateurs, il y en a pour
                        divers usages et pour des préparations de type snacking
                        ou vente à emporter.
                    </p>
                </div>
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
