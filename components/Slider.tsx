// import React from 'react'

// export const Slider = () => {

//   return (
//     <div className="relative mx-auto max-w-4xl pt-16">
//       <div className="flex w-full overflow-hidden">
//         <img className="" src="/blockchain.jpg" alt="" />
//         <img className="" src="/bitcoin.jpg" alt="" />
//         <img className="" src="/bitcoin.jpg" alt="" />
//       </div>
//       <span className="absolute top-[50%] right-0 translate-y-2/4 rounded-full border-2 bg-gray-200 px-1 text-2xl">
//         ＞
//       </span>
//       <span className="absolute top-[50%] left-0 translate-y-2/4 rounded-full border-2 bg-gray-200 px-1 text-2xl">
//         ＜
//       </span>
//     </div>
//   )
// }

// import Swiper styles
import 'swiper/css'
// import required modules
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Slider = () => {
  return (
    <div className="mx-auto max-w-4xl pt-16">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img className="" src="/blockchain.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" src="/bitcoin.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" src="/blockchain.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
