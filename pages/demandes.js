import React from 'react'
import Header from '../components/header'
import { client, urlFor } from '../lib/sanity'
import Footer from '../components/footer'
import Link from 'next/link'

export default function Categories({ websiteSettings, categories }) {
    console.log('categories', categories)
    return (
        <div className="h-full bg-[#FFF8ED] min-h-screen w-screen flex flex-col justify-between ">
            <Header websiteSettings={websiteSettings} categories={categories} />
            <div className="lg:max-w-5xl max-w-[80%] uppercase  text-grey-700 flex flex-col items-center mx-auto py-8 h-full  bg-grey-200 w-full border border-grey-300 ">
                <p>demande de produit</p>
                <div
                    id="tableau "
                    className="mb-4 w-[100%] flex flex-col items-center "
                >
                    <div className="bg-black w-[98%] flex text-white text-[10px] flex-6 py-4 px-2">
                        <div className=" w-[25%]">image de produit</div>
                        <div className="w-[35%]">description</div>
                        <div className="w-[25%]">quatite (pqt)</div>
                        <div className="w-[25%]">action</div>
                    </div>
                    <div className="bg-white w-[98%] flex text-gray text-[10px] h-full flex-6 py-3 px-2 ">
                        <div className="w-[25%]">
                            {' '}
                            <img
                                src="/testimg.png"
                                className="  w-[60px] h-[60px]"
                            />
                        </div>
                        <div className="w-[35%] h-full  h-full">
                            <p className=" pb-1 font-bold">
                                bouteille plastique transparent +bouchon
                            </p>
                            <p className=" pb-1 ">500ml</p>
                            <p className=" pb-1">126pcs - 1pqt</p>
                        </div>
                        <div className="w-[25%] font-bold h-full">1</div>
                        <div className="w-[25%]">
                            <button className="bg-red-600 py-3 px-2 uppercase text-beige hover:bg-gray rounded-[20px]">
                                Supprimer
                            </button>
                        </div>
                    </div>
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
        `*[_type == 'category']{
          _id,
          title,
           subCategories[]->{
                title,
                _id,
                image,
                slug,
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
