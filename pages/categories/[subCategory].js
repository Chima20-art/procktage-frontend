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
    console.log('subcategory', subCategory)
    return (
        <div className="h-full bg-[#FFF8ED] min-h-screen w-screen flex flex-col justify-between ">
            <Header websiteSettings={websiteSettings} categories={categories} />
            <div className="max-w-5xl  w-full flex flex-col items-center mx-auto py-8 h-full  ">
                <section className=" w-full  ">
                    {' '}
                    Nos Produits/ {subCategory.title}
                </section>
                <section className="text-[20px] uppercase my-6  text-red-700 border-b-gray border-b-[10px] border-dotted ">
                    {subCategory.title}
                </section>
                <section className="w-full  flex flex-row flex-wrap    ">
                    {subCategory?.products
                        ?.concat(subCategory?.products)
                        .map((product, index) => {
                            return (
                                <div
                                    key={index}
                                    className="w-1/2 md:w-1/3 lg:w-1/4 flex justify-center"
                                >
                                    <Link
                                        href={
                                            '/products/' +
                                            subCategory?.slug?.current +
                                            '/' +
                                            product?.slug?.current
                                        }
                                    >
                                        <a className="group w-full pb-4 m-2 flex flex-col items-center border-[5px] border-grey-200 hover:border-red-700 hover:cursor-pointer ">
                                            <img
                                                src={urlFor(
                                                    product?.image?.asset
                                                )}
                                                className="object-contain max-w-[140px] h-[140px] pt-3"
                                            />
                                            <p className="text-[12px] text-gray uppercase py-4">
                                                {product.title}
                                            </p>
                                            <div className="flex flex-col justify-center  mx-4">
                                                {product?.reference && (
                                                    <div className="flex gap-2 mb-2">
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
                                                                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <p className="   p-0 m-0 ">
                                                            {product?.reference}
                                                        </p>
                                                    </div>
                                                )}
                                                {product?.description?.length >
                                                    0 && (
                                                    <div className="flex gap-2 mb-2 items-center justify-start   ">
                                                        <div className="w-6 h-full  ">
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
                                                                    d="M4.745 3A23.933 23.933 0 003 12c0 3.183.62 6.22 1.745 9M19.5 3c.967 2.78 1.5 5.817 1.5 9s-.533 6.22-1.5 9M8.25 8.885l1.444-.89a.75.75 0 011.105.402l2.402 7.206a.75.75 0 001.104.401l1.445-.889m-8.25.75l.213.09a1.687 1.687 0 002.062-.617l4.45-6.676a1.688 1.688 0 012.062-.618l.213.09"
                                                                />
                                                            </svg>
                                                        </div>

                                                        <p className="">
                                                            {product?.description
                                                                ?.concat(
                                                                    product?.description
                                                                )
                                                                .map(
                                                                    (item) =>
                                                                        item?.sizing
                                                                )
                                                                .join(' / ')}
                                                        </p>
                                                    </div>
                                                )}
                                                {product?.description?.length >
                                                    0 &&
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
                                                            <p className="">
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
    const subs = await client.fetch(`*[_type == 'subCategory' ]`, {})
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
    const subCategoryQuery = `*[_type == 'subCategory' && slug.current == '${subCategoryTitle}' ][0]{ _id, image, slug, title, "products":*[_type=='product' && references(^._id) ] }`
    const subCategory = await client.fetch(subCategoryQuery, {})
    let websiteSettings = await client.fetch(`*[_type == 'settings'][0]`, {})
    let categories = await client.fetch(
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

    return {
        props: {
            subCategory,
            categories,
            websiteSettings,
        },
    }
}
