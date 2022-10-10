import { fromJSON } from 'postcss'
import { useState } from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import { client, urlFor } from '../../lib/sanity'

export default function Product({ subCategory, categories, websiteSettings }) {
    const products = subCategory?.products
    console.log('subcategory', subCategory)
    console.log('products', products)

    const [isSelected, setIsSelected] = useState(false)
    return (
        <div className="h-full bg-[#FFF8ED] min-h-screen w-screen flex flex-col justify-between ">
            <Header websiteSettings={websiteSettings} categories={categories} />
            <div className=" uppercase  max-w-5xl bg-red-100 w-full flex flex-col items-center mx-auto py-8 h-full  ">
                <p className="w-full text-[11px]">
                    Nos produits/ Category/Subcategory/ Produit
                </p>
                <div className="w-full flex flex-col border border-grey-400 py-6 px-4">
                    <div>retour</div>
                    <div className="w-full flex   ">
                        <img
                            src="/testimg.png"
                            className=" flex  p-4  border-r"
                        />
                        <div className=" flex bg-red-200 w-full p-4 flex-col">
                            <p>Pot bodega sans couvercle</p>
                            <p>goblets et pots</p>
                            <p>selectionnez la taille:</p>
                            <div>
                                <div className="bg-red-700 flex fex-row py-2 ">
                                    <div className="w-6 h-6 flex-1 flex justify-center bg-red-100 ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                                            />
                                        </svg>
                                    </div>
                                    <div className="w-6 h-6 flex-1 flex justify-center ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.745 3A23.933 23.933 0 003 12c0 3.183.62 6.22 1.745 9M19.5 3c.967 2.78 1.5 5.817 1.5 9s-.533 6.22-1.5 9M8.25 8.885l1.444-.89a.75.75 0 011.105.402l2.402 7.206a.75.75 0 001.104.401l1.445-.889m-8.25.75l.213.09a1.687 1.687 0 002.062-.617l4.45-6.676a1.688 1.688 0 012.062-.618l.213.09"
                                            />
                                        </svg>
                                    </div>
                                    <div className="w-6 h-6 flex-1 bg-red-100 flex justify-center ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="black"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    onClick={() => setIsSelected(!isSelected)}
                                    className={` flex fex-row py-2 ${
                                        isSelected ? 'bg-black' : 'bg-grey-100'
                                    }`}
                                >
                                    <div className="flex-1 flex text-[15px] text-red-700 font-bold justify-center ">
                                        050cplc14
                                    </div>
                                    <div className="flex-1 flex text-red-700 lowercase justify-center">
                                        14oz - 38,5cl
                                    </div>
                                    <div
                                        className={`flex-1 flex text-[15px] font-bold justify-center ${
                                            isSelected
                                                ? 'text-white'
                                                : 'text-black'
                                        } `}
                                    >
                                        1000pcs-1pqt
                                    </div>
                                </div>
                                <div
                                    onClick={() => setIsSelected(!isSelected)}
                                    className={` flex fex-row py-2 ${
                                        isSelected ? 'bg-black' : 'bg-grey-100'
                                    }`}
                                >
                                    <div className="flex-1 flex text-[15px] text-red-700 font-bold justify-center ">
                                        050cplc14
                                    </div>
                                    <div className="flex-1 flex text-red-700 lowercase justify-center">
                                        14oz - 38,5cl
                                    </div>
                                    <div
                                        className={`flex-1 flex text-[15px] font-bold justify-center ${
                                            isSelected
                                                ? 'text-white'
                                                : 'text-black'
                                        } `}
                                    >
                                        1000pcs-1pqt
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen">
                <Footer websiteSettings={websiteSettings} />
            </div>
        </div>
    )
}
