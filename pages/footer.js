import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { TbBrandTiktok } from 'react-icons/tb'

export default function Footer() {
    return (
        <div className="h-[350px] bg-[#FFF8ED] flex flex-col self-end w-full-screen">
            <section className=" bg-red-700 py-4   ">
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
            <section className="flex flex-rw max-w-5xl py-6 mx-auto bg-red-300 w-screen">
                <div className="bg-red-400   px-6  ">
                    <p className=" uppercase bg-red-200 py-2 text-xs border-b-2 border-red-700 border-0">
                        Recherche un produit
                    </p>
                    <p className="text-[11px] uppercase py-2 flex justify-center text-[#555]">
                        {' '}
                        taper le nom d'article, reference.
                    </p>
                    <input
                        type="text"
                        className=" rounded-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Recherche un produit"
                        required
                    />
                </div>
                <div className="flex-1">produit</div>
                <div className="flex-1">produit</div>
            </section>
        </div>
    )
}
