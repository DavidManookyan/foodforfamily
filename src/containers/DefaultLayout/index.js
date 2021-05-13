import React from 'react'
import {
    useColorMode,
    Switch,
    Text,
    Flex,
    Center,
    useColorModeValue as mode,
    Image
} from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { NavLink } from './NavLink'
import { Footer } from '../../components/Footer'
// import { UserProfile } from './UserProfile'

const DefaultLayout = ({ children }) => {
    const { toggleColorMode } = useColorMode()
    const location = useLocation()
    return (
        <Flex
            flexDirection="column"
            bg={{ md: mode('gray.100', 'inherit') }}
            minH="100vh"
            width="100%"
            position="relative">
            <Navbar>
                <Navbar.Brand>
                    <Center marginEnd="10">
                        <Image
                            objectFit="cover"
                            height="60px"
                            width="60px"
                            src={mode("/blackLogo.png", "/whiteLogo.png")}
                            alt="logo"/>
                        {/* <Logo h="6" iconColor={mode('blue.600', 'blue.300')} /> */}
                    </Center>
                </Navbar.Brand>
                <Navbar.Links>
                    <NavLink
                        to="/"
                        isActive={location.pathname === '/'}>
                        Home
                    </NavLink>
                    <NavLink
                        to="/menu"
                        isActive={location.pathname === '/menu'}>
                        Menu
                    </NavLink>
                    <NavLink
                        to="/contact-us"
                        isActive={location.pathname === '/contact-us'}>
                        Contact Us
                    </NavLink>
                    <NavLink>Pricing</NavLink>
                </Navbar.Links>
                <Navbar.UserProfile>
                    <Flex
                        justifyContent="center"
                        alignItems="center">
                        <Switch
                            mr="4"
                            onChange={toggleColorMode}/>
                        <Text>Change Color Mode</Text>
                    </Flex>
                    {/* <UserProfile
                        name="Christian Schröter"
                        avatarUrl="https://ca.slack-edge.com/T024F7F15-UJVQ359SP-81fc55875723-512"
                        email="mail@chidori-ui.com"
                    /> */}
                </Navbar.UserProfile>
            </Navbar>
            {children}
            <Footer/>
        </Flex>
    )
}

export default DefaultLayout