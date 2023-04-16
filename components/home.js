import React from 'react'
import { urlFor } from '../lib/sanity'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Accueil({ homePage }) {
    let homePageSections = homePage?.Sections
    let reversedSections = [...homePageSections].reverse()

    console.log('reversedSections', reversedSections)
    console.log('homePageSections', homePageSections)

    let numberOfProducts0 = 0
    homePageSections[0]?.refrence?.subCategories?.forEach((item) => {
        numberOfProducts0 = numberOfProducts0 + (item?.count ? item?.count : 0)
    })
    let numberOfProducts1 = 0
    homePageSections[0]?.refrence?.subCategories?.forEach((item) => {
        numberOfProducts1 = numberOfProducts1 + (item?.count ? item?.count : 0)
    })
    let numberOfProducts2 = 0
    homePageSections[0]?.refrence?.subCategories?.forEach((item) => {
        numberOfProducts2 = numberOfProducts2 + (item?.count ? item?.count : 0)
    })
    let numberOfProducts3 = 0
    homePageSections[0]?.refrence?.subCategories?.forEach((item) => {
        numberOfProducts3 = numberOfProducts3 + (item?.count ? item?.count : 0)
    })
    let numberOfProducts4 = 0
    homePageSections[0]?.refrence?.subCategories?.forEach((item) => {
        numberOfProducts4 = numberOfProducts4 + (item?.count ? item?.count : 0)
    })
    return (
        <div>
            {' '}
            <div className="mb-8  lg:max-w-[70%] md:max-w-2xl sm:max-w-[95%] mx-auto overflow-hidden ">
                <div className=" hidden pb-2 lg:max-w-3xl max-w-[90%] md:max-w-2xl sm:max-w-[90%] lg:px-0 px-2 mx-auto  flex  w-full justify-between  px-2 ">
                    <div className="flex items-center">
                        <div className="w-2 h-2 bg-orange-200  mr-2"></div>
                        <p className="text-md capitalize font-bold text-red-700 ">
                            agencer
                        </p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-2 h-2 bg-orange-200  mr-2"></div>
                        <p className="text-md capitalize font-bold text-red-700 ">
                            emballer
                        </p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-2 h-2 bg-orange-200  mr-2"></div>
                        <p className="text-md capitalize font-bold text-red-700 ">
                            décorer
                        </p>
                    </div>
                </div>
                <div className="flex flex-row w-[90%] mx-auto h-full gap-2 ">
                    <Link
                        href={`/category/${homePageSections[0].refrence?.slug?.current}`}
                    >
                        <div className=" md:w-[45%] w-[55%] cursor-pointer flex flex-col relative  ">
                            <img
                                src="/cos.jpeg"
                                className="w-full h-full object-cover"
                            />
                            <div className="text-clack lg:w-[70%] text-center  w-[90%] h-fit border border-black md:py-8 py-2  bg-white/90  absolute left-0 top-0 bottom-0 right-0 m-auto ">
                                {' '}
                                <h1 className="lg:text-4xl md:text-xl text-md font-[500] ">
                                    {homePageSections[0]?.title}
                                </h1>
                                <p className="  w-full text-sm  ">
                                    + {numberOfProducts0} produits differents
                                </p>
                            </div>
                        </div>
                    </Link>
                    <div className=" flex flex-col md:w-[32%] w-[45%] gap-2  ">
                        <Link
                            href={`/category/${homePageSections[1].refrence?.slug?.current}`}
                        >
                            <div className="w-full h-full cursor-pointer relative ">
                                <img
                                    src="/patisserie.png"
                                    className="w-full h-full object-cover"
                                />
                                <div className="text-clack lg:w-[70%] text-center  w-[90%] h-fit py-2 bg-white/90  text-xs absolute left-0 top-0 bottom-0 right-0 m-auto ">
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
                        <Link
                            href={`/category/${homePageSections[2].refrence?.slug?.current}`}
                        >
                            <div className="w-full flex cursor-pointer relative ">
                                {' '}
                                <img
                                    src={'/sacs.png'}
                                    className="w-full  object-cover"
                                />
                                <div className="text-clack lg:w-[70%] text-center  w-[90%] h-fit py-2 bg-white/90  text-xs absolute left-0 top-0 bottom-0 right-0 m-auto ">
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
                    </div>

                    <div className="hidden md:flex  flex-col w-[30%] gap-2">
                        <Link
                            href={`/category/${homePageSections[3].refrence?.slug?.current}`}
                        >
                            <div className="w-full h-full cursor-pointer relative">
                                <img
                                    src={urlFor(
                                        homePageSections[3]?.image?.image
                                    )}
                                    className="w-full  h-full object-cover"
                                />
                                <div className="text-clack lg:w-[70%] text-center  w-[90%] h-fit py-2 px-4 bg-white/90  absolute left-0 top-0 bottom-0 right-0 m-auto ">
                                    {' '}
                                    <h1 className="lg:text-2xl md:text-md text-md font-[500] ">
                                        {homePageSections[3]?.title}
                                    </h1>
                                    <p className="  w-full text-sm  ">
                                        {' '}
                                        + {numberOfProducts3} produits
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href={`/category/${homePage?.Sections[4].refrence?.slug?.current}`}
                        >
                            <div className="w-full h-full cursor-pointer relative">
                                <img
                                    src={urlFor(
                                        homePageSections[4]?.image?.image
                                    )}
                                    className="w-full h-full object-cover"
                                />
                                <div className="text-clack lg:w-[70%] text-center  w-[90%] h-fit py-2 px-4 bg-white/90  absolute left-0 top-0 bottom-0 right-0 m-auto ">
                                    {' '}
                                    <h1 className="lg:text-2xl md:text-md text-md font-[500] ">
                                        {homePageSections[4]?.title}
                                    </h1>
                                    <p className="  w-full text-sm  ">
                                        {' '}
                                        + {numberOfProducts4} produits
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="hidden flex flex-col text-center md:my-16  mt-8 mb-16">
                    <h1 className="md:text-2xl text-md tracking-wide max-w-[90%] mx-auto mb-4 font-semibold uppercase leading-relaxed my-2	">
                        Emballages de qualité pour toutes les occasions chez
                        Procktage{' '}
                    </h1>
                    <p className="md:text-[16px] text-sm text-grey-600 w-[80%] leading-6 text-center mx-auto">
                        Des emballages de qualité pour tous les secteurs,
                        ajoutez une touche professionnelle à votre projet!
                    </p>
                </div>
                <div className=" hidden flex flex-col text-center md:my-6 my-1 ">
                    <h1 className="md:text-2xl text-[22px] font-semibold uppercase  tracking-wide leading-relaxed my-2 underline underline-offset-4 ">
                        Acheter par catégorie
                    </h1>
                    <div>
                        {reversedSections?.map((section) => {
                            return (
                                <div
                                    key={section?.key}
                                    className="max-w-[80%] mx-auto my-4 cursor-pointer "
                                >
                                    <div className="rounded-3xl  shadow-xl relative w-fit h-fit bd-red-300">
                                        {' '}
                                        <img
                                            src={urlFor(section?.image?.image)}
                                            className="rounded-3xl  shadow-xl relative"
                                        />
                                        <p className="absolute bg-red-700 text-white uppercase text-xs p-1 top-2 right-0 ">
                                            {section?.title}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="flex md:flex-row flex-col justify-between py-4">
                    <div className="flex  w-full justify-around">
                        {' '}
                        <div className="flex items-center flex-col">
                            <div className="  mr-2  h-[100px] flex items-end p-1">
                                <img
                                    src="/quality.svg"
                                    width="60px"
                                    height="60px"
                                />
                            </div>
                            <p className=" uppercase text-xs  ">
                                qualité guarantie
                            </p>
                        </div>
                        <div className="flex items-center   flex-col">
                            <div className="  mr-2  h-[100px] flex items-end p-2">
                                {' '}
                                <img
                                    src="/client.svg"
                                    width="70px"
                                    height="70px"
                                ></img>
                            </div>

                            <p className=" uppercase  text-xs ">
                                service clientèle
                            </p>
                        </div>
                    </div>
                    <div className="flex  w-full justify-around">
                        {' '}
                        <div className="flex items-center flex-col ">
                            {' '}
                            <div className="  mr-2  h-[100px] flex items-end p-2">
                                {' '}
                                <img
                                    src="/stock.svg"
                                    width="70px"
                                    height="70px"
                                ></img>
                            </div>
                            <p className=" uppercase  text-xs ">
                                disponibilité des references
                            </p>
                        </div>
                        <div className="flex items-center flex-col ">
                            <div className="  mr-2  h-[100px] flex items-end p-2">
                                {' '}
                                <img
                                    src="/shipping.svg"
                                    width="70px"
                                    height="70px"
                                ></img>
                            </div>

                            <p className=" uppercase text-xs  ">
                                livraison gratuite
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
