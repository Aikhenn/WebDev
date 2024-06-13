
import {Swiper , SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import slideImg1 from '../assets/SampPrj1.png';
import slideImg2 from '../assets/SampPrj2.png';
import slideImg3 from '../assets/SampPrj3.png';
import { Box } from '@mui/material';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

function slider(){
    return (
    <Box sx={{}}>
       
        <Swiper 
           effect={'coverflow'} 
            grabCursor={true}
            centeredSlides= {true}
            loop={true}
            slidesPerView={4}
            coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{el:'.swiper-pagination', clickable: true}}
                
                modules={[EffectCoverflow,Pagination,Navigation]}

                className='swiper_container'
        >
            <SwiperSlide>
                <img src={slideImg1} alt='slide_image'></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slideImg3} alt='slide_image'></img>
            </SwiperSlide>
           <SwiperSlide>
                <img src={slideImg2} alt='slide_image'></img>
            </SwiperSlide> 
            <SwiperSlide>
                <img src={slideImg3} alt='slide_image'></img>
            </SwiperSlide>
           
        

            <div className='slider-controler'>
              
             
                <div className="swiper-pagination"></div>
            </div>
        </Swiper>
        
        </Box>
    )
}

export default slider;