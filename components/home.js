import React from 'react'
import { urlFor } from '../lib/sanity'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Accueil({ homePage }) {
    //console.log('homePage', homePage)
    console.log(homePage?.Sections[0])
    let numberOfProducts0 = 0
    homePage?.Sections[0]?.refrence?.subCategories?.forEach((item) => {
        numberOfProducts0 = numberOfProducts0 + (item?.count ? item?.count : 0)
    })
    let numberOfProducts1 = 0
    homePage?.Sections[0]?.refrence?.subCategories?.forEach((item) => {
        numberOfProducts1 = numberOfProducts1 + (item?.count ? item?.count : 0)
    })
    let numberOfProducts2 = 0
    homePage?.Sections[0]?.refrence?.subCategories?.forEach((item) => {
        numberOfProducts2 = numberOfProducts2 + (item?.count ? item?.count : 0)
    })
    let numberOfProducts3 = 0
    homePage?.Sections[0]?.refrence?.subCategories?.forEach((item) => {
        numberOfProducts3 = numberOfProducts3 + (item?.count ? item?.count : 0)
    })
    let numberOfProducts4 = 0
    homePage?.Sections[0]?.refrence?.subCategories?.forEach((item) => {
        numberOfProducts4 = numberOfProducts4 + (item?.count ? item?.count : 0)
    })
    return (
        <div>
            {' '}
            <div className="my-8  lg:max-w-[70%] md:max-w-2xl sm:max-w-[95%] mx-auto overflow-hidden ">
                <div className=" pb-2 lg:max-w-3xl max-w-[90%] md:max-w-2xl sm:max-w-[90%] lg:px-0 px-2 mx-auto  flex  w-full justify-between  px-2 ">
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
                <div className="flex flex-row w-full h-full gap-2">
                    <Link
                        href={`/category/${homePage?.Sections[0].refrence?.slug?.current}`}
                    >
                        <div className="md:w-[45%] w-[55%] cursor-pointer h-full flex flex-col bg-blue-600 relative  ">
                            <img
                                src={urlFor(
                                    homePage?.Sections[0]?.image?.image
                                )}
                                className="w-full h-full object-contain"
                            />
                            <div className="text-clack lg:w-[70%] text-center  w-[90%] h-fit border border-black md:py-8 py-2  bg-white/90  absolute left-0 top-0 bottom-0 right-0 m-auto ">
                                {' '}
                                <h1 className="lg:text-4xl md:text-xl text-md font-[500] ">
                                    {homePage?.Sections[0]?.title}
                                </h1>
                                <p className="  w-full text-sm  ">
                                    + {numberOfProducts0} produits differents
                                </p>
                            </div>
                        </div>
                    </Link>
                    <div className=" flex flex-col md:w-[32%] w-[45%] gap-2  ">
                        <Link
                            href={`/category/${homePage?.Sections[1].refrence?.slug?.current}`}
                        >
                            <div className="w-full h-full cursor-pointer relative ">
                                <img
                                    src={urlFor(
                                        homePage?.Sections[1]?.image?.image
                                    )}
                                    className="w-full h-full  object-cover"
                                />
                                <div className="text-clack lg:w-[70%] text-center  w-[90%] h-fit py-2 bg-white/90  text-xs absolute left-0 top-0 bottom-0 right-0 m-auto ">
                                    {' '}
                                    <h1 className="lg:text-2xl md:text-md text-md font-[500] mb-0pb-0 ">
                                        {homePage?.Sections[1]?.title}
                                    </h1>
                                    <p className="  w-full text-[10px] mt-0 pt-0 ">
                                        {' '}
                                        + {numberOfProducts1} produits
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href={`/category/${homePage?.Sections[2].refrence?.slug?.current}`}
                        >
                            <div className="w-full flex cursor-pointer relative ">
                                {' '}
                                <img
                                    src={urlFor(
                                        homePage?.Sections[2]?.image?.image
                                    )}
                                    className="w-full  object-cover"
                                />
                                <div className="text-clack lg:w-[70%] text-center  w-[90%] h-fit py-2 px-4 bg-white/90  absolute left-0 top-0 bottom-0 right-0 m-auto ">
                                    {' '}
                                    <h1 className="lg:text-2xl md:text-md text-md font-[500] ">
                                        {homePage?.Sections[2]?.title}
                                    </h1>
                                    <p className="  w-full text-sm  ">
                                        {' '}
                                        + {numberOfProducts2} produits
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="hidden md:flex  flex-col w-[30%] gap-2">
                        <Link
                            href={`/category/${homePage?.Sections[3].refrence?.slug?.current}`}
                        >
                            <div className="w-full h-full cursor-pointer relative">
                                <img
                                    src={urlFor(
                                        homePage?.Sections[3]?.image?.image
                                    )}
                                    className="w-full  h-full object-cover"
                                />
                                <div className="text-clack lg:w-[70%] text-center  w-[90%] h-fit py-2 px-4 bg-white/90  absolute left-0 top-0 bottom-0 right-0 m-auto ">
                                    {' '}
                                    <h1 className="lg:text-2xl md:text-md text-md font-[500] ">
                                        {homePage?.Sections[3]?.title}
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
                                        homePage?.Sections[4]?.image?.image
                                    )}
                                    className="w-full h-full object-cover"
                                />
                                <div className="text-clack lg:w-[70%] text-center  w-[90%] h-fit py-2 px-4 bg-white/90  absolute left-0 top-0 bottom-0 right-0 m-auto ">
                                    {' '}
                                    <h1 className="lg:text-2xl md:text-md text-md font-[500] ">
                                        {homePage?.Sections[4]?.title}
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
