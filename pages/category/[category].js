import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import { client, urlFor } from '../../lib/sanity'
import Link from 'next/link'

export default function Category({ category, categories, websiteSettings }) {
    return (
        <div className="bg-beige">
            <Header
                websiteSettings={websiteSettings}
                categories={categories}
                className="h-full bg-[#FFF8ED] min-h-screen w-screen flex flex-col justify-between "
            />
            <section
                key={category._id}
                className=" w-[90%] lg:max-w-5xl mx-auto  items-center flex flex-col py-6"
            >
                <div className=" w-full uppercase text-xs hover:font-bold ">
                    <Link href="/categories">Nos Produits </Link> {' / '}
                </div>
                <div className="text-[28px]  uppercase my-6  text-red-700 border-b-gray border-b-[15px] border-dotted ">
                    {category?.title}
                </div>
                <div className="   flex flex-row flex-wrap    ">
                    {category?.subCategories?.map((subcategory, index) => {
                        let rest = category?.subCategories?.length % 4
                        let isLast = category?.subCategories?.length
                        let is2Last = category?.subCategories?.length - 1
                        let is3Last = category?.subCategories?.length - 2
                        const shouldNotGrow =
                            rest != 0 &&
                            (index == isLast ||
                                index == is2Last ||
                                index == is3Last)
                        return (
                            <div
                                key={index}
                                className={` w-[100%] sm:w-1/2 md:w-fit   flex  flex-col justify-center items-center `}
                            >
                                <Link
                                    href={
                                        '/categories/' +
                                        subcategory?.slug?.current
                                    }
                                >
                                    <a className="group w-full   m-2   flex flex-col items-center w-fit	 border-[5px] border-grey-200 hover:border-red-700 hover:cursor-pointer ">
                                        {subcategory?.image?.image && (
                                            <img
                                                src={urlFor(
                                                    subcategory?.image?.image
                                                )}
                                                className="object-contain max-w-[140px] h-[140px]  pt-3"
                                            />
                                        )}
                                        <p className="text-[12px] text-gray uppercase py-4">
                                            {subcategory?.title}
                                        </p>
                                        <p className=" group-hover:bg-red-700 bg-gray pt-[10px] pb-1 px-2  w-full text-white text-[10px] text-center uppercase  hover:cursor-pointer ">
                                            Découvrir {subcategory?.count}{' '}
                                            differents produits
                                        </p>
                                    </a>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </section>
            <div className="w-screen">
                <Footer websiteSettings={websiteSettings} />
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const categories = await client.fetch(
        `*[_type == 'category'  && !(_id in path("drafts.**"))]{
          _id,
          title,
          slug,
          
        }`
    )

    let paths = categories.map((item, index) => {
        return {
            params: {
                category: item?.slug?.current,
            },
        }
    })

    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps(context) {
    const categoryTitle = context?.params?.category
    const categoryQuery = `*[_type == 'category'  && !(_id in path("drafts.**")) && slug.current == '${categoryTitle}' ][0]{ _id, slug, title, 
        subCategories[]->{
        title,
        _id,
        image,
        slug,
        "count":count(*[ _type=='product'  && !(_id in path("drafts.**")) && references(^._id)])
      } }`
    const category = await client.fetch(categoryQuery, {})
    let websiteSettings = await client.fetch(
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

    let categories = await client.fetch(
        `*[_type == 'category'  && !(_id in path("drafts.**"))]{
          _id,
          title,
          slug,
           subCategories[]->{
                title,
                _id,
                image,
                slug,
                "count":count(*[ _type=='product'  && !(_id in path("drafts.**")) && references(^._id)])
              }
        }`
    )

    return {
        props: {
            category,
            categories,
            websiteSettings,
        },
    }
}
