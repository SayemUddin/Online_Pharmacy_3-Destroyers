import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Grid } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";
const Banner = () => {
    return (
        <>
        <h1 className="text-5xl text-center text-green-500 font-bold my-10  py-8">
            PRODUCT <span className=' text-orange-500'>BANNER</span> 
        </h1>
        <div className="w-[90%] mx-auto my-10 p-5">
          
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Grid]}
            spaceBetween={0}
            slidesPerView={1}
            allowTouchMove = {false}
            navigation={{ clickable: true }}
           
          >
          
          
          <SwiperSlide>
          <div class="swiper-scrollbar">
              <div className="rounded w-full bg-lime-400 grid grid-cols-2 justify-center items-center   shadow-sm   overflow-hidden  ">
                    <div>
                        <img src="https://cdn.osudpotro.com/medicine/sergel-20-1636287026630.webp" alt="" />
                    </div>
                    <div>
                        <h1 className='text-7xl uppercase py-2'>Sergel</h1>
                        <p className='text-2xl'>Sergel 20 is used to treat chronic heartburn and other symptoms associated with GERD.</p>
                    </div>
              </div>
            </div>
            </SwiperSlide>
          
          <SwiperSlide>
              <div className="rounded w-full bg-sky-200 grid grid-cols-2 justify-center items-center   shadow-sm   overflow-hidden  ">
                    <div>
                        <img className='' src="https://cdn.osudpotro.com/medicine/napa-500-mg-1634182813132.webp" alt="" />
                    </div>
                    <div>
                        <h1 className='text-7xl uppercase py-2'>Napa</h1>
                        <p className='text-2xl'>Napa is indicated for fever, common cold and influenza, headache, toothache, earache,</p>
                    </div>
              </div>
            </SwiperSlide>

          <SwiperSlide>
              <div className="rounded w-full bg-amber-100 grid grid-cols-2 justify-center items-center   shadow-sm   overflow-hidden  ">
                    <div>
                        <img src="https://cdn.osudpotro.com/medicine/ace-500-1631364310354.webp" alt="" />
                    </div>
                    <div>
                        <h1 className='text-7xl uppercase py-2'>Ace 500</h1>
                        <p className='text-2xl'>Ace 500 is suitable for fever, common cold, and flu, headache, toothache, earache, body pain,</p>
                    </div>
              </div>
            </SwiperSlide>

        <SwiperSlide>
              <div className="rounded w-full bg-orange-300 bg-sky-200 grid grid-cols-2 justify-center items-center   shadow-sm   overflow-hidden  ">
                    <div>
                        <img src="https://cdn.osudpotro.com/medicine/renova-1630305884071.webp" alt="" />
                    </div>
                    <div>
                        <h1 className='text-7xl uppercase py-2'>Renova</h1>
                        <p className='text-2xl'>In children, paracetamol is used to treat fever, common cold, and influenza, headache</p>
                    </div>
              </div>
            </SwiperSlide>

          </Swiper>
         </div>
      </>

    );
};


export default Banner;