import React, { useState } from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { TbBrandTiktok } from 'react-icons/tb'
import { ImLocation } from 'react-icons/im'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaFax } from 'react-icons/fa'
import { GoDeviceMobile } from 'react-icons/go'
import { useRouter } from 'next/router'
import { MdOutlineEmail } from 'react-icons/md'
import Link from 'next/link'

export default function Footer({ websiteSettings }) {
    //console.log('setting:', websiteSettings)
    const adress = websiteSettings?.contact?.adress
    const phone = websiteSettings?.contact?.phone
    const mobile = websiteSettings?.contact?.mobile
    const fax = websiteSettings?.contact?.fax
    const email = websiteSettings?.contact?.email
    const router = useRouter()

    const [searchValue, setSearchValue] = useState('')
    const onSearch = () => {
        //console.log('onSearch')
        router.push(`/search/${searchValue}`)
    }
    console.log('websiteSettings', websiteSettings)
    console.log(websiteSettings?.categories?.categorie1?.slug)
    console.log(websiteSettings?.categories?.categorie2?.title)
    return (
        <div className=" pb-8 h-full bg-[#FFF8ED] flex flex-col self-end w-full-screen">
            <div>
                <section className="  py-4   text-[#424242] bg-red-700 ">
                    <div className="lg:max-w-[80%] max-w-[90%] md:max-w-2xl sm:max-w-[90%] lg:px-0 px-2 mx-auto  flex justify-between">
                        <p className="text-sm text-[#FEDFB6]">
                            Connectez-vous avec nous sur les réseaux sociaux :
                        </p>
                        <div className="flex items-center">
                            <Link href={websiteSettings?.media?.facebook}>
                                <AiFillFacebook className="mx-1 text-2xl cursor-pointer text-orange-100" />
                            </Link>
                            <Link href={websiteSettings?.media?.instagram}>
                                <BsInstagram className="mx-1 text-xl cursor-pointer text-orange-100" />
                            </Link>
                            <Link href={websiteSettings?.media?.instagram}>
                                <TbBrandTiktok className="mx-1 text-2xl cursor-pointer text-orange-100" />
                            </Link>
                        </div>
                    </div>
                </section>
                <section
                    id="footer search"
                    className="flex-col flex px-4  md:px-0 md:py-2 lg:flex-row lg:flex lg:justify-between lg:max-w-[80%] max-w-[90%] md:max-w-2xl sm:max-w-[90%] md:py-6 mx-auto  w-screen"
                >
                    <section className=" lg:px-2  flex flex-col  px-6 text-[#424242] ">
                        <p className="   pt-4 pb-2 my-2   lg:w-[204px] lg:py-2 uppercase  text-xs border-b-2 border-red-700 border-0">
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
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    onSearch()
                                }
                            }}
                        />
                        <button
                            onClick={() => onSearch()}
                            className="max-w-sm grid self-center content-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-[50px] bg-red-700 text-[#F5F5F5] text-sm rounded-lg focus:ring-red-700 focus:border-red-500 block w-full p-2.5"
                        >
                            Recherche
                        </button>
                    </section>
                    <section
                        className="
                     w-full px-6 flex flex-col justify-between text-[#424242]"
                    >
                        <p className="pt-6 pb-2 my-4 lg:my-2     lg:py-2 uppercase  text-xs border-b-2 border-red-700 border-0">
                            Nos produit
                        </p>
                        {websiteSettings?.categories && (
                            <div className="flex flex-col  h-full pt-6 text-md flex flex-col justify-between">
                                {' '}
                                <Link
                                    href={`/category/${websiteSettings?.categories?.categorie1?.slug?.current}`}
                                    key={'jdv'}
                                    className="uppercase text-[#424242]  text-[11px] my-2   lg:w-[204px] cursor-pointer hover:font-bold"
                                >
                                    {
                                        websiteSettings?.categories?.categorie1
                                            ?.title
                                    }
                                </Link>
                                <Link
                                    href={`/category/${websiteSettings?.categories?.categorie2?.slug?.current}`}
                                    className="uppercase text-[#424242]  text-[11px] my-2   lg:w-[204px] cursor-pointer hover:font-bold"
                                >
                                    {
                                        websiteSettings?.categories?.categorie2
                                            ?.title
                                    }
                                </Link>
                                <Link
                                    href={`/category/${websiteSettings?.categories?.categorie3?.slug?.current}`}
                                    className="uppercase text-[#424242]  text-[11px] my-2   lg:w-[204px] cursor-pointer hover:font-bold"
                                >
                                    {
                                        websiteSettings?.categories?.categorie3
                                            ?.title
                                    }
                                </Link>
                            </div>
                        )}
                    </section>
                    <section className=" w-full px-6 uppercase text-[11px] text-[#424242] text-xs  ">
                        <p className=" pt-6 pb-2 my-4 lg:my-2    lg:py-2 uppercase  text-xs border-b-2 border-red-700 border-0">
                            Contact
                        </p>
                        <div className="flex items-center md:pt-2 md:py-0 py-3 pt-0  ">
                            <ImLocation className="text-lg mr-1" />
                            {adress}
                        </div>
                        <div className="flex items-center md:pt-2 md:py-0 py-3 pt-0">
                            <BsTelephoneFill className="text-lg mr-1" />
                            {phone}
                        </div>
                        <div className="flex items-center  md:pt-2 md:py-0 py-3 pt-0">
                            <GoDeviceMobile className="text-lg mr-1" />
                            {mobile}
                        </div>
                        <div className="flex items-center md:pt-2 md:py-0 py-3 pt-0">
                            <FaFax className="text-lg mr-1" />
                            {fax}
                        </div>
                        <div className="flex items-center md:pt-2 md:py-0 py-3 pt-0">
                            <MdOutlineEmail className="text-xl mr-1" />
                            {email}
                        </div>
                    </section>
                </section>
            </div>
        </div>
    )
}
