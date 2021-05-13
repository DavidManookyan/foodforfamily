import {
    Box,
    Flex,
    Heading,
    Img,
    Link,
    LinkBox,
    LinkOverlay,
    SimpleGrid,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { BsArrowRight } from 'react-icons/bs'
  import { CgDollar } from 'react-icons/cg'
  
  const Blog = (props) => {
    const { title, href, description, media, author, category } = props
    return (
      <LinkBox
        as="article"
        bg={{
          sm: mode('white', 'gray.700'),
        }}
        shadow={{
          sm: 'base',
        }}
        rounded={{
          sm: 'md',
        }}
        overflow="hidden"
        transition="all 0.2s"
        _hover={{
          shadow: {
            sm: 'lg',
          },
        }}
      >
        <Flex direction="column">
          <Img height="60" objectFit="cover" alt={title} src={media} />
          <Flex
            direction="column"
            px={{
              sm: '6',
            }}
            py="5"
          >
            <Text
              casing="uppercase"
              letterSpacing="wider"
              fontSize="xs"
              fontWeight="semibold"
              mb="2"
              color="gray.500"
            >
              {category}
            </Text>
            <Heading as="h3" size="sm" mb="2" lineHeight="base">
              <LinkOverlay href={href}>{title}</LinkOverlay>
            </Heading>
            <Text noOfLines={2} mb="8" color={mode('gray.600', 'gray.400')}>
              {description}
            </Text>
            <Flex
              align="baseline"
              justify="space-between"
              fontSize="sm"
              color={mode('gray.600', 'gray.400')}
            >
              <Text>
                <Box as="a" textDecor="underline" href={author.href}>
                  {author.name}
                </Box>
              </Text>
              <Link href="#">
                <Box as={CgDollar} display="inline-block" me="2" opacity={0.4} />300
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </LinkBox>
    )
  }
  
  export const Menu = () => {
    return (
      <Box
        as="section"
        bg={mode('gray.50', 'gray.800')}
        py={{
          base: '10',
          sm: '24',
        }}
      >
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
          <Heading size="xl" mb="8" fontWeight="extrabold">
            Menu
          </Heading>
          <SimpleGrid
            columns={{
              base: 1,
              md: 3,
            }}
            spacing="12"
            mb="10"
          >
            <Blog
              category="Sweet"
              media="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"
              title="Qaxcraveniq"
              description="Franciakan qaxraveniq esim inch. baghadrutyun@ tandz xndozr mandarin"
              href="#"
              author={{
                name: 'Price',
                href: '#',
              }}
            />
            <Blog
              category="Sweet"
              media="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
              title="Paghpaghak"
              description="Lcnovi paghpaghakner@ kzovacnen dzez. vanil, chocolade ..."
              href="#"
              author={{
                name: 'Price',
                href: '#',
              }}
            />
            <Blog
              category="Pasta"
              media="https://images.unsplash.com/photo-1481931098730-318b6f776db0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=937&q=80"
              title="Italakan pasta"
              description="Lavaguyn italakan pastaner@ miayn mez mot. Baghadrutyun@ ....."
              href="#"
              author={{
                name: 'Price',
                href: '#',
              }}
            />
          </SimpleGrid>
          <Link fontSize="xl" fontWeight="bold" color={mode('blue.600', 'blue.400')}>
            <span>View all items</span>
            <Box as={BsArrowRight} display="inline-block" ms="2" />
          </Link>
        </Box>
      </Box>
    )
  }