import React, { useState } from 'react'
import { urlFor } from '../lib/sanity'
import { FaSearch } from 'react-icons/fa'
import { RiShoppingCart2Fill, RiArrowDropDownLine } from 'react-icons/ri'
import { IoMdMenu } from 'react-icons/io'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header({ websiteSettings }) {
    const [isOpen, setIsOpen] = useState(false)
    const logo = websiteSettings?.logo?.logo
    const alt = websiteSettings?.logo?.caption
    const [clicked, setClicked] = useState(false)

    return (
        <div>
            <div className=" font-raleway h-fit pt-2 pb-4 grid content-around  border border-b-red-700">
                <div className=" px-2 text-gray  h-28 w-screen max-w-5xl  mx-auto  flex flex-row  justify-between  ">
                    <div className="flex flex-row ">
                        {logo && (
                            <img
                                src={urlFor(logo).height(200)}
                                alt={alt}
                                className="self-start lg:mr-4 hover:cursor-pointer object-contain bg-red-100 h-24 my-auto  "
                            />
                        )}

                        <div className="hidden text-xs font-bold md:grid sm:content-end sm:px-4 sm:py-2 hover:cursor-pointer hover:border-b-2 hover:border-red-700  hover:text-red-700 ">
                            ACCEUIL
                        </div>
                        <div
                            className="hidden  text-xs font-bold  md:grid content-end px-4 py-2 hover:cursor-pointer hover:border-b-2 hover:border-red-700
                         hover:text-red-700  "
                        >
                            ENTREPRISE
                        </div>
                        <div
                            onClick={() => setClicked(!clicked)}
                            className=" relative hidden text-xs font-bold   md:flex md:flex-row  items-end  px-4 py-2 hover:cursor-pointer hover:border-b-2 hover:border-red-700 hover:text-red-700 "
                        >
                            <p>NOS PRODUITS</p>
                            <RiArrowDropDownLine className="text-xl " />
                            <AnimatePresence>
                                {clicked && (
                                    <motion.div
                                        key="categoryMenu"
                                        initial={{ y: '-20%', opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="z-50 bg-red-200 flex absolute rounded-md  -bottom-[198px] left-0 min-w-[280px] px-4 py-2 h-48 "
                                    >
                                        dropdown
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="hidden text-xs font-bold  md:grid content-end px-4 py-2 hover:cursor-pointer hover:border-b-2 hover:border-red-700 hover:text-red-700  ">
                            CONTACT
                        </div>
                    </div>
                    <div className="hidden  h-11  md:flex flex-row items-center self-end">
                        <input
                            type="text"
                            className="w-48  h-11 focus:outline-none placeholder:text-xs border-0 border-b-2 border-red-700"
                            placeholder="RECHERCHE UN PRODUIT..."
                        />
                        <FaSearch className="text-xl mr-8 ml-2 hover:cursor-pointer hover:text-red-700 " />
                        <RiShoppingCart2Fill className="text-xl  hover:cursor-pointer hover:text-red-700  " />
                    </div>

                    <div className=" md:hidden flex mr-4 text-3xl items-center  hover:cursor-pointer">
                        <RiShoppingCart2Fill className="text-2xl  mr-4 hover:cursor-pointer " />
                        <IoMdMenu onClick={() => setIsOpen(!isOpen)} />
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden   h-[calc(100vh_-_6rem)] px-6 flex flex-col z-1000">
                    <div className="flex h-16 items-center  ">
                        <FaSearch className="mr-2 text-xl flex  self-center hover:cursor-pointer hover:text-red-700 " />

                        <input
                            type="text"
                            className="w-full  h-11 focus:outline-none placeholder:text-xs border-b-2 border-b-red-700 border-0"
                            placeholder="RECHERCHE UN PRODUIT..."
                        />
                    </div>

                    <div className="flex  items-center  h-16  text-sm  py-2 hover:cursor-pointer hover:border-b-2 hover:border-red-700 hover:text-red-700 ">
                        Accueil
                    </div>
                    <div className="flex  items-center  h-16  text-sm  py-2 hover:cursor-pointer hover:border-b-2 hover:border-red-700 hover:text-red-700 ">
                        Entreprise
                    </div>
                    <div className="flex  items-center  h-16  text-sm py-2 hover:cursor-pointer hover:border-b-2 hover:border-red-700 hover:text-red-700 ">
                        Nos produits
                    </div>
                    <div className="flex  items-center  h-16  text-sm py-2 hover:cursor-pointer hover:border-b-2 hover:border-red-700 hover:text-red-700 ">
                        Contact
                    </div>
                </div>
            )}
        </div>
    )
}
