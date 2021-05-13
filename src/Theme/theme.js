import { extendTheme } from '@chakra-ui/react'
import Button from './Button'

const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
  }

const theme = extendTheme({
    config,
    components: {
        Button,
    },
    fonts: {
        body: "'Roboto', serif",
        heading: "'Roboto', serif",
        // mono: "'Frank Ruhl Libre', serif",
    },
    styles: {
        global: {
            'html, body': {
     
            },
            a: {
                textDecoration: 'none !important',
            },
            'h2, h3, h4': {
                
            },
        },
    },
    fontSizes: {
    
    },
    colors: {
    },
})

export default theme
