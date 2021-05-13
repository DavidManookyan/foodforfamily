import {
    Box,
    Center,
    Heading,
    Img,
    SimpleGrid,
    Stack,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FaCopy, FaPlug, FaRecycle } from 'react-icons/fa'
  import { Feature } from './Feature'
  
  export const Daily = () => {
    return (
      <Box as="section" bg={mode('gray.50', 'gray.800')} pt="16" pb="32">
        <Box
          maxW={{
            base: 'xl',
            md: '7xl',
          }}
          mx="auto"
          px={{
            base: '6',
            md: '8',
          }}
        >
          <Heading textAlign="center" letterSpacing="tight" fontWeight="extrabold">
            Daily offers from our Chef
          </Heading>
          <Box mt="24">
            <SimpleGrid
              columns={{
                base: 1,
                md: 2,
              }}
              spacing={{
                base: '16',
                md: '8',
              }}
            >
              <Stack spacing="12" maxW="lg">
                <Feature icon={<Box as={FaCopy} w="6" h="6" />} title="Borsh">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                  officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
                </Feature>
                <Feature icon={<Box as={FaPlug} w="6" h="6" />} title="Pasta Italakan">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                  officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
                </Feature>
                <Feature icon={<Box as={FaRecycle} w="6" h="6" />} title="Gata">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                  officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
                </Feature>
              </Stack>
              <Center shadow="lg" minH="26rem">
                <Img
                  objectFit="cover"
                  w="full"
                  h="full"
                  src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Holding phone with app installed"
                />
              </Center>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    )
  }