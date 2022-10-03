import React from 'react'
import { urlFor } from '../lib/sanity'

export default function Accueil({ homePage }) {
    console.log('homePage', homePage)
    let title = homePage?.Sections?.map((section) => {
        return section.title
    })
    console.log('title:', title)
    return (
        <div>
            {' '}
            <div className="my-8 max-w-4xl mx-auto bg-red-100 ">
                {homePage?.Sections?.map((section, index) => {
                    return (
                        <div
                            key={section?._key}
                            className="h-[500px] relative  "
                        >
                            <img
                                src={urlFor(section?.image?.image)}
                                className="h-[500px] object-cover w-full"
                            />
                            <div
                                className={`absolute flex flex-col justify-between bottom-0 w-full max-h-1/2  md:inset-y-0 md:pt-12 	 ${
                                    index % 2 == 0 ? 'left-0' : 'right-0'
                                } bg-black bg-opacity-50 z-50 md:w-2/5 md:h-full`}
                            >
                                <h1 className="text-[20px] uppercase text-white p-6 leading-10 opacity-90">
                                    {section?.title}
                                </h1>
                                <div>
                                    {' '}
                                    <p className="bg-red-700 w-full pb-6 pt-12 px-6 uppercase text-white text-[15px] text-opacity-90">
                                        <a
                                            href="wwww.facebook.com"
                                            className="hover:underline"
                                        >
                                            En savoir plus
                                        </a>
                                    </p>
                                    <p className=" px-6 py-6 uppercase text-white text-[10px] text-opacity-90">
                                        Découvrir +800 differents produits
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
