import React, { useEffect, useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import {
  useColorMode,
  Heading,
  Text,
  Code,
  Badge,
  Flex,
  Stack,
  Button,
  Box,
  Link,
  Divider,
} from "@chakra-ui/react";

import Container from "../components/Container";
import ExperienceBox from "../components/ExperienceBox";
import FeaturedProjectCard from "../components/FeaturedProjectCard";
import BlogPost from "../components/blog/BlogPost";
import NowPlaying from "../components/NowPlaying";
import { motion } from "framer-motion";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Index() {
  const { colorMode } = useColorMode();

  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };

  const iconColor = {
    light: "gray.600",
    dark: "gray.300",
  };

  const linkColor = {
    light: "blue.400",
    dark: "blue.600",
  };

  const [width, setWidth] = useState(1);
  const handleScroll = () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    setWidth(scrollPercentRounded);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <Box
        h={1}
        as="div"
        bgGradient="linear(to-r, blue.600, blue.400, green.400, green.600)"
        position="sticky"
        transition="all 200ms linear"
        top={0}
        zIndex={100}
        w={`${width}%`}
      ></Box>
      <Container>
        <Head>
          <title>Home - Rahmat Subandi</title>
        </Head>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          px={2}
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Flex
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              maxWidth="700px"
            >
              <Heading mb={2}>
                Hi, I'm Rahmat Subandi, a developer, writer, and student.
              </Heading>
              <Text color={colorSecondary[colorMode]} textAlign="justify">
                I study at{" "}
                <Link
                  href="https://www.mercubuana.ac.id/en"
                  color={linkColor[colorMode]}
                  isExternal
                >
                  Mercu Buana University
                </Link>{" "}
                with an undergraduate study program majoring in Informatics
                Engineering.. My personal website is where I showcase my
                projects, writing, statistics, experience, and more. It also
                serves as a sandbox to play around with new technologies! Feel
                free to reach out via{" "}
                <Link
                  href="mailto:rhmtin12@gmail.com"
                  color={linkColor[colorMode]}
                >
                  email
                </Link>{" "}
                or any social media with any inquiries.
              </Text>

              <Divider mb={12} mt={16} w="90%" alignSelf="center" />

              <Heading
                letterSpacing="tight"
                mt={8}
                size="lg"
                fontWeight={700}
                as="h2"
              >
                Featured Projects
              </Heading>
              <FeaturedProjectCard
                title="Lazadi"
                href="https://lazadi.000webhostapp.com/"
                src="/images/featuredproject/lazadi.png"
                alt="Image of lazadi"
                color={iconColor[colorMode]}
              >
                Lazadi is the first e-commerce site that I created with
                Codeigniter 3 technology. This e-commerce creation aims to
                deepen what I have learned in Codeigniter 3.
              </FeaturedProjectCard>
              <FeaturedProjectCard
                title="2Cok"
                href="https://2cok.netlify.app/"
                src="/images/featuredproject/2cok.png"
                alt="Image of 2cok"
                color={iconColor[colorMode]}
              >
                2Cok is built with the ReactJS programming language. Making this
                2cok is the final result of learning from the ReactJS bootcamp
                that I participated in in 2020.
              </FeaturedProjectCard>

              <FeaturedProjectCard
                title="TOCBTPRO"
                href="https://tocbtpro.com/"
                src="/images/featuredproject/tocbtpro.png"
                alt="Image of tocbtpro"
                color={iconColor[colorMode]}
              >
                TOCBTPRO is a learning web platform for prospective doctors who
                want to take the final exam. Tocbtpro is also one of my first
                real projects. TOCBTPRO is made in <Code>PHP</Code> using the{" "}
                <Code>Laravel</Code> version <Badge>5.5.20</Badge> framework.
              </FeaturedProjectCard>
              <Flex justify="center" width="100%">
                <NextLink href="/projects" passHref>
                  <Link _hover="none" mt={8}>
                    <Button
                      rightIcon={<ArrowForwardIcon />}
                      colorScheme="gray"
                      variant="outline"
                      aria-label="view all projects"
                    >
                      View All Projects
                    </Button>
                  </Link>
                </NextLink>
              </Flex>

              <Divider mb={12} mt={16} w="90%" alignSelf="center" />

              <Heading
                letterSpacing="tight"
                mt={8}
                size="lg"
                fontWeight={700}
                as="h2"
              >
                Experience
              </Heading>
              <ExperienceBox
                name="Indonesia Crypto Network"
                years="2022 - Present"
                pos="Web Developer"
                badge_1="Full-time"
              >
                As a Web Developer who implements from Design to website
                interface, makes the necessary tools for implementation into
                websites, creates databases, and is fully responsible for
                creating dynamic websites so as to make it easier for the
                author/writer team. Some websites that I have worked on:
                <br />1. <Link href="https://coinfest.asia/" isExternal color={linkColor[colorMode]} target="_blank">Coinfest Asia 2022</Link>
                <br />2. <Link href="https://coinvestasi.com/" isExternal color={linkColor[colorMode]} target="_blank">Coinvestasi (On Going)</Link>
              </ExperienceBox>

              <ExperienceBox
                name="PT Lima Sekawan Indonesia"
                years="2021"
                pos="Full Stack Web Developer"
                badge_1="Contract"
              >
                At Hivefive I use the <Code>PHP</Code> programming language or{" "}
                <Code>CMS Wordpress</Code> for such fast needs both internally
                and externally. Not only that, I also maintain 3 VPS at once,
                the first is HiveFive's VPS, the second is the client's VPS
                which accommodates 30 websites, and the third is the VPS client
                which accommodates 25 websites. VPS1 and VPS2 have clients that
                continue to grow, my estimate is that one VPS can accommodate 50
                websites. And I also create client websites such as company
                profiles, e-commerce, or other custom websites.
              </ExperienceBox>

              <ExperienceBox
                name="PT Bintang Inovasi Teknologi"
                years="2020 - Present"
                pos="Software Engineering Specialist"
                badge_1="Freelance"
                badge_2="Part Time"
              >
                At Owltech, I use <Code>PHP</Code>, <Code>HTML</Code> /{" "}
                <Code>CSS</Code>, <Code>JavaScript</Code>, <Code>SQL</Code> and
                several <Code>frameworks</Code> to create and update internal
                websites for Owltech and clients. I have completed 2 projects
                and more than 6 months part time or freelance work both in
                office and remote.
              </ExperienceBox>

              <ExperienceBox
                name="BNPB (Badan Nasional Penanggulangan Bencana)"
                years="2020 - 2021"
                pos="Junior Web Developer"
                badge_1="Internship"
              >
                At BNPB, I use <Code>PHP</Code>, <Code>HTML</Code> /{" "}
                <Code>CSS</Code>, <Code>JavaScript</Code>, <Code>SQL</Code> and
                several <Code>frameworks</Code> to create and update internal
                websites for BNPB. I have completed 3 projects and more than 3
                months internship work both in office and remote.
              </ExperienceBox>

              <ExperienceBox
                name="PT Putra Mulia Telecommunication"
                years="2017 - 2018"
                pos="Telecommunications Technician"
                badge_1="Full Time"
              >
                At PMT I was a Telecommunications Technician whose job was to
                remotely, check, and make repairs to the first stage in terms of
                systems and lines at the BTS (Base Transceiver Station). The
                length of time I worked was 8 months, from September 2017 to
                April 2018.
              </ExperienceBox>

              <ExperienceBox
                name="PT Putra Mulia Telecommunication"
                years="2016"
                pos="Telecommunications Technician Support"
                badge_1="Internship"
              >
                At PMT I was a vocational high school student majoring in
                Computer and Network Engineering. In this internship, my job and
                position is only as a support technician, and my job is only to
                help technicians to make LAN cables, check cables on switches,
                routers, and antennas in BTS. Like the job of a support
                technician in general. The length of my internship at PMT is 4
                months, from January to April.
              </ExperienceBox>

              <Divider mb={12} mt={16} w="90%" alignSelf="center" />

              <Heading
                letterSpacing="tight"
                mt={8}
                mb={4}
                size="lg"
                fontWeight={700}
                as="h2"
              >
                Latest Blog Post
              </Heading>

              <BlogPost
                title="Speed up programming language writing with emmet"
                summary="Emmet functions to speed up writing our programming languages, such as Java Script, PHP, and many more, even HTML and CSS can too."
                slug="emmet-syntax"
              />
              <BlogPost
                title="MySQL CLI Cheatsheet"
                summary="Cheatsheet MySql CLI command"
                slug="mysql-cheetsheet"
              />

              <Divider mb={12} mt={16} w="90%" alignSelf="center" />

              <Flex width="100%">
                <NowPlaying />
              </Flex>

              <Text mt={10} mb={10}>
                Looks like you've made it to the end of this page... feel free
                to check out my{" "}
                <NextLink href="/hello" passHref>
                  <Link isExternal color={linkColor[colorMode]}>
                    /hello
                  </Link>
                </NextLink>{" "}
                where you can find even more about me in fast link.
              </Text>
            </Flex>
          </motion.div>
        </Stack>
      </Container>
    </>
  );
}
