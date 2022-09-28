import React from 'react'
import { urlFor } from '../lib/sanity'
import { FaSearch } from 'react-icons/fa'
import { RiShoppingCart2Fill } from 'react-icons/ri'
import { IoMdMenu } from 'react-icons/io'

export default function Header({ websiteSettings }) {
    const logo = websiteSettings?.logo?.logo
    const alt = websiteSettings?.logo?.caption
    console.log('setting:', websiteSettings)
    return (
        <div className=" font-raleway h-24  grid content-around  border border-b-red">
            <div className=" px-2 text-gray  h-20 w-screen max-w-5xl  mx-auto  flex flex-row  justify-between  ">
                <div className="flex flex-row ">
                    {logo && (
                        <img
                            src={urlFor(logo).height(200)}
                            alt={alt}
                            className="mr-4 hover:cursor-pointer"
                        />
                    )}

                    <div className="hidden text-sm md:grid sm:content-end sm:px-4 sm:py-2 hover:cursor-pointer hover:border-b-2 hover:border-red  hover:text-red ">
                        ACCEUIL
                    </div>
                    <div className="hidden  text-sm md:grid content-end px-4 py-2 hover:cursor-pointer hover:border-b-2 hover:border-red hover:text-red  ">
                        ENTREPRISE
                    </div>
                    <div className="hidden text-sm  md:grid content-end px-4 py-2 hover:cursor-pointer hover:border-b-2 hover:border-red hover:text-red ">
                        NOS PRODUITS
                    </div>
                    <div className="hidden text-sm md:grid content-end px-4 py-2 hover:cursor-pointer hover:border-b-2 hover:border-red hover:text-red  ">
                        CONTACT
                    </div>
                </div>
                <div className="hidden  h-11  md:flex flex-row items-center self-end">
                    <input
                        type="text"
                        className="w-48  h-11 focus:outline-none placeholder:text-xs border-b-2 border-red"
                        placeholder="RECHERCHE UN PRODUIT..."
                    />
                    <FaSearch className="text-xl mr-8 ml-2 hover:cursor-pointer hover:text-red " />
                    <RiShoppingCart2Fill className="text-xl  hover:cursor-pointer hover:text-red  " />
                </div>
                <div className="md:hidden bg-white flex items-center mr-4 text-4xl hover:cursor-pointer">
                    <IoMdMenu />
                </div>
            </div>
        </div>
    )
}
