import React from 'react'
import Header from '../components/header'
import { client, urlFor } from '../lib/sanity'
import Footer from '../components/footer'
import Link from 'next/link'

export default function Categories({ websiteSettings, categories }) {
    //console.log('categories', categories)
    return (
        <div className="h-full bg-[#FFF8ED] min-h-screen w-screen flex flex-col justify-between ">
            <Header websiteSettings={websiteSettings} categories={categories} />
            <div className="lg:max-w-4xl sm:max-w-2xl  w-[95%] flex flex-col items-center mx-auto py-8 h-full  ">
                <Link href="/categories" className="   ">
                    <p className="hover:font-bold cursor-pointer w-full">
                        {' '}
                        Nos produits /
                    </p>
                </Link>
                {categories?.map((category) => {
                    let rest = category?.subCategories?.length % 4
                    let isLast = category?.subCategories?.length
                    let is2Last = category?.subCategories?.length - 1
                    let is3Last = category?.subCategories?.length - 2

                    return (
                        <div
                            key={category._id}
                            className=" w-full  items-center flex flex-col"
                        >
                            <section className="lg:text-[22px] text-[19px] uppercase my-6  text-red-700 border-b-gray lg:border-b-[12px] border-b-[7px] border-dotted ">
                                {category?.title}
                            </section>
                            <section className=" w-full md:max-w-5xl  flex flex-row flex-wrap    ">
                                {category?.subCategories?.map(
                                    (subcategory, index) => {
                                        const shouldNotGrow =
                                            rest != 0 &&
                                            (index == isLast ||
                                                index == is2Last ||
                                                index == is3Last)
                                        return (
                                            <div
                                                key={index}
                                                className={` w-[100%] sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center `}
                                            >
                                                <Link
                                                    href={
                                                        '/categories/' +
                                                        subcategory?.slug
                                                            ?.current
                                                    }
                                                >
                                                    <a className="group w-full    m-2   flex flex-col items-center 	 border-[5px] border-grey-200 hover:border-red-700 hover:cursor-pointer ">
                                                        {subcategory?.image
                                                            ?.image && (
                                                            <img
                                                                src={urlFor(
                                                                    subcategory
                                                                        ?.image
                                                                        ?.image
                                                                )}
                                                                className="object-contain max-w-[140px] h-[140px]  pt-3"
                                                            />
                                                        )}

                                                        <p className="text-[12px] text-gray uppercase py-4">
                                                            {subcategory.title}
                                                        </p>
                                                        <p className=" group-hover:bg-red-700 bg-gray pt-[10px] pb-1 px-2  w-full text-white text-[10px] text-center uppercase  hover:cursor-pointer ">
                                                            Découvrir{' '}
                                                            {subcategory?.count}{' '}
                                                            differents produits
                                                        </p>
                                                    </a>
                                                </Link>
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
    let websiteSettings = client.fetch(
        `*[_type == 'settings'][0]{
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
        `*[_type == 'category'  && !(_id in path("drafts.**"))]{
          _id,
          title,
           subCategories[]->{
                title,
                _id,
                image,
                slug,
                "count":count(*[ _type=='product'  && !(_id in path("drafts.**")) && references(^._id)])
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
