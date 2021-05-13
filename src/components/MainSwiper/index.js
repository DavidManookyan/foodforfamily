
import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Flex, Image, Text, useColorModeValue as mode } from '@chakra-ui/react'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import "./index.css";


// import Swiper core and required modules
import SwiperCore, {
    Autoplay,
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay]);

const PHOTOS = [
    {
        image: 'https://images.unsplash.com/photo-1543353071-087092ec393a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80',
        text: 'some text here for some food descripiton'
    },
    {
        image: 'https://images.unsplash.com/photo-1610970882161-9528bb92589a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=977&q=80',
        text: 'some text here for some food descripiton'
    },
    {
        image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80',
        text: 'some text here for some food descripiton'
    },
    {
        image: 'https://images.unsplash.com/photo-1505633354244-94a091822e67?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        text: 'some text here for some food descripiton'
    }
]


export default function MainSwiper({
    photos,
}) {
  
  return (
    <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
            "delay": 3000,
            "disableOnInteraction": false
          }}
        className="mySwiper">
        {
            PHOTOS.map(photo => (
                <SwiperSlide key={photo.image}>
                    <Image
                        src={photo.image}/>
                    <Flex
                        bg={mode("white", "#1a202c")}
                        position="absolute"
                        borderRadius="15px"
                        padding="4"
                        top="60%"
                        right="20%">
                        <Text>
                            {photo.text}
                        </Text>
                    </Flex>
                </SwiperSlide>
            ))
        }
    </Swiper>
  )
}