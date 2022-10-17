import React from 'react'
import { urlFor } from '../lib/sanity'
import { motion } from 'framer-motion'

export default function Accueil({ homePage }) {
    console.log('homePage', homePage)
    return (
        <div>
            {' '}
            <div className="my-8 max-w-4xl mx-auto  ">
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
                            <img
                                src={urlFor(section?.image?.image)}
                                className="h-[500px] object-cover w-full"
                            />
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
                                    <p className="bg-red-700 w-full pb-6 pt-12 px-6 uppercase text-white text-[15px] text-opacity-90">
                                        <a
                                            href="wwww.facebook.com"
                                            className="hover:underline"
                                        >
                                            En savoir plus
                                        </a>
                                    </p>
                                    <p className=" px-6 py-6 uppercase text-white text-[10px] text-opacity-90">
                                        Découvrir +{numberOfProducts} differents
                                        produits
                                    </p>
                                </motion.div>
                            </motion.div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
