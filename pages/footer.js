import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { TbBrandTiktok } from 'react-icons/tb'

export default function Footer() {
    return (
        <div className="h-[350px] bg-[#FFF8ED] flex flex-col self-end w-full-screen">
            <div className=" bg-red-700 py-4   ">
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
            </div>
        </div>
    )
}
