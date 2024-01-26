import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// flowbite import
import { Avatar } from 'flowbite-react';
import proPic from "../assets/Avatar_1.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// react icons 
import {FaStar} from 'react-icons/fa6'

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Reviews = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading snug'>Nos clients</h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>

                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perspiciatis cum similique atque sit doloremque deleniti eius sapiente corrupti ea dolor, nisi magni illum tempora dicta molestiae, repudiandae debitis id.
                    </p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Brunette Penge</h5>
                    <p className='text-base'>Parent d’élève</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>

                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perspiciatis cum similique atque sit doloremque deleniti eius sapiente corrupti ea dolor, nisi magni illum tempora dicta molestiae, repudiandae debitis id.
                    </p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Brunette Penge</h5>
                    <p className='text-base'>Parent d’élève</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>

                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perspiciatis cum similique atque sit doloremque deleniti eius sapiente corrupti ea dolor, nisi magni illum tempora dicta molestiae, repudiandae debitis id.
                    </p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Brunette Penge</h5>
                    <p className='text-base'>Parent d’élève</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>

                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perspiciatis cum similique atque sit doloremque deleniti eius sapiente corrupti ea dolor, nisi magni illum tempora dicta molestiae, repudiandae debitis id.
                    </p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Brunette Penge</h5>
                    <p className='text-base'>Parent d’élève</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>

                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perspiciatis cum similique atque sit doloremque deleniti eius sapiente corrupti ea dolor, nisi magni illum tempora dicta molestiae, repudiandae debitis id.
                    </p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Brunette Penge</h5>
                    <p className='text-base'>Parent d’élève</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>

                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perspiciatis cum similique atque sit doloremque deleniti eius sapiente corrupti ea dolor, nisi magni illum tempora dicta molestiae, repudiandae debitis id.
                    </p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Brunette Penge</h5>
                    <p className='text-base'>Parent d’élève</p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default Reviews