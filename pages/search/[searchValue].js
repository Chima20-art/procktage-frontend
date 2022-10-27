import Header from '../../components/header'
import Footer from '../../components/footer'
import { client, urlFor } from '../../lib/sanity'
import Link from 'next/link'

export default function SearchPage({
    searchValue,
    searchRes,
    websiteSettings,
    categories,
}) {
    //console.log('searchRes', searchRes)
    return (
        <div className="h-full bg-[#FFF8ED] min-h-screen w-full flex flex-col justify-between ">
            <Header websiteSettings={websiteSettings} categories={categories} />
            <div className="lg:max-w-5xl max-w-[90%]  mx-auto  w-[100%] flex flex-col items-center py-8 h-full  ">
                <div className="uppercase text-[10px]  pb-8">
                    {searchRes?.length} produits trouvÉs
                </div>
                <section className="lg:w-full   flex flex-row flex-wrap    ">
                    {searchRes?.map((product, index) => {
                        return (
                            <div
                                key={index}
                                className="w-[100%] md:w-1/2 lg:w-1/4 flex justify-center"
                            >
                                <Link
                                    href={
                                        '/products/' +
                                        product?.Subcategory?.slug?.current +
                                        '/' +
                                        product?.slug?.current
                                    }
                                >
                                    <a className="group w-full py-5 px-4 m-2 flex flex-col items-center border-[5px] border-grey-200 hover:border-red-700 hover:cursor-pointer ">
                                        <img
                                            src={urlFor(product?.image?.asset)}
                                            className="object-contain max-w-[140px] h-[140px] py-3"
                                        />
                                        <p className="text-[12px] text-gray uppercase py-3">
                                            {product.title}
                                        </p>
                                        <div className="flex flex-col  justify-center py-3 items-center mx-4">
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
                                                    <p className="   px-0 m-0 text-red-700 text-[12px] font-bold ">
                                                        {product?.reference}
                                                    </p>
                                                </div>
                                            )}
                                            {product?.description?.length >
                                                0 && (
                                                <div className="flex gap-2 mb-2 items-center justify-start py-3   ">
                                                    <div className="w-6 h-full  ">
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
                                                                d="M4.745 3A23.933 23.933 0 003 12c0 3.183.62 6.22 1.745 9M19.5 3c.967 2.78 1.5 5.817 1.5 9s-.533 6.22-1.5 9M8.25 8.885l1.444-.89a.75.75 0 011.105.402l2.402 7.206a.75.75 0 001.104.401l1.445-.889m-8.25.75l.213.09a1.687 1.687 0 002.062-.617l4.45-6.676a1.688 1.688 0 012.062-.618l.213.09"
                                                            />
                                                        </svg>
                                                    </div>

                                                    <p className="text-red-700 text-[11px] font-bold">
                                                        {product?.description
                                                            ?.map(
                                                                (item) =>
                                                                    item?.sizing
                                                            )
                                                            .join(' / ')}
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
                                                        <p className=" text-[14px] font-bold">
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
export async function getServerSideProps(context) {
    const searchValue = context?.params?.searchValue
    const searchQuery = `*[_type == 'product' 
    &&  !(_id in path("drafts.**")) 
    && title match '*${searchValue}*'
    ]{
        Subcategory->,
        description,
        image,
        reference,
        slug,
        title,
      }`
    let websiteSettings = await client.fetch(`*[_type == 'settings' ][0]`, {})
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
    const searchRes = await client.fetch(searchQuery, {})
    return {
        props: {
            searchValue,
            searchRes,
            websiteSettings,
            categories,
        },
    }
}
