import React from 'react'
import { useColorMode, Flex } from '@chakra-ui/react'

import { Footer } from '../components/Footer'
import { useRouter } from 'next/router'
import Navigation from '../components/Navigation'
import Hero from './Hero'
import MobileNavigation from '../components/MobileNavigation'
import MobileNavigationTop from '../components/MobileNavigationTop'

const Container = ({ children }) => {
  const router = useRouter()
  const { colorMode } = useColorMode()
  const bgColor = {
    light: 'white',
    dark: '#15161a'
  }
  const color = {
    light: 'black',
    dark: 'white'
  }

  return (
    <>
      <Navigation />
      <MobileNavigationTop page="Home" />
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
      >
        {router.pathname == '/' && <Hero />}
        <Flex px={4} flexDir="column" minH="90vh">
          {children}
        </Flex>
        <Footer />
      </Flex>
      <MobileNavigation />
    </>
  )
}

export default Container