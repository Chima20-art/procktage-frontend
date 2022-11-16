import React from 'react'
import { urlFor } from '../lib/sanity'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Accueil({ homePage }) {
    //console.log('homePage', homePage)
    return (
        <div>
            {' '}
            <div className="my-8  lg:max-w-4xl md:max-w-2xl sm:max-w-[95%] mx-auto overflow-hidden ">
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
                {homePage?.Sections?.map((section, index) => {
                    let numberOfProducts = 0
                    section?.refrence?.subCategories?.forEach((item) => {
                        numberOfProducts =
                            numberOfProducts + (item?.count ? item?.count : 0)
                    })

                    return (
                        <div
                            key={section?._key}
                            className="h-[500px] relative  "
                        >
                            {section?.image?.image && (
                                <img
                                    src={urlFor(section?.image?.image)}
                                    className="h-[500px] object-cover w-full"
                                />
                            )}
                            <motion.div
                                initial={{ x: index % 2 == 0 ? '40%' : '-40%' }}
                                animate={{ x: 0 }}
                                transition={{ duration: 1, delay: 0.1 }}
                                className={`absolute flex flex-col justify-between bottom-0 w-full max-h-1/2  md:inset-y-0 md:pt-12 	 ${
                                    index % 2 == 0 ? 'left-0' : 'right-0'
                                } bg-black bg-opacity-40 z-20 md:w-2/5 md:h-full`}
                            >
                                <motion.h1
                                    initial={{
                                        x: index % 2 == 0 ? '15%' : '-15%',
                                    }}
                                    animate={{ x: 0 }}
                                    transition={{ duration: 1, delay: 0.1 }}
                                    className="text-[20px] uppercase text-white p-6 leading-10 opacity-90"
                                >
                                    {section?.title}
                                </motion.h1>
                                <motion.div
                                    initial={{
                                        x: index % 2 == 0 ? '15%' : '-15%',
                                    }}
                                    animate={{ x: 0 }}
                                    transition={{ duration: 1, delay: 0.1 }}
                                >
                                    {' '}
                                    <div className="bg-red-700 w-full pb-6 pt-12 px-6 uppercase text-white text-[15px] text-opacity-90">
                                        <Link
                                            href={`/category/${section?.refrence?.slug?.current}`}
                                        >
                                            <p className="hover:underline hover:cursor-pointer">
                                                {' '}
                                                En savoir plus
                                            </p>
                                        </Link>
                                    </div>
                                    <p className=" px-6 py-6 uppercase text-white text-[10px] text-opacity-90">
                                        Découvrir +{numberOfProducts} differents
                                        produits
                                    </p>
                                </motion.div>
                            </motion.div>
                        </div>
                    )
                })}
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
