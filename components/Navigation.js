import React from "react";
import { useColorMode, Button, Flex, Box, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

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
      // maxWidth="800px"
      minWidth="356px"
      width="100%"
      as="nav"
      px={6}
      py={6}
      mb={[null, 0, 8]}
      mx="auto"
      display={["none", "flex", "flex"]}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
          <Box maxWidth="1200px">
            <NextLink href="/" passHref>
              <Button
                as="a"
                variant="ghost"
                p={[1, 2, 4]}
                mr={2}
                _hover={{ backgroundColor: navHoverBg[colorMode] }}
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
                aria-label="Projects"
              >
                <Text
                  color={
                    router.pathname === "/projects"
                      ? colorActive[colorMode]
                      : null
                  }
                >
                  Projects
                </Text>
              </Button>
            </NextLink>
          </Box>
      </motion.div>
      <DarkModeSwitch />
    </StickyNav>
  );
};

export default Navigation;
