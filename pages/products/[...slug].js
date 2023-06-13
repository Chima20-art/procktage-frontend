import Link from 'next/link'
import { useContext, useState } from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import { client, urlFor } from '../../lib/sanity'
import { RiShoppingCart2Fill } from 'react-icons/ri'
import { IoChevronBackCircleSharp } from 'react-icons/io'
import OrdersContext from '../../OrdersContext'
import { uid } from 'uid'
import Slider2 from '../../components/slider3'
import Slider3 from '../../components/slider3'

export default function Product({ product, categories, websiteSettings }) {
    const { addToCart } = useContext(OrdersContext)
    const [count, setCount] = useState(0)
    const [isAlertVisible, setIsAlertVisible] = useState(false)
    const [selectedItem, setSelectedItem] = useState(product.description[0])
    const handleButtonClick = () => {
        setIsAlertVisible(true)
        setTimeout(() => {
            setIsAlertVisible(false)
        }, 800)
    }

    let category = categories?.filter((item) => {
        let isCurrnetCategory = false
        item?.subCategories?.forEach((sub) => {
            if (sub?.slug?.current == product?.Subcategory?.slug?.current) {
                isCurrnetCategory = true
            }
        })
        return isCurrnetCategory
    })

    category = category[0]

    const [isSelected, setIsSelected] = useState(
        product?.description?.length > 0 ? product?.description[0] : {}
    )

    function incrementCount() {
        if (count >= 0) {
            setCount(count + 1)
        }
    }
    function decrementCount() {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const onAddToCart = () => {
        var item = {
            id: uid(32),
            product,
            variant: isSelected,
            count,
        }
        addToCart(item)
        setCount(0)
    }
    let productImages = product?.description?.map((item) => item.image)

    console.log('productImages', productImages)
    return (
        <div className="h-full  min-h-screen w-screen flex flex-col justify-between text-gray ">
            <Header websiteSettings={websiteSettings} categories={categories} />
            <div className=" uppercase lg:max-w-[80%]  sm:max-w-2xl  w-[95%] flex flex-col items-center mx-auto py-8 h-full  ">
                <div className="w-full text-[11px] py-8 flex  ">
                    <Link href="/categories">
                        <p className="hover:font-bold cursor-pointer">
                            tous nos produits
                        </p>
                    </Link>{' '}
                    /{' '}
                    <Link href={`/category/${category?.slug.current}`}>
                        <p className="hover:font-bold cursor-pointer">
                            {category?.title}
                        </p>
                    </Link>{' '}
                    /{' '}
                    <Link
                        href={`/categories/${product?.Subcategory?.slug?.current}`}
                    >
                        <p className="hover:font-bold cursor-pointer">
                            {product?.Subcategory?.title}
                        </p>
                    </Link>
                </div>
                <div className="w-full flex flex-col border border-grey-200 py-6 px-4 ">
                    <Link
                        href={`/categories/${product?.Subcategory?.slug?.current}`}
                    >
                        <a className="lowercase  hover:underline cursor-pointer flex flex-row  w-fit">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="md:w-6 md:h-6 w-6 h-6 self-center mr-1"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <p> retour</p>
                        </a>
                    </Link>

                    <div className="w-full flex  md:flex-row flex-col ">
                        <div className=" md:w-[42%] flex flex-col justify-center items center pr-4 h-[10%] pt-10">
                            <div className="bg-grey-100 my-auto mx-auto max-h-[300px] max-w-[300px]">
                                {(product?.image || selectedItem?.image) && (
                                    <img
                                        src={urlFor(
                                            selectedItem?.image
                                                ? selectedItem?.image
                                                : product?.image
                                        )}
                                        className="transition-all object-contain duration-500 cursor-pointer flex p-4 w-full  "
                                    />
                                )}
                            </div>

                            {product.description.length > 3 ? (
                                <div className="flex flex-row ">
                                    <Slider3
                                        product={product}
                                        setSelectedItem={setSelectedItem}
                                        setIsSelected={setIsSelected}
                                    />
                                </div>
                            ) : (
                                <div className="flex flex-row md:w-[100%] ">
                                    {product?.description?.map(
                                        (item, index) => {
                                            return (
                                                item?.image && (
                                                    <img
                                                        key={index}
                                                        src={urlFor(
                                                            item?.image
                                                        )}
                                                        alt={`Image ${
                                                            index + 1
                                                        }`}
                                                        className={`w-1/${product?.description?.length} h-full p-1 object-cover cursor-pointer hover:opacity-75`}
                                                        onClick={() => {
                                                            setSelectedItem(
                                                                item
                                                            )
                                                            setIsSelected(item)
                                                        }}
                                                    />
                                                )
                                            )
                                        }
                                    )}
                                </div>
                            )}
                        </div>
                        <div className=" flex   w-full md:p-4 py-4 flex-col sm:border-l border-grey-200 md:pl-6 ">
                            <p className="font-bold">{product?.title}</p>
                            <p className="text-[12px] pt-2 pb-4 ">
                                {product?.Subcategory?.title}
                            </p>
                            <p className=" text-[12px] py-1">
                                selectionnez la taille:
                            </p>
                            <div>
                                <div className="bg-red-700 flex fex-row py-3 ">
                                    <div className="w-6 h-6 flex-1 flex justify-center  ">
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
                                            stroke="black"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.745 3A23.933 23.933 0 003 12c0 3.183.62 6.22 1.745 9M19.5 3c.967 2.78 1.5 5.817 1.5 9s-.533 6.22-1.5 9M8.25 8.885l1.444-.89a.75.75 0 011.105.402l2.402 7.206a.75.75 0 001.104.401l1.445-.889m-8.25.75l.213.09a1.687 1.687 0 002.062-.617l4.45-6.676a1.688 1.688 0 012.062-.618l.213.09"
                                            />
                                        </svg>
                                    </div>
                                    <div className="w-6 h-6 flex-1  flex justify-center ">
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
                                {product?.description?.map((item, index) => {
                                    return (
                                        <div
                                            key={item?._key}
                                            onClick={() => {
                                                setSelectedItem(item)
                                                setIsSelected(item)
                                            }}
                                            className={` flex fex-row py-2 cursor-pointer text-[12px] border-b  border-red-200 relative  ${
                                                isSelected?._key == item._key
                                                    ? 'bg-gray static text-white  '
                                                    : 'bg-grey-50 text-red-500 '
                                            }`}
                                        >
                                            <div
                                                className={` ${
                                                    isSelected?._key ==
                                                        item._key &&
                                                    'border-t-[10px] border-t-transparent border-l-[15px] -left-[6px] border-l-red-600 border-b-[10px] border-b-transparent absolute'
                                                }   `}
                                            ></div>
                                            <div className="flex-1 flex font-bold justify-center ">
                                                {item?.reference}
                                            </div>
                                            <div className="flex-1 flex lowercase justify-center">
                                                {item?.sizing}
                                            </div>
                                            <div
                                                className={`flex-1 flex  font-bold justify-center ${
                                                    isSelected?._key ==
                                                    item._key
                                                        ? 'text-white'
                                                        : 'text-black'
                                                } `}
                                            >
                                                {item?.quantite}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className=" text-[11px] mt-6 md:w-full w-fit mx-auto max-sm:text-center">
                                Quantite (Pqt):minimum pqt{' '}
                            </div>
                            <div className="flex md:justify-start justify-center md:mt-0  mt-2">
                                <div
                                    onClick={decrementCount}
                                    className="bg-gray cursor-pointer text-white text-3xl h-fit my-auto  w-[28px] flex flex-col justify-center items-center rounded-[2px] "
                                >
                                    -
                                </div>
                                <div className=" m-1 flex w-[100px] rounded-[50px] px-[10px] py-[10px] bg-grey-100 ">
                                    {count}
                                </div>

                                <div
                                    onClick={incrementCount}
                                    className="bg-gray cursor-pointer text-white text-3xl h-fit my-auto  w-[28px] flex flex-col  justify-center items-center rounded-[2px] "
                                >
                                    +
                                </div>
                            </div>
                            <div className="flex items-center md:justify-start justify-center mt-12 gap-4">
                                <button
                                    onClick={() => {
                                        onAddToCart()
                                        handleButtonClick()
                                    }}
                                    className="  bg-red-700 flex w-fit items-center cursor-pointer py-[18px] px-[25px] rounded-[50px] text-[12px] text-white hover:bg-gray"
                                >
                                    <RiShoppingCart2Fill className=" mx-2 text-xl" />{' '}
                                    ajouter au panier
                                </button>
                                {isAlertVisible && (
                                    <div className="flex text-[10px] items-center w-fit text-black">
                                        {' '}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <p>le produit a ete ajoute au panier</p>
                                    </div>
                                )}
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

export async function getStaticPaths() {
    const products = await client.fetch(
        `*[_type == 'product' && !(_id in path("drafts.**"))  ]{ Subcategory->{ slug }, slug }`,
        {}
    )
    let paths = products.map((item, index) => {
        return {
            params: {
                slug: [item.Subcategory.slug.current, item.slug.current],
            },
        }
    })

    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps(context) {
    const slug = context?.params?.slug

    let productSlug = slug[slug?.length - 1]
    // productSlug =

    let prodcutQuery = `*[_type == 'product'  && slug.current == '${productSlug}' &&  !(_id in path("drafts.**"))  ][0]{ 
        Subcategory->{title,slug,category},
         _id,
         description,
        image, 
        reference,
        slug,
        title
     }`
    let product = await client.fetch(prodcutQuery, {})

    let websiteSettings = await client.fetch(
        `*[_id == 'settings'][0]{
        categories{
            categorie1->,
            categorie2->,
            categorie3->
        },
        contact,
        logo,
        media,
        seo,
    }`,
        {}
    )
    let categories = await client.fetch(
        `*[_type == 'category'  && !(_id in path("drafts.**"))]{
          _id,
          title,
          slug,
           subCategories[]->{
                title,
                _id,
                image,
                slug,
                "count":count(*[ _type=='product'  && !(_id in path("drafts.**")) && references(^._id)])
              }
        }`
    )
    console.log('prodcutQuery: ', product)

    return {
        props: {
            product,
            categories,
            websiteSettings,
        },
    }
}
