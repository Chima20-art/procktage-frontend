import React, { useContext, useState } from 'react'
import { urlFor } from '../lib/sanity'
import { FaSearch } from 'react-icons/fa'
import { RiShoppingCart2Fill, RiArrowDropDownLine } from 'react-icons/ri'
import { IoMdMenu } from 'react-icons/io'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import OrdersContext from '../OrdersContext'
import { useRouter } from 'next/router'

export default function Header({ websiteSettings, categories }) {
    const [isOpen, setIsOpen] = useState(false)
    const logo = websiteSettings?.logo?.image
    const alt = websiteSettings?.logo?.caption
    const [clicked, setClicked] = useState(false)
    const [mobileClicked, setMobileClicked] = useState(false)
    const [openCategories, setOpenCategories] = useState([])
    const [openCard, setOpenCard] = useState(false)
    const { cart, removeFromCart } = useContext(OrdersContext)

    const router = useRouter()

    const [searchValue, setSearchValue] = useState('')
    const onSearch = () => {
        //console.log('onSearch')
        router.push(`/search/${searchValue}`)
    }

    return (
        <div>
            {(clicked || openCard) && (
                <div
                    onClick={(e) => {
                        setClicked(false)
                        setOpenCard(false)
                    }}
                    className="w-screen h-screen absolute z-20 top-0 left-0  bg-black bg-opacity-30"
                />
            )}
            <div className=" font-raleway h-fit sm:pt-4 pt-2 pb-4 grid content-around  border-b border-b-red-700">
                <div className="lg:px-2 text-gray text-[10px] md:h-fit w-screen lg:max-w-4xl max-w-[90%] md:max-w-2xl sm:max-w-[90%]  mx-auto  flex flex-row  justify-between  ">
                    <div className="flex flex-row ">
                        {logo && (
                            <Link href="/">
                                <div className=" lg:mr-4 hover:cursor-pointer object-contain   md:h-full  my-auto  md:flex  md:items-end ">
                                    <img
                                        src={urlFor(logo).height(200)}
                                        alt={alt}
                                        className="  w-[60px] lg:w-[70px] lg:h-[73px] h-[65px] "
                                    />
                                </div>
                            </Link>
                        )}

                        <div className="hidden  font-bold sm:grid sm:content-end sm:px-4 sm:py-2 hover:cursor-pointer hover:border-b-2 hover:border-red-700  hover:text-red-700 ">
                            <Link href="/">ACCEUIL</Link>
                        </div>
                        <div
                            className="hidden  font-bold  sm:grid content-end px-4 py-2 hover:cursor-pointer hover:border-b-2 hover:border-red-700
                         hover:text-red-700  "
                        >
                            ENTREPRISE
                        </div>
                        <div
                            className={`relative hidden font-bold   sm:flex sm:flex-row  items-end  px-4 py-2 hover:cursor-pointer hover:border-b-2 hover:border-red-700 hover:text-red-700 ${
                                clicked && 'border-b-2 border-red-700'
                            } `}
                        >
                            <div
                                className="sm:flex sm:flex-row  items-end relative "
                                onClick={() => setClicked(!clicked)}
                            >
                                <p>NOS PRODUITS</p>
                                <RiArrowDropDownLine className="text-xl " />
                            </div>

                            <AnimatePresence>
                                {clicked && (
                                    <motion.div
                                        key="categoryMenu"
                                        initial={{ y: '-20%', opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="z-50 bg-beige flex absolute uppercase text-gray top-[112px] border border-red-700 left-0 min-w-[280px] px-4 py-6  "
                                    >
                                        <ul>
                                            <Link href="/categories">
                                                <p className="hover:text-red-700">
                                                    Tous nos categories
                                                </p>
                                            </Link>

                                            {categories?.map(
                                                (category, index) => {
                                                    return (
                                                        <div
                                                            key={category?._id}
                                                            className=" flex flex-col"
                                                        >
                                                            <div
                                                                onClick={() => {
                                                                    if (
                                                                        !openCategories.includes(
                                                                            index
                                                                        )
                                                                    ) {
                                                                        setOpenCategories(
                                                                            [
                                                                                ...openCategories,
                                                                                index,
                                                                            ]
                                                                        )
                                                                    } else {
                                                                        const newOpenCategories =
                                                                            openCategories.filter(
                                                                                (
                                                                                    item
                                                                                ) =>
                                                                                    item !=
                                                                                    index
                                                                            )

                                                                        setOpenCategories(
                                                                            newOpenCategories
                                                                        )
                                                                    }
                                                                }}
                                                                className="  justify-between items-center py-3 flex flex-row text-[10px] hover:cursor-pointer hover:text-red-700"
                                                            >
                                                                {
                                                                    category?.title
                                                                }
                                                                <RiArrowDropDownLine className="text-xl " />
                                                            </div>
                                                            {openCategories.includes(
                                                                index
                                                            ) && (
                                                                <div>
                                                                    {category.subCategories?.map(
                                                                        (
                                                                            subcategory
                                                                        ) => {
                                                                            return (
                                                                                <Link
                                                                                    href={`/categories/${subcategory?.slug.current}`}
                                                                                >
                                                                                    <li
                                                                                        key={
                                                                                            subcategory?._id
                                                                                        }
                                                                                        className="text-gray py-1 text-[10px]  hover:cursor-pointer hover:text-red-700"
                                                                                    >
                                                                                        -{' '}
                                                                                        {
                                                                                            subcategory?.title
                                                                                        }
                                                                                    </li>
                                                                                </Link>
                                                                            )
                                                                        }
                                                                    )}
                                                                </div>
                                                            )}
                                                        </div>
                                                    )
                                                }
                                            )}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="/contact">
                            <div className="hidden  font-bold  sm:grid content-end px-4 py-2 hover:cursor-pointer hover:border-b-2 hover:border-red-700 hover:text-red-700  ">
                                CONTACT
                            </div>
                        </Link>
                    </div>
                    <div className="hidden   relative h-11  md:flex flex-row items-center self-end">
                        <input
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    onSearch()
                                }
                            }}
                            type="text"
                            className="w-40  h-11 focus:outline-none focus:border-0 placeholder:text-[10px] border-0 border-b-2 border-red-700"
                            placeholder="RECHERCHE UN PRODUIT..."
                        />
                        <FaSearch
                            onClick={() => onSearch()}
                            className="text-[18px] mr-8 ml-2 hover:cursor-pointer hover:text-red-700 "
                        />

                        <div className=" relative flex flex-col">
                            <RiShoppingCart2Fill
                                onClick={() => setOpenCard(!openCard)}
                                className="text-[18px] hover:cursor-pointer hover:text-red-700  "
                            ></RiShoppingCart2Fill>
                            <AnimatePresence>
                                {openCard && (
                                    <div
                                        className="z-50 bg-beige flex  flex-col absolute  uppercase text-gray top-[44px] border border-red-700 right-0 min-w-[280px] px-4 py-4 rounded-b-lg
                                  "
                                    >
                                        <div
                                            className=" absolute border-l-[15px] 
                                border-l-transparent
                                    border-r-[15px] border-r-transparent 
                                    border-b-[15px]   border-red-700
                                    -top-[15px] right-[0px]"
                                        />

                                        <div className="border-b text-[11px] mb-3 pb-2  border-grey-200  ">
                                            Listes des produits demandés
                                        </div>
                                        {cart?.length == 0 ? (
                                            <p className="text-xs normal-case">
                                                Aucun article ajouté
                                            </p>
                                        ) : (
                                            <div>
                                                {' '}
                                                <div className=" border-b border-grey-200 pb-3">
                                                    {cart?.map((cartItem) => {
                                                        return (
                                                            <div className="flex justify-between items-center  text-[9px]   ">
                                                                <img
                                                                    src={urlFor(
                                                                        cartItem
                                                                            ?.product
                                                                            ?.image
                                                                    )}
                                                                    className="w-[35px] h-[35px] border-grey-300 border"
                                                                />
                                                                <div className="  w-full pl-2">
                                                                    <p>
                                                                        {
                                                                            cartItem
                                                                                ?.product
                                                                                ?.title
                                                                        }
                                                                    </p>
                                                                    <p className="text-grey-400">
                                                                        {' '}
                                                                        {
                                                                            cartItem
                                                                                ?.variant
                                                                                ?.reference
                                                                        }
                                                                    </p>
                                                                </div>
                                                                <div
                                                                    onClick={() => {
                                                                        removeFromCart(
                                                                            cartItem
                                                                        )
                                                                    }}
                                                                    className="bg-red-400py-2 w-fit py-3  cursor-pointer "
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                        fill="#b0151e"
                                                                        className="w-6 h-6"
                                                                    >
                                                                        <path
                                                                            fillRule="evenodd"
                                                                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
                                                                            clipRule="evenodd"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <Link href="/demandes">
                                                    <button className=" hover:bg-red-700 hover:text-white py-3 border-red-00 border-2 rounded-[50px] mt-4 text-[10px] text-red-700 uppercase mx-auto px-12 w-full  ">
                                                        Completer
                                                    </button>
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className=" md:hidden flex mr-4 text-xl sm:items-center items-top pt-2  hover:cursor-pointer">
                        <RiShoppingCart2Fill
                            onClick={() => setOpenCard(!openCard)}
                            className="text-[20px]  mr-4 pt-[2px] "
                        ></RiShoppingCart2Fill>

                        <IoMdMenu
                            className="text-2xl   "
                            onClick={() => setIsOpen(!isOpen)}
                        />
                    </div>
                    <AnimatePresence>
                        {openCard && (
                            <div
                                className="z-50 bg-beige flex  flex-col absolute  uppercase text-gray right-[60px]  top-[55px] sm:top-[84px] sm:right-[70px] md:hidden border border-red-700 l min-w-[280px] px-4 py-4 rounded-b-lg
                                  "
                            >
                                <div
                                    className=" absolute border-l-[15px] 
                                border-l-transparent
                                    border-r-[15px] border-r-transparent 
                                    border-b-[15px]   border-red-700
                                    -top-[15px] right-[0px]"
                                />

                                <div className="border-b text-[11px] mb-3 pb-2  border-grey-200  ">
                                    Listes des produits demandés
                                </div>
                                {cart?.length == 0 ? (
                                    <p className="text-xs normal-case">
                                        Aucun article ajouté
                                    </p>
                                ) : (
                                    <div>
                                        {' '}
                                        <div className=" border-b border-grey-200 pb-3">
                                            {cart?.map((cartItem) => {
                                                return (
                                                    <div className="flex justify-between items-center  text-[9px]   ">
                                                        <img
                                                            src={urlFor(
                                                                cartItem
                                                                    ?.product
                                                                    ?.image
                                                            )}
                                                            className="w-[35px] h-[35px] border-grey-300 border"
                                                        />
                                                        <div className="  w-full pl-2">
                                                            <p>
                                                                {
                                                                    cartItem
                                                                        ?.product
                                                                        ?.title
                                                                }
                                                            </p>
                                                            <p className="text-grey-400">
                                                                {' '}
                                                                {
                                                                    cartItem
                                                                        ?.variant
                                                                        ?.reference
                                                                }
                                                            </p>
                                                        </div>
                                                        <div
                                                            onClick={() => {
                                                                removeFromCart(
                                                                    cartItem
                                                                )
                                                            }}
                                                            className="bg-red-400py-2 w-fit py-3  cursor-pointer "
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                                fill="#b0151e"
                                                                className="w-6 h-6"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <Link href="/demandes">
                                            <button className=" hover:bg-red-700 hover:text-white py-3 border-red-00 border-2 rounded-[50px] mt-4 text-[10px] text-red-700 uppercase mx-auto px-12 w-full  ">
                                                Completer
                                            </button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        )}
                    </AnimatePresence>
                </div>
                {isOpen && (
                    <div className="md:hidden text-[10px] pb-4  top-[20px] px-6 flex flex-col z-1000 ">
                        <div className="w-full mt-2 py-4  font-bold hover:cursor-pointer   hover:text-red-700 ">
                            <Link href="/">ACCEUIL</Link>
                        </div>
                        <div className="w-full mt-2 py-4   font-bold hover:cursor-pointer   hover:text-red-700 ">
                            ENTREPRISE
                        </div>
                        <div
                            className={'relative   font-bold flex flex-col   '}
                        >
                            <div
                                className="w-full mt-2 py-4 flex font-bold hover:cursor-pointer  items-center  hover:text-red-700 "
                                onClick={() => setMobileClicked(!mobileClicked)}
                            >
                                <p>NOS PRODUITS</p>
                                <RiArrowDropDownLine className="text-xl " />
                            </div>
                            <div>
                                {' '}
                                <AnimatePresence>
                                    {mobileClicked && (
                                        <motion.div
                                            key="categoryMenu"
                                            initial={{ y: '-20%', opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="  flex  text-[10px] uppercase text-gray top-[100%]  left-0 w-full px-4 py-0  "
                                        >
                                            <ul>
                                                <Link href="/categories">
                                                    <p className="hover:text-red-700 pt-2">
                                                        Tous nos categories
                                                    </p>
                                                </Link>
                                                {categories?.map(
                                                    (category, index) => {
                                                        return (
                                                            <div
                                                                key={
                                                                    category?._id
                                                                }
                                                                className=" flex flex-col"
                                                            >
                                                                <div
                                                                    onClick={() => {
                                                                        if (
                                                                            !openCategories.includes(
                                                                                index
                                                                            )
                                                                        ) {
                                                                            setOpenCategories(
                                                                                [
                                                                                    ...openCategories,
                                                                                    index,
                                                                                ]
                                                                            )
                                                                        } else {
                                                                            const newOpenCategories =
                                                                                openCategories.filter(
                                                                                    (
                                                                                        item
                                                                                    ) =>
                                                                                        item !=
                                                                                        index
                                                                                )

                                                                            setOpenCategories(
                                                                                newOpenCategories
                                                                            )
                                                                        }
                                                                    }}
                                                                    className="  justify-between items-center pt-4 py-2 flex flex-row text-[10px] hover:cursor-pointer hover:text-red-700"
                                                                >
                                                                    {
                                                                        category?.title
                                                                    }
                                                                    <RiArrowDropDownLine className="text-xl " />
                                                                </div>
                                                                {openCategories.includes(
                                                                    index
                                                                ) && (
                                                                    <div>
                                                                        {category.subCategories?.map(
                                                                            (
                                                                                subcategory
                                                                            ) => {
                                                                                return (
                                                                                    <Link
                                                                                        href={`/categories/${subcategory?.slug.current}`}
                                                                                    >
                                                                                        <li
                                                                                            key={
                                                                                                subcategory?._id
                                                                                            }
                                                                                            className="text-gray py-2 text-[10px]  hover:cursor-pointer hover:text-red-700"
                                                                                        >
                                                                                            -{' '}
                                                                                            {
                                                                                                subcategory?.title
                                                                                            }
                                                                                        </li>
                                                                                    </Link>
                                                                                )
                                                                            }
                                                                        )}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )
                                                    }
                                                )}
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        <Link href="/contact">
                            <div className="w-full mt-2 py-4    font-bold hover:cursor-pointer   hover:text-red-700 ">
                                CONTACT
                            </div>
                        </Link>
                        <div className=" flex h-16 items-center  ">
                            <FaSearch
                                onClick={() => onSearch()}
                                className="mr-2 text-[16px] text-gray flex  self-center hover:cursor-pointer hover:text-red-700 "
                            />

                            <input
                                type="text"
                                className="w-[85%]  h-11  placeholder:text-[10px] border-b-2 border-b-red-700 border-0 focus:outline-none  focus:border-0"
                                placeholder="RECHERCHE UN PRODUIT..."
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        onSearch()
                                    }
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
