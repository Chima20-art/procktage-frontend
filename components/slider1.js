import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { urlFor } from '../lib/sanity'
import { useState } from 'react'
import Link from 'next/link'

export default function Slider1({ products, reversedSections }) {
    const [swiperRef, setSwiperRef] = useState()

    //console.log('products', products)
    console.log('reversedSections in SLider', reversedSections)

    const handlePrevious = () => {
        swiperRef?.slidePrev()
    }

    const handleNext = () => {
        swiperRef?.slideNext()
    }

    return (
        <div className="relative w-[85%] mx-auto md:w-full  h-full ">
            <AiOutlineArrowLeft
                onClick={handlePrevious}
                src="/left.svg"
                color="#fff"
                size="24px"
                className="md:w-[28px] bg-black/40 md:h-[28px]  absolute  left-0  md:-left-12 z-50 md:top-[50%] top-[45%] transform -translate-y-1/2 hover:scale-105 hover:cursor-pointer"
            />
            <AiOutlineArrowRight
                onClick={handleNext}
                src="/left.svg"
                color="#fff"
                size="24px"
                className="md:w-[28px] bg-black/40 md:h-[28px]  absolute right-2 md:-right-12 z-20 md:top-1/2 top-[45%]  transform -translate-y-1/2 hover:scale-105 hover:cursor-pointer"
            />

            <Swiper
                onSwiper={setSwiperRef}
                modules={[Autoplay]}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: true,
                }}
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    900: {
                        slidesPerView: 3,
                    },

                    1100: {
                        slidesPerView: 4,
                    },
                }}
                spaceBetween={24}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                className=" w-full h-full  "
                loop={true}
            >
                {products?.map((product, index) => {
                    return (
                        <SwiperSlide className=" " key={index}>
                            <div className=" flex flex-col flex-1 mx-auto h-full">
                                <Link
                                    href={
                                        '/products/' +
                                        product.Subcategory.slug.current +
                                        '/' +
                                        product.slug.current
                                    }
                                >
                                    <div className="flex-1  bg-[#F7F7F7] p-10 py-20 flex items-center justify-center  mb-[35px] hover:cursor-pointer">
                                        <img
                                            src={urlFor(product?.image)}
                                            className="object-contain w-full  "
                                        />
                                    </div>
                                </Link>
                                <div className="  ">
                                    <Link
                                        href={
                                            '/categories/' +
                                            product.Subcategory.slug.current
                                        }
                                    >
                                        <p className="text-[14px] text-[#777777] mb-[6px] hover:cursor-pointer  ">
                                            {product.Subcategory.title}
                                        </p>
                                    </Link>
                                    <Link
                                        href={
                                            '/products/' +
                                            product.Subcategory.slug.current +
                                            '/' +
                                            product.slug.current
                                        }
                                    >
                                        <p className="text-[16px] text-[#444] mb-[14px] hover:cursor-pointer  ">
                                            {product.title}
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
                {reversedSections?.map((section, index) => {
                    console.log('section', section)
                    return (
                        <SwiperSlide className=" " key={index}>
                            <div className=" flex flex-col flex-1 h-full">
                                <Link
                                    href={`/category/${section.refrence?.slug?.current}`}
                                >
                                    <div className="flex-1  bg-[#F7F7F7] p-10 py-20 flex items-center justify-center  mb-[35px] hover:cursor-pointer">
                                        <img
                                            src={urlFor(section?.image?.image)}
                                            className="rounded-3xl  shadow-xl relative"
                                        />
                                    </div>
                                </Link>
                                <p className="absolute bg-red-700 text-white uppercase text-xs p-1 top-2 right-0 ">
                                    {section?.title}
                                </p>
                                <p className="text-grey-400 uppercase text-[11px] text-left px-2 mt-4 mb-1">
                                    {section?.descriptionTitle}
                                </p>
                                <p className="text text-[12px] text-left px-2 mb-12">
                                    {section?.description}
                                </p>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}
