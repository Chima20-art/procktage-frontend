import React from 'react'
import { urlFor } from '../lib/sanity'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Slider from './slider1'
import Slider2 from './slider2'
import Slider1 from './slider1'

export default function Accueil({ homePage, products, instaCatalogue }) {
    let homePageSections = homePage?.Sections
    let reversedSections = [...homePageSections].reverse()
    const repeatedData = []

    for (let i = 0; i < 10; i++) {
        repeatedData.push(...instaCatalogue)
    }

    //console.log('reversedSections', reversedSections)
    console.log('repeatedData', repeatedData)
    console.log('instaCatalogue', instaCatalogue)

    let numberOfProducts0 = 0
    homePageSections[0]?.refrence?.subCategories?.forEach((item) => {
        numberOfProducts0 = numberOfProducts0 + (item?.count ? item?.count : 0)
    })
    let numberOfProducts1 = 0
    homePageSections[1]?.refrence?.subCategories?.forEach((item) => {
        numberOfProducts1 = numberOfProducts1 + (item?.count ? item?.count : 0)
    })
    let numberOfProducts2 = 0
    homePageSections[2]?.refrence?.subCategories?.forEach((item) => {
        numberOfProducts2 = numberOfProducts2 + (item?.count ? item?.count : 0)
    })
    let numberOfProducts3 = 0
    homePageSections[3]?.refrence?.subCategories?.forEach((item) => {
        numberOfProducts3 = numberOfProducts3 + (item?.count ? item?.count : 0)
    })
    let numberOfProducts4 = 0
    homePageSections[4]?.refrence?.subCategories?.forEach((item) => {
        numberOfProducts4 = numberOfProducts4 + (item?.count ? item?.count : 0)
    })
    let numberOfProducts5 = 0
    homePageSections[5]?.refrence?.subCategories?.forEach((item) => {
        numberOfProducts5 = numberOfProducts5 + (item?.count ? item?.count : 0)
    })
    const isMobileDevice = () => {
        return typeof window !== 'undefined' && window.innerWidth < 768
    }

    return (
        <div>
            {' '}
            <div className="mb-8  lg:max-w-[70%] md:max-w-2xl sm:max-w-[95%] mx-auto max-h-fit  ">
                <div className="flex flex-row md:w-[90%] my-4 mx-auto  gap-2  lg:h-[80vh]  h-[50vh]">
                    <div className=" flex flex-col md:w-[32%] w-[33%] h-[100%] gap-2 ">
                        <Link
                            href={`/category/${homePageSections[0].refrence?.slug?.current}`}
                        >
                            <div className=" w-full h-[60%] cursor-pointer flex flex-col relative  ">
                                <img
                                    src="/cos.jpeg"
                                    className="w-full h-[100%] object-cover"
                                />
                                <div className="text-clack lg:w-[70%] text-center  w-[90%] h-fit md:py-2 py-1 bg-white/90  text-xs absolute left-0 top-0 bottom-0 right-0 m-auto ">
                                    {' '}
                                    <h1 className="lg:text-2xl md:text-md text-md font-[500] mb-0 pb-0 ">
                                        {homePageSections[0]?.title}
                                    </h1>
                                    <p className="  w-full md:text-sm text-[10px] mt-0 pt-0 ">
                                        + {numberOfProducts0} produits
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href={`/category/${homePageSections[5].refrence?.slug?.current}`}
                        >
                            <div className=" w-full h-[40%] cursor-pointer flex flex-col relative  ">
                                <img
                                    src="/e_commerce.png"
                                    className="w-full  h-[100%] object-cover"
                                />
                                <div className="text-clack lg:w-[70%] text-center  w-[90%] h-fit md:py-2 py-1 bg-white/90  text-xs absolute left-0 top-0 bottom-0 right-0 m-auto ">
                                    {' '}
                                    <h1 className="lg:text-2xl md:text-md text-md font-[500] mb-0pb-0 ">
                                        {homePageSections[5]?.title}
                                    </h1>
                                    <p className="  w-full text-[10px] mt-0 pt-0 ">
                                        + {numberOfProducts5} produits
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className=" flex flex-col md:w-[32%] w-[33%] h-[100%] gap-2 ">
                        <Link
                            href={`/category/${homePageSections[2].refrence?.slug?.current}`}
                        >
                            <div className="w-full h-[50%] flex cursor-pointer relative ">
                                {' '}
                                <img
                                    src={'/sacs.png'}
                                    className="w-full h-[100%] object-cover"
                                />
                                <div className="text-clack lg:w-[70%] text-center  w-[90%] h-fit md:py-2 py-1 bg-white/90  text-xs absolute left-0 top-0 bottom-0 right-0 m-auto ">
                                    {' '}
                                    <h1 className="lg:text-2xl md:text-md text-md font-[500] ">
                                        {homePageSections[2]?.title}
                                    </h1>
                                    <p className="  w-full text-[10px] mt-0 pt-0 ">
                                        {' '}
                                        + {numberOfProducts2} produits
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href={`/category/${homePageSections[1].refrence?.slug?.current}`}
                        >
                            <div className="w-full h-[50%] cursor-pointer relative ">
                                <img
                                    src="/patisserie.png"
                                    className="w-full h-[100%] object-cover"
                                />
                                <div className="text-clack lg:w-[70%] text-center  w-[90%] h-fit md:py-2 py-1 bg-white/90  text-xs absolute left-0 top-0 bottom-0 right-0 m-auto ">
                                    {' '}
                                    <h1 className="lg:text-2xl md:text-md text-md font-[500] mb-0pb-0 ">
                                        {homePageSections[1]?.title}
                                    </h1>
                                    <p className="  w-full text-[10px] mt-0 pt-0 ">
                                        {' '}
                                        + {numberOfProducts1} produits
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="md:flex  flex flex-col h-[100%] w-[33%] gap-2 ">
                        <Link
                            href={`/category/${homePage?.Sections[4].refrence?.slug?.current}`}
                        >
                            <div className="w-full h-[60%] cursor-pointer relative">
                                <img
                                    src="/demenagement.png"
                                    className="w-full h-[100%] object-cover"
                                />
                                <div className="text-clack lg:w-[70%] text-center  w-[90%] h-fit md:py-2 py-1 bg-white/90  text-xs absolute left-0 top-0 bottom-0 right-0 m-auto ">
                                    {' '}
                                    <h1 className="lg:text-2xl md:text-md text-md font-[500] mb-0pb-0 ">
                                        {homePageSections[4]?.title}
                                    </h1>
                                    <p className="  w-full text-[10px] mt-0 pt-0 ">
                                        {' '}
                                        + {numberOfProducts1} produits
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href={`/category/${homePageSections[3].refrence?.slug?.current}`}
                        >
                            <div className="w-full h-[40%] cursor-pointer relative">
                                <img
                                    src="/restauration.png"
                                    className="w-full h-[100%]  object-cover"
                                />
                                <div className="text-clack lg:w-[70%] text-center  w-[90%] h-fit md:py-2 py-1 bg-white/90  text-xs absolute left-0 top-0 bottom-0 right-0 m-auto ">
                                    {' '}
                                    <h1 className="lg:text-2xl md:text-md text-md font-[500] mb-0pb-0 ">
                                        {homePageSections[3]?.title}
                                    </h1>
                                    <p className="  w-full text-[10px] mt-0 pt-0 ">
                                        {' '}
                                        + {numberOfProducts1} produits
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className=" flex flex-col text-center md:my-16  mt-8 mb-10">
                    <h1 className="md:text-xl text-md tracking-wide max-w-[90%] mx-auto mb-4 font-semibold uppercase leading-relaxed my-2	">
                        Emballages de qualité pour toutes les occasions chez
                        Procktage{' '}
                    </h1>
                    <p className="md:text-[16px] text-sm text-grey-600 w-[80%] leading-6 text-center mx-auto">
                        Des emballages de qualité pour tous les secteurs,
                        ajoutez une touche professionnelle à votre projet!
                    </p>
                </div>
                <div className="hidden  flex flex-col text-center md:my-6 my-1 ">
                    <h1 className="md:text-2xl text-[18x] font-semibold uppercase  tracking-wide leading-relaxed my-2 underline underline-offset-4 ">
                        Acheter par catégorie
                    </h1>
                    <div className=" ">
                        {reversedSections?.map((section) => {
                            console.log('section', section)
                            return (
                                <div
                                    key={section?.key}
                                    className="max-w-[80%] mx-auto my-4 cursor-pointer "
                                >
                                    <Link
                                        href={`/category/${section.refrence?.slug?.current}`}
                                    >
                                        <div className="relative w-fit h-fit bd-red-300">
                                            {' '}
                                            <img
                                                src={urlFor(
                                                    section?.image?.image
                                                )}
                                                className="rounded-3xl  shadow-xl relative"
                                            />
                                            <p className="absolute bg-red-700 text-white uppercase text-xs p-1 top-2 right-0 ">
                                                {section?.title}
                                            </p>
                                            <p className="text-grey-400 uppercase text-[11px] text-left px-2 mt-4 mb-1">
                                                {section?.descriptionTitle}
                                            </p>
                                            <p className="text text-[12px] text-left px-2 mb-12">
                                                {section?.description}
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <div className="flex sm:hidden flex-col justify-between py-4 md:w-[95%] mx-auto">
                        <h1 className="md:text-2xl text-[20px] text-center font-semibold uppercase  tracking-wide leading-relaxed my-2 underline underline-offset-4 ">
                            Acheter par catégorie
                        </h1>
                        <Slider2
                            homePageSections={homePageSections}
                            reversedSections={reversedSections}
                        />
                    </div>
                </div>
                <h1 className="md:text-2xl text-[20px] text-center font-semibold uppercase  tracking-wide leading-relaxed my-2 underline underline-offset-4 ">
                    Nouveau Produits
                </h1>

                <div className="flex md:flex-row flex-col justify-between py-4 md:w-[95%] mx-auto ">
                    <Slider1 products={products} />
                </div>
                <div className="flex flex-col">
                    <h1 className="md:text-2xl text-[20px] text-center font-semibold uppercase  tracking-wide leading-relaxed my-12 underline underline-offset-4">
                        Instagram Catalogue
                    </h1>

                    <div className="grid grid-cols-4 md:grid-cols-4 md:gap-4 gap-1 w-full h-full  ">
                        {instaCatalogue &&
                            repeatedData?.map((item, index) => {
                                return (
                                    <div
                                        className="cursor-pointer group perspective w-full h-full bg-red-300"
                                        key={index}
                                    >
                                        <div className="md:relative md:preserve-3d md:group-hover:my-rotate-y-180 w-full h-fit h-full md:w-full md:h-[300px] md:duration-1000 ">
                                            <div className="md:absolute backface-hidden h-full w-full rounded-xl">
                                                {isMobileDevice ? (
                                                    <Link
                                                        href={`/products/${item?.product?.Subcategory?.slug?.current}/${item?.product?.slug?.current}`}
                                                    >
                                                        <a className="h-full w-full cursor-pointer object-cover rounded-xl">
                                                            <img
                                                                className="h-full w-full"
                                                                src={
                                                                    item?.imageUrl
                                                                }
                                                            />
                                                        </a>
                                                    </Link>
                                                ) : (
                                                    <img
                                                        className="h-full w-full"
                                                        src={item?.imageUrl}
                                                    />
                                                )}
                                            </div>
                                            <div className=" hidden absolute my-rotate-y-180 backface-hidden bg-white w-full h-full shadow-2xl md:flex flex-col items-center justify-start rounded-xl ">
                                                <img
                                                    src={urlFor(
                                                        item?.product?.image
                                                    )}
                                                    className="max-h-[60%] w-full object-contain bg-grey-100 rounded-xl flex justify-start items-start top-0 "
                                                />
                                                <p className="text-black my-4 cursor-pointer">
                                                    {item?.title}
                                                </p>
                                                <Link
                                                    href={
                                                        '/products/' +
                                                        item?.product
                                                            ?.Subcategory?.slug
                                                            ?.current +
                                                        '/' +
                                                        item?.product?.slug
                                                            ?.current
                                                    }
                                                >
                                                    <button className="bg-orange-400 hover:bg-white hover:border hover:border-orange-400 hover:text-orange-400 text-white font-[500] py-2 px-4 rounded cursor-pointer ">
                                                        Voir le produit
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>

                <div className="hidden flex md:flex-row justify-between py-4 ">
                    <div className="flex  w-full justify-around">
                        <div className="flex items-center  flex-col mx-2 ">
                            <div className="flex items-end p-1  md:w-[60px] md:h-[60px] w-[40px] h-[42px] ">
                                <img src="/quality.svg" className="h-full" />
                            </div>
                            <p className=" uppercase text-[10px] lg:text-[16px] text-center  ">
                                qualité guarantie
                            </p>
                        </div>
                        <div className="flex items-center flex-col mx-2">
                            <div className="  flex items-end p-1  md:w-[60px] md:h-[60px] w-[40px] h-[40px]">
                                <img
                                    src="/client.svg"
                                    className="w-full h-full"
                                ></img>
                            </div>

                            <p className=" uppercase  text-[10px] lg:text-[16px] text-center  ">
                                service clientèle
                            </p>
                        </div>
                    </div>
                    <div className="flex  w-full justify-around">
                        <div className="flex items-center flex-col  mx-2 ">
                            <div className="flex items-end p-1  md:w-[60px] md:h-[60px] w-[40px] h-[40px]">
                                <img src="/stock.svg"></img>
                            </div>
                            <p className=" uppercase  text-[10px] lg:text-[16px] text-center ">
                                disponibilité des references
                            </p>
                        </div>
                        <div className="flex items-center flex-col mx-2">
                            <div className="flex items-end p-1  md:w-[60px] md:h-[60px] w-[40px] h-[40px]">
                                <img src="/shipping.svg"></img>
                            </div>

                            <p className=" uppercase text-[10px] lg:text-[16px] text-center ">
                                livraison gratuite
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
