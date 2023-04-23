import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { urlFor } from '../lib/sanity'
import { useState } from 'react'
import Link from 'next/link'

export default function Slider({ products }) {
    const [swiperRef, setSwiperRef] = useState()

    console.log('products', products)

    const handlePrevious = () => {
        swiperRef?.slidePrev()
    }

    const handleNext = () => {
        swiperRef?.slideNext()
    }

    return (
        <div className="relative w-[90%] mx-auto md:w-full  h-full ">
            <img
                onClick={handlePrevious}
                src="/left.svg"
                className="md:w-[28px] md:h-[28px] w-[22px] absolute left-2  md:-left-12 z-50 top-1/2 transform -translate-y-1/2 hover:scale-105 hover:cursor-pointer"
            />

            <img
                onClick={handleNext}
                src="/right.svg"
                className="md:w-[28px] md:h-[28px] w-[22px] absolute right-2 md:-right-12 z-20 top-1/2 transform -translate-y-1/2 hover:scale-105 hover:cursor-pointer"
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
                            <div className=" flex flex-col flex-1 h-full">
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
                                        <p className="text-[11px] text-[#777777] mb-[14px] hover:cursor-pointer  ">
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
                                        <p className="text-[14px] text-[#444] mb-[14px] hover:cursor-pointer  ">
                                            {product.title}
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}
