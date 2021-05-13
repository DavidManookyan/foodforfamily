import React from 'react'
import {
    Flex,
    Image,
    Box,
} from '@chakra-ui/react'
import MainSwiper from '../../components/MainSwiper'
import { Menu } from './Menu'
import { Daily } from './Daily'
import { Footer } from '../../components/Footer'

const Home = () => {
    return (
        <Box width="100%">
            <Flex
                position="relative"
                width="100%"
                height={{base:"100vh", md: '100vh', lg: '100vh'}}>
                <MainSwiper/>
            </Flex>
            <Menu/>
            <Daily/>
            {/* <Footer/> */}
        </Box>
    )
}

export default Home
