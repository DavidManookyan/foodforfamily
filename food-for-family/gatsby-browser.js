import * as React from 'react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './src/theme'

export const Wrapper = ({ element }) => (
    <>
        <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
        <ChakraProvider
            resetCSS
            theme={theme}>
            {element}
        </ChakraProvider>
    </>
)