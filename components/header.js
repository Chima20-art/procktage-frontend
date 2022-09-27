import React from 'react'
import { urlFor } from '../lib/sanity'
import { FaSearch } from 'react-icons/fa'
import { RiShoppingCart2Fill } from 'react-icons/ri'

export default function Header({ websiteSettings }) {
    const logo = websiteSettings?.logo?.logo
    const alt = websiteSettings?.logo?.caption
    return (
        <div className=" font-raleway h-28  grid content-around  border border-b-red">
            <div className=" text-gray  h-20 w-screen max-w-5xl  mx-auto  flex flex-row  justify-between  ">
                <div className="   flex flex-row">
                    {logo && (
                        <img
                            src={urlFor(logo).height(80)}
                            alt={alt}
                            className="mr-4"
                        />
                    )}

                    <div className=" text-sm grid content-end px-4 py-2 hover:cursor-pointer hover:border-b-2 hover:border-red  hover:text-red ">
                        ACCEUIL
                    </div>
                    <div className="text-sm grid content-end px-4 py-2 hover:cursor-pointer hover:border-b-2 hover:border-red hover:text-red  ">
                        ENTREPRISE
                    </div>
                    <div className="text-sm  grid content-end px-4 py-2 hover:cursor-pointer hover:border-b-2 hover:border-red hover:text-red ">
                        NOS PRODUITS
                    </div>
                    <div className="text-sm grid content-end px-4 py-2 hover:cursor-pointer hover:border-b-2 hover:border-red hover:text-red  ">
                        CONTACT
                    </div>
                </div>
                <div className="  h-11  flex flex-row items-center self-end">
                    <input
                        type="text"
                        className="w-48  h-11 focus:outline-none placeholder:text-xs border-b-2 border-red"
                        placeholder="RECHERCHE UN PRODUIT..."
                    />
                    <FaSearch className="text-xl mr-8 ml-2 hover:cursor-pointer hover:text-red " />
                    <RiShoppingCart2Fill className="text-xl  hover:cursor-pointer hover:text-red  " />
                </div>
            </div>
        </div>
    )
}
