import React from 'react'
import Header from '../components/header'
import { client } from '../lib/sanity'
import Footer from '../components/footer'

export default function Categories({ websiteSettings, categories }) {
    console.log('categories', categories)
    return (
        <div className="h-full bg-[#FFF8ED] min-h-screen w-screen flex flex-col justify-between ">
            <Header websiteSettings={websiteSettings} categories={categories} />
            <div className="max-w-5xl w-full flex flex-col items-center mx-auto py-8 h-full bg-red-100 ">
                <section className="bg-red-200 w-full  ">
                    {' '}
                    Nos produits/...
                </section>
                {categories?.map((category) => {
                    return (
                        <div
                            key={category._id}
                            className=" w-full  items-center flex flex-col   bg-red-200 "
                        >
                            <section className="text-[28px]  uppercase my-6  text-red-700 border-b-gray border-b-[15px] border-dotted ">
                                {category?.title}
                            </section>
                            <section className="products w-full flex flex-row justify-between gap-6  flex-wrap  bg-blue-400  ">
                                {category?.subCategories?.map(
                                    (subcategory, index) => {
                                        return (
                                            <div className="group w-fit last:bg-red-900   flex flex-col items-center 	 border-[5px] border-grey-200 hover:border-red-700 hover:cursor-pointer ">
                                                <img
                                                    src="/testimg.png"
                                                    className="object-contain max-w-[140px] h-[140px]  pt-3"
                                                />
                                                <p className="text-[12px] text-gray uppercase py-4">
                                                    {subcategory.title}
                                                </p>
                                                <p className=" group-hover:bg-red-700 bg-gray pt-[10px] pb-1 px-2  w-fit text-white text-[10px] uppercase  hover:cursor-pointer ">
                                                    Découvrir 43 differents
                                                    produits
                                                </p>
                                            </div>
                                        )
                                    }
                                )}
                            </section>
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
