import React from "react";
import { useColorMode, Button, Flex, Box, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import NextLink from "next/link";
import { useRouter } from "next/router";

import DarkModeSwitch from "../components/DarkModeSwitch";

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: height 0.5s, line-height 0.5s;
`;

const Navigation = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();

  // const bgColor = {
  //   light: "#fff",
  //   dark: "#15161a",
  // };

  const navHoverBg = {
    light: "gray.100",
    dark: "gray.700",
  };

  const colorActive = {
    light: "green.600",
    dark: "green.300",
  };

  return (
    <StickyNav
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      maxWidth="800px"
      minWidth="356px"
      width="100%"
      // bg={bgColor[colorMode]}
      as="nav"
      px={6}
      py={6}
      mt={8}
      mb={[null, 0, 8]}
      mx="auto"
      display={["none", "flex", "flex"]}
    >
      <Box>
        <NextLink href="/" passHref>
          <Button
            as="a"
            variant="ghost"
            p={[1, 2, 4]}
            mr={2}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
            // backgroundColor={
            //   router.pathname === "/" ? navHoverBg[colorMode] : null
            // }
            aria-label="Home"
          >
            <Text
              color={router.pathname === "/" ? colorActive[colorMode] : null}
            >
              Home
            </Text>
          </Button>
        </NextLink>
        <NextLink href="/blog" passHref>
          <Button
            as="a"
            variant="ghost"
            p={[1, 2, 4]}
            mr={2}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
            // backgroundColor={
            //   router.pathname.includes("/blog") ? navHoverBg[colorMode] : null
            // }
            aria-label="Blog"
          >
            <Text
              color={
                router.pathname === "/blog" ? colorActive[colorMode] : null
              }
            >
              Blog
            </Text>
          </Button>
        </NextLink>
        <NextLink href="/projects" passHref>
          <Button
            as="a"
            variant="ghost"
            p={[1, 2, 4]}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
            // backgroundColor={
            //   router.pathname === "/projects" ? navHoverBg[colorMode] : null
            // }
            aria-label="Projects"
          >
            <Text
              color={
                router.pathname === "/projects" ? colorActive[colorMode] : null
              }
            >
              Projects
            </Text>
          </Button>
        </NextLink>
      </Box>
      <DarkModeSwitch />
    </StickyNav>
  );
};

export default Navigation;
