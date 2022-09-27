import React from 'react'
import { urlFor } from '../lib/sanity'

export default function Header({ websiteSettings }) {
    const logo = websiteSettings?.logo?.logo
    const alt = websiteSettings?.logo?.caption
    return (
        <div className=" font-raleway h-28  grid content-around  border border-b-red">
            <div className="h-20 w-screen max-w-5xl  mx-auto   flex flex-row ">
                {logo && (
                    <img
                        src={urlFor(logo).width(70).height(80)}
                        alt={alt}
                        className="mr-4"
                    />
                )}
                <div>
                    <div className="grid content-end px-4 py-2 hover:cursor-pointer hover:border-b-2 hover:border-red  ">
                        ACCEUIL
                    </div>
                    <div className="grid content-end px-4 py-2 hover:cursor-pointer hover:border-b-2 hover:border-red   ">
                        ENTREPRISE
                    </div>
                    <div className=" grid content-end px-4 py-2 hover:cursor-pointer hover:border-b-2 hover:border-red  ">
                        NOS PRODUITS
                    </div>
                    <div className=" grid content-end px-4 py-2 hover:cursor-pointer hover:border-b-2 hover:border-red   ">
                        CONTACT
                    </div>
                </div>
            </div>
        </div>
    )
}
