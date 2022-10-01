import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { TbBrandTiktok } from 'react-icons/tb'
import { ImLocation } from 'react-icons/im'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaFax } from 'react-icons/fa'
import { GoDeviceMobile } from 'react-icons/go'

import { MdOutlineEmail } from 'react-icons/md'

export default function Footer({ websiteSettings }) {
    console.log('setting:', websiteSettings)
    const adress = websiteSettings?.contact?.adress
    const phone = websiteSettings?.contact?.phone
    const mobile = websiteSettings?.contact?.mobile
    const fax = websiteSettings?.contact?.fax
    const email = websiteSettings?.contact?.email

    return (
        <div className="h-full pb-8 bg-[#FFF8ED] flex flex-col self-end w-full-screen">
            <section className="  py-4   text-[#424242] bg-red-700 ">
                <div className="max-w-5xl lg:px-0 px-2 mx-auto  flex justify-between">
                    <p className="text-sm text-[#FEDFB6]">
                        Connectez-vous avec nous sur les réseaux sociaux :
                    </p>
                    <div className="flex items-center">
                        <AiFillFacebook className="mx-1 text-2xl cursor-pointer" />
                        <BsInstagram className="mx-1 text-xl cursor-pointer" />
                        <TbBrandTiktok className="mx-1 text-2xl cursor-pointer" />
                    </div>
                </div>
            </section>
            <section
                id="footer search"
                className="flex-col flex px-4  md:px-0 md:py-2 md:flex-row md:flex md:justify-between max-w-5xl md:py-6 mx-auto  w-screen"
            >
                <section className=" md:px-2  flex flex-col  px-6 text-[#424242] ">
                    <p className="    pt-4 pb-2 my-2   md:w-[204px] md:py-2 uppercase  text-xs border-b-2 border-red-700 border-0">
                        Recherche un produit
                    </p>
                    <p className="text-[9px] uppercase py-2 flex justify-center text-[#555]">
                        {' '}
                        taper le nom d'article, reference.
                    </p>
                    <input
                        type="text"
                        className="max-w-sm flex self-center text-center shadow-2xl rounded-[50px] my-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                        placeholder="Recherche un produit"
                        required
                    />
                    <button className="max-w-sm grid self-center content-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-[50px] bg-red-700 text-[#F5F5F5] text-sm rounded-lg focus:ring-red-700 focus:border-red-500 block w-full p-2.5">
                        Recherche
                    </button>
                </section>
                <section
                    className="
                     md:px-6 px-6 flex flex-col justify-between text-[#424242]"
                >
                    <p className="pt-4 pb-2 my-4 md:my-2   md:w-[204px] md:py-2 uppercase  text-xs border-b-2 border-red-700 border-0">
                        Nos produit
                    </p>
                    <p className="uppercase text-[#424242]  text-xs my-2   md:w-[204px] cursor-pointer hover:font-bold">
                        emballage alimentaire pour la restauration
                    </p>
                    <p className="uppercase text-[#424242] text-xs my-2   md:w-[204px] cursor-pointer hover:font-bold">
                        emballage recyclable biodégradable
                    </p>
                    <p className="uppercase text-[#424242] text-xs my-2   md:w-[204px] cursor-pointer hover:font-bold">
                        le professionnel de l'hygiène
                    </p>
                </section>
                <section className="  w-fit  px-6 uppercase text-[#424242] text-xs  ">
                    <p className=" pt-4 pb-2 my-4 md:my-2   md:w-[204px] md:py-2 uppercase  text-xs border-b-2 border-red-700 border-0">
                        Contact
                    </p>
                    <div className="flex items-center md:pt-2 md:py-0 py-3 pt-0 ">
                        <ImLocation className="text-lg" />
                        {adress}
                    </div>
                    <div className="flex items-center md:pt-2 md:py-0 py-3 pt-0">
                        <BsTelephoneFill className="text-lg" />
                        {phone}
                    </div>
                    <div className="flex items-center  md:pt-2 md:py-0 py-3 pt-0">
                        <GoDeviceMobile className="text-lg" />
                        {mobile}
                    </div>
                    <div className="flex items-center md:pt-2 md:py-0 py-3 pt-0">
                        <FaFax className="text-lg" />
                        {fax}
                    </div>
                    <div className="flex items-center md:pt-2 md:py-0 py-3 pt-0">
                        <MdOutlineEmail className="text-xl" />
                        {email}
                    </div>
                </section>
            </section>
        </div>
    )
}
