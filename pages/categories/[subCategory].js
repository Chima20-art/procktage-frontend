import { useRouter } from 'next/router'
import Footer from '../../components/footer'
import Header from '../../components/header'
import { client, urlFor } from '../../lib/sanity'
import Link from 'next/link'

export default function SubCategory({
    subCategory,
    categories,
    websiteSettings,
}) {
    //console.log('category', category)

    let category = categories?.filter((item) => {
        let isCurrnetCategory = false
        item?.subCategories?.forEach((sub) => {
            if (sub?.slug?.current == subCategory?.slug?.current) {
                isCurrnetCategory = true
            }
        })
        return isCurrnetCategory
    })

    category = category?.length > 0 ? category[0] : null

    return (
        <div className="h-full bg-[#FFF8ED] min-h-screen w-screen flex flex-col justify-between ">
            <Header websiteSettings={websiteSettings} categories={categories} />
            <div className="lg:max-w-4xl sm:max-w-2xl  w-[95%]   flex flex-col items-center mx-auto py-8 h-full  ">
                <div className=" w-full uppercase text-xs flex ">
                    <Link href="/categories">
                        <a className="hover:font-bold cursor-pointer ">
                            Nos Produits
                        </a>
                    </Link>{' '}
                    {'  / '}
                    <Link href={`/category/${category?.slug?.current}`}>
                        <a className="hover:font-bold cursor-pointer ">
                            {category?.title}
                        </a>
                    </Link>
                </div>
                <section className="text-[20px] uppercase my-6  text-red-700 border-b-gray border-b-[10px] border-dotted ">
                    {subCategory?.title}
                </section>
                <section className="lg:w-full flex flex-row flex-wrap">
                    {subCategory?.products?.map((product, index) => {
                        return (
                            <div
                                key={index}
                                className="w-full md:w-1/2 lg:w-1/4 flex justify-center"
                            >
                                <Link
                                    href={
                                        '/products/' +
                                        subCategory?.slug?.current +
                                        '/' +
                                        product?.slug?.current
                                    }
                                >
                                    <a className="group w-full py-5 px-4 m-2 flex flex-col items-center border-[5px] border-grey-200 hover:border-red-700 hover:cursor-pointer ">
                                        {product?.image?.asset && (
                                            <img
                                                src={urlFor(
                                                    product?.image?.asset
                                                )}
                                                className="object-contain max-w-[140px] h-[140px] py-2"
                                            />
                                        )}

                                        <p className="text-[11px] text-gray uppercase py-2">
                                            {product?.title}
                                        </p>
                                        <div className="flex flex-col  justify-center py-2 items-center mx-4">
                                            {product?.reference && (
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="w-6 h-6  ">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1.5}
                                                            stroke="currentColor"
                                                            className="w-6 h-6"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <p className="   px-0 m-0 text-red-700 text-[11px] font-bold ">
                                                        {product?.reference}
                                                    </p>
                                                </div>
                                            )}

                                            {product?.description?.length > 0 &&
                                                product?.description[0]
                                                    .quantite && (
                                                    <div className="flex gap-2 mb-2 items-center ">
                                                        <div className="w-6 h-6  ">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={
                                                                    1.5
                                                                }
                                                                stroke="currentColor"
                                                                className="w-6 h-6"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <p className=" text-[10px] font-bold">
                                                            {
                                                                product
                                                                    ?.description[0]
                                                                    ?.quantite
                                                            }
                                                        </p>
                                                    </div>
                                                )}
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        )
                    })}
                </section>
            </div>
            <div className="w-screen">
                <Footer websiteSettings={websiteSettings} />
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const subs = await client.fetch(
        `*[_type == 'subCategory'  && !(_id in path("drafts.**")) ]`,
        {}
    )
    let paths = subs.map((item, index) => {
        return {
            params: {
                subCategory: item?.slug?.current,
            },
        }
    })

    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps(context) {
    const subCategoryTitle = context?.params?.subCategory
    const subCategoryQuery = `*[_type == 'subCategory'  && !(_id in path("drafts.**")) && slug.current == '${subCategoryTitle}' ][0]{ _id, image, slug, title, "products":*[_type=='product' && references(^._id) ] }`
    const subCategory = await client.fetch(subCategoryQuery, {})
    let websiteSettings = await client.fetch(
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
    let categories = await client.fetch(
        `*[_type == 'category' && !(_id in path("drafts.**")) ]{
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
            subCategory,
            categories,
            websiteSettings,
        },
    }
}
