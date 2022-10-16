import Link from 'next/link'
import { useState } from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import { client, urlFor } from '../../lib/sanity'
import { RiShoppingCart2Fill } from 'react-icons/ri'

export default function Product({ product, categories, websiteSettings }) {
    let [count, setCount] = useState(0)
    console.log('categories', categories)
    console.log('product', product)

    const [isSelected, setIsSelected] = useState('')
    function incrementCount() {
        count >= 0 ? setCount(count + 1) : count
    }
    function decrementCount() {
        count > 0 ? setCount(count - 1) : count
    }
    return (
        <div className="h-full bg-[#FFF8ED] min-h-screen w-screen flex flex-col justify-between text-gray ">
            <Header websiteSettings={websiteSettings} categories={categories} />
            <div className=" uppercase max-w-5xl  w-full flex flex-col items-center mx-auto py-8 h-full  ">
                <div className="w-full text-[11px] py-8">
                    <Link href="/cateogries">tous nos produits</Link>/{' '}
                    {product?.Subcategory?.title}
                </div>
                <div className="w-full flex flex-col border border-grey-400 py-6 px-4">
                    <div className="lowercase font-bold cursor-pointer">
                        retour
                    </div>
                    <div className="w-full flex   ">
                        <div className=" w-[50%] flex justify-center">
                            <img
                                src={urlFor(product?.image?.asset)}
                                className=" flex  p-4  max-w-[270px] max-h-[240px]"
                            />
                        </div>
                        <div className=" flex   w-full p-4 flex-col border-l border-grey-200 pl-6">
                            <p className="font-bold">{product?.title}</p>
                            <p className="text-[14px] pt-2 pb-4 ">
                                {product?.Subcategory?.title}
                            </p>
                            <p className=" text-[12px] py-1">
                                selectionnez la taille:
                            </p>
                            <div>
                                <div className="bg-red-700 flex fex-row py-3 ">
                                    <div className="w-6 h-6 flex-1 flex justify-center  ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="black"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                                            />
                                        </svg>
                                    </div>
                                    <div className="w-6 h-6 flex-1 flex justify-center ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="black"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.745 3A23.933 23.933 0 003 12c0 3.183.62 6.22 1.745 9M19.5 3c.967 2.78 1.5 5.817 1.5 9s-.533 6.22-1.5 9M8.25 8.885l1.444-.89a.75.75 0 011.105.402l2.402 7.206a.75.75 0 001.104.401l1.445-.889m-8.25.75l.213.09a1.687 1.687 0 002.062-.617l4.45-6.676a1.688 1.688 0 012.062-.618l.213.09"
                                            />
                                        </svg>
                                    </div>
                                    <div className="w-6 h-6 flex-1  flex justify-center ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="black"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                {product?.description?.map((item, index) => {
                                    return (
                                        <div
                                            key={item?._key}
                                            onClick={() => setIsSelected(index)}
                                            className={` flex fex-row py-2 cursor-pointer  relative  ${
                                                isSelected == index
                                                    ? 'bg-gray static '
                                                    : 'bg-red-100'
                                            }`}
                                        >
                                            <div
                                                className={` ${
                                                    isSelected == index &&
                                                    'border-t-[10px] border-t-transparent border-l-[15px]  -left-[6px] border-l-red-600 border-b-[10px] border-b-transparent absolute  '
                                                }   `}
                                            ></div>
                                            <div className="flex-1 flex text-[15px] text-red-500 font-bold justify-center ">
                                                {item?.reference}
                                            </div>
                                            <div className="flex-1 flex text-red-500 lowercase justify-center">
                                                {item?.sizing}
                                            </div>
                                            <div
                                                className={`flex-1 flex text-[15px] font-bold justify-center ${
                                                    isSelected == index
                                                        ? 'text-white'
                                                        : 'text-black'
                                                } `}
                                            >
                                                {item?.quantite}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className=" text-[12px] mt-6">
                                Quantite (Pqt):minimum pqt{' '}
                            </div>
                            <div className="flex">
                                <div
                                    onClick={decrementCount}
                                    className="bg-gray cursor-pointer text-white text-3xl h-fit my-auto  w-[28px] flex flex-col justify-center items-center rounded-[2px] "
                                >
                                    -
                                </div>
                                <div className=" m-1 flex w-[100px] rounded-[50px] px-[10px] py-[10px] bg-red-100 ">
                                    {count}
                                </div>

                                <div
                                    onClick={incrementCount}
                                    className="bg-gray cursor-pointer text-white text-3xl h-fit my-auto  w-[28px] flex flex-col justify-center items-center rounded-[2px] "
                                >
                                    +
                                </div>
                            </div>
                            <div className=" mt-6 bg-red-700 flex w-fit items-center cursor-pointer py-[18px] px-[25px] rounded-[50px] text-[12px] text-white hover:bg-gray">
                                <RiShoppingCart2Fill className=" mx-2 text-xl" />{' '}
                                ajouter au panier
                            </div>
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

export async function getStaticPaths() {
    const products = await client.fetch(
        `*[_type == 'product' && !(_id in path("drafts.**"))  ]{ Subcategory->{ slug }, slug }`,
        {}
    )
    let paths = products.map((item, index) => {
        return {
            params: {
                slug: [item.Subcategory.slug.current, item.slug.current],
            },
        }
    })

    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps(context) {
    const slug = context?.params?.slug

    let productSlug = slug[slug?.length - 1]
    // productSlug =

    let prodcutQuery = `*[_type == 'product' && slug.current == '${productSlug}' &&  !(_id in path("drafts.**"))  ][0]{ Subcategory->{title}, _id,description,image,reference,slug,title }`
    let product = await client.fetch(prodcutQuery, {})

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
    console.log('product', product)

    return {
        props: {
            product,
            categories,
            websiteSettings,
        },
    }
}
