import React from 'react'
import {
    useColorMode,
    Switch,
    Text,
    Flex,
    Center,
    useColorModeValue as mode
} from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from './Logo'
import { Navbar } from './Navbar'
import { NavLink } from './NavLink'
// import { UserProfile } from './UserProfile'

const DefaultLayout = ({ children }) => {
    const { toggleColorMode } = useColorMode()
    const location = useLocation()
    return (
        <Flex
            bg={{ md: mode('gray.100', 'inherit') }}
            p="6"
            minH="100vh"
            width="100%"
            position="relative">
            <Navbar>
                <Navbar.Brand>
                    <Center marginEnd="10">
                        <Logo h="6" iconColor={mode('blue.600', 'blue.300')} />
                    </Center>
                </Navbar.Brand>
                <Navbar.Links>
                    <NavLink isActive={location.pathname === '/'}><Link to="/">Home</Link></NavLink>
                    <NavLink>Features</NavLink>
                    <NavLink>Documentation</NavLink>
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
        </Flex>
    )
}

export default DefaultLayout