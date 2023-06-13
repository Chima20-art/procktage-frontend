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
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function Slider3({ product, setSelectedItem, setIsSelected }) {
    let Images = product.description.filter((item) => item.image)

    const [swiperRef, setSwiperRef] = useState()
    const [isVisible, setIsVisible] = useState(Images.length > 0)
    const handlePrevious = () => {
        swiperRef?.slidePrev()
    }

    const handleNext = () => {
        swiperRef?.slideNext()
    }

    return (
        <div className="relative max-w-[95%] w-fit mx-auto mt-8 ">
            <IoIosArrowBack
                onClick={handlePrevious}
                src="/left.svg"
                color="black"
                size="24px"
                className={`${
                    isVisible
                        ? 'md:w-[28px] bgblack/40 md:h-[28px] absolute -left-6 z-50 top-[50%] transform -translate-y-1/2 hover:scale-105 hover:cursor-pointer'
                        : 'hidden'
                }`}
            />
            <IoIosArrowForward
                onClick={handleNext}
                src="/left.svg"
                color="black"
                size="24px"
                className={`
                ${
                    isVisible
                        ? 'md:w-[28px] md:h-[28px] absolute right-0 -right-6 z-20 top-[50%] transform -translate-y-1/2 hover:scale-105 hover:cursor-pointer'
                        : 'hidden'
                }`}
            />

            {isVisible && (
                <Swiper
                    onSwiper={setSwiperRef}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: true,
                    }}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 4,
                        },
                        // when window width is >= 768px
                        900: {
                            slidesPerView: 4,
                        },

                        1100: {
                            slidesPerView: 4,
                        },
                    }}
                    spaceBetween={4}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    className=""
                    loop={true}
                >
                    {product?.description?.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className=" flex flex-row flex-1 px-2.5 bg-grey-100">
                                    <div
                                        className={`flex-1 w-1/${Images?.length} mx- flex items-center justify-center bg-grey-100 my-[5px] hover:cursor-pointer`}
                                    >
                                        {item?.image && (
                                            <img
                                                key={index}
                                                src={urlFor(item?.image)}
                                                className="relative "
                                                onClick={() => {
                                                    setSelectedItem(item)
                                                    setIsSelected(item)
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            )}
        </div>
    )
}
