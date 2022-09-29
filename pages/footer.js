import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { TbBrandTiktok } from 'react-icons/tb'
import { ImLocation } from 'react-icons/im'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaFax } from 'react-icons/fa'
import { GoDeviceMobile } from 'react-icons/go'

import { MdOutlineEmail } from 'react-icons/md'

export default function Footer() {
    return (
        <div className="h-[350px] bg-[#FFF8ED] flex flex-col self-end w-full-screen">
            <section className="  py-4   text-[#424242] bg-red-700 ">
                <div className="max-w-5xl  mx-auto  flex justify-between">
                    <p className="text-sm text-[#FEDFB6]">
                        Connectez-vous avec nous sur les réseaux sociaux :
                    </p>
                    <div className="flex items-center">
                        <AiFillFacebook className="mx-1 text-2xl" />
                        <BsInstagram className="mx-1 text-xl" />
                        <TbBrandTiktok className="mx-1 text-2xl" />
                    </div>
                </div>
            </section>
            <section
                id="footer search"
                className="flex flex-rw max-w-5xl py-6 mx-auto  w-screen"
            >
                <section className="   px-6 text-[#424242] ">
                    <p className=" w-[204px] uppercase  py-2 text-xs border-b-2 border-red-700 border-0">
                        Recherche un produit
                    </p>
                    <p className="text-[9px] uppercase py-2 flex justify-center text-[#555]">
                        {' '}
                        taper le nom d'article, reference.
                    </p>
                    <input
                        type="text"
                        className="shadow-2xl rounded-[50px] my-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                        placeholder="Recherche un produit"
                        required
                    />
                    <button className=" shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-[50px] bg-red-700 text-[#F5F5F5] text-sm rounded-lg focus:ring-red-700 focus:border-red-500 block w-full p-2.5">
                        Recherche
                    </button>
                </section>
                <section
                    className="
                 px-6 flex flex-col justify-between text-[#424242]"
                >
                    <p className=" w-[204px]  uppercase  py-2 text-xs border-b-2 border-red-700 border-0">
                        Nos produit
                    </p>
                    <p className="uppercase text-[#424242]  text-xs  w-[204px]">
                        emballage alimentaire pour la restauration
                    </p>
                    <p className="uppercase text-[#424242] text-xs  w-[204px]">
                        emballage recyclable biodégradable
                    </p>
                    <p className="uppercase text-[#424242] text-xs  w-[204px]">
                        le professionnel de l'hygiène
                    </p>
                </section>
                <section className="w-full px-6 uppercase text-[#424242] text-xs ">
                    <p className="   uppercase  py-2 text-xs  border-b-2 border-red-700 border-0">
                        Contact
                    </p>
                    <div className="flex items-center pt-4 pb-1">
                        <ImLocation />
                        104 bis rue mimousa hay erraha casablanca - maroc
                    </div>
                    <div className="flex items-center py-1">
                        <BsTelephoneFill />
                        +212(0)522 95 18 54/522 36 52 72
                    </div>
                    <div className="flex items-center py-1">
                        <GoDeviceMobile />
                        +212(0)661 88 56 19
                    </div>
                    <div className="flex items-center py-1">
                        <FaFax />
                        +212(0)522 36 52 72
                    </div>
                    <div className="flex items-center py-1">
                        <MdOutlineEmail />
                        proxymarket@menara.ma - contact@proxymarketmaroc.com
                    </div>
                </section>
            </section>
        </div>
    )
}
