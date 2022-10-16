import React, { useState } from 'react'
import { urlFor } from '../lib/sanity'
import { FaSearch } from 'react-icons/fa'
import { RiShoppingCart2Fill, RiArrowDropDownLine } from 'react-icons/ri'
import { IoMdMenu } from 'react-icons/io'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function Header({ websiteSettings, categories }) {
    const [isOpen, setIsOpen] = useState(false)
    const logo = websiteSettings?.logo?.image
    const alt = websiteSettings?.logo?.caption
    const [clicked, setClicked] = useState(false)
    const [openCategories, setOpenCategories] = useState([])

    return (
        <div>
            <div className=" font-raleway h-fit pt-2 pb-4 grid content-around  border border-b-red-700">
                <div className=" px-2 text-gray  h-28 w-screen lg:max-w-5xl max-w-[90%] md:max-w-[80%]  mx-auto  flex flex-row  justify-between  ">
                    <div className="flex flex-row ">
                        {logo && (
                            <Link href="/">
                                <img
                                    src={urlFor(logo).height(200)}
                                    alt={alt}
                                    className="self-start lg:mr-4 hover:cursor-pointer object-contain bg-red-100 h-24 my-auto  "
                                />
                            </Link>
                        )}

                        <div className="hidden text-xs font-bold md:grid sm:content-end sm:px-4 sm:py-2 hover:cursor-pointer hover:border-b-2 hover:border-red-700  hover:text-red-700 ">
                            <Link href="/">ACCEUIL</Link>
                        </div>
                        <div
                            className="hidden  text-xs font-bold  md:grid content-end px-4 py-2 hover:cursor-pointer hover:border-b-2 hover:border-red-700
                         hover:text-red-700  "
                        >
                            ENTREPRISE
                        </div>
                        <div
                            className={`relative hidden text-xs font-bold   md:flex md:flex-row  items-end  px-4 py-2 hover:cursor-pointer hover:border-b-2 hover:border-red-700 hover:text-red-700 ${
                                clicked && 'border-b-2 border-red-700'
                            } `}
                        >
                            <div
                                className="md:flex md:flex-row  items-end relative "
                                onClick={() => setClicked(!clicked)}
                            >
                                <p>NOS PRODUITS</p>
                                <RiArrowDropDownLine className="text-xl " />
                            </div>

                            <AnimatePresence>
                                {clicked && (
                                    <motion.div
                                        key="categoryMenu"
                                        initial={{ y: '-20%', opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="z-50 bg-beige flex absolute uppercase text-gray top-[112px] border border-red-700 left-0 min-w-[280px] px-4 py-6  "
                                    >
                                        <ul>
                                            <Link href="/categories">
                                                <p className="hover:text-red-700">
                                                    Tous nos categories
                                                </p>
                                            </Link>

                                            {categories?.map(
                                                (category, index) => {
                                                    return (
                                                        <div
                                                            key={category?._id}
                                                            className=" flex flex-col"
                                                        >
                                                            <div
                                                                onClick={() => {
                                                                    if (
                                                                        !openCategories.includes(
                                                                            index
                                                                        )
                                                                    ) {
                                                                        setOpenCategories(
                                                                            [
                                                                                ...openCategories,
                                                                                index,
                                                                            ]
                                                                        )
                                                                    } else {
                                                                        const newOpenCategories =
                                                                            openCategories.filter(
                                                                                (
                                                                                    item
                                                                                ) =>
                                                                                    item !=
                                                                                    index
                                                                            )

                                                                        setOpenCategories(
                                                                            newOpenCategories
                                                                        )
                                                                    }
                                                                }}
                                                                className="  justify-between items-center py-3 flex flex-row text-[10px] hover:cursor-pointer hover:text-red-700"
                                                            >
                                                                {
                                                                    category?.title
                                                                }
                                                                <RiArrowDropDownLine className="text-xl " />
                                                            </div>
                                                            {openCategories.includes(
                                                                index
                                                            ) && (
                                                                <div>
                                                                    {category.subCategories?.map(
                                                                        (
                                                                            subcategory
                                                                        ) => {
                                                                            return (
                                                                                <Link
                                                                                    href={`/categories/${subcategory?.slug.current}`}
                                                                                >
                                                                                    <li
                                                                                        key={
                                                                                            subcategory?._id
                                                                                        }
                                                                                        className="text-gray py-1 text-[10px]  hover:cursor-pointer hover:text-red-700"
                                                                                    >
                                                                                        -{' '}
                                                                                        {
                                                                                            subcategory?.title
                                                                                        }
                                                                                    </li>
                                                                                </Link>
                                                                            )
                                                                        }
                                                                    )}
                                                                </div>
                                                            )}
                                                        </div>
                                                    )
                                                }
                                            )}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="/contact">
                            <div className="hidden text-xs font-bold  md:grid content-end px-4 py-2 hover:cursor-pointer hover:border-b-2 hover:border-red-700 hover:text-red-700  ">
                                CONTACT
                            </div>
                        </Link>
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
                            className="w-full  h-11  placeholder:text-xs border-b-2 border-b-red-700 border-0 focus:outline-none  focus:border-0"
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
                    <Link href="/contact">
                        <div className="flex items-center  h-16  text-sm py-2 hover:cursor-pointer hover:border-b-2 hover:border-red-700 hover:text-red-700 ">
                            Contact
                        </div>
                    </Link>
                </div>
            )}
        </div>
    )
}
