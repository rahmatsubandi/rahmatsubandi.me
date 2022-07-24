import { NextSeo } from 'next-seo';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    SimpleGrid,
    Stack,
    Box,
    Link,
    Divider,
} from '@chakra-ui/react';

import Container from '../components/Container';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import FeaturedRepository from '../components/FeaturedRepository';
import BlogPost from '../components/blog/BlogPost';
import NowPlaying from '../components/NowPlaying';
import { motion } from 'framer-motion';

const url = 'https://www.rahmatsubandi.dev/';
const title = 'Home - Rahmat Subandi';
const description =
    'Personal portfolio and resume website Rahmat Subandi, a developer, writer, and tech enthusiast and creator of this website.';

export default function Index() {
    const { colorMode } = useColorMode();

    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400',
    };

    const linkColor = {
        light: 'green.400',
        dark: 'green.600',
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
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={url}
                openGraph={{
                    url,
                    title,
                    description,
                }}
            />

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
                    maxWidth="800px"
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
                            maxWidth="800px"
                        >
                            <Box as="section" mt={10} mb={10}>
                                <Heading
                                    letterSpacing="tight"
                                    mt={8}
                                    size="lg"
                                    fontWeight={700}
                                    as="h2"
                                    mb={4}
                                >
                                    About Me
                                </Heading>
                                <Text color={colorSecondary[colorMode]}>
                                    I study at
                                    <Link
                                        href="https://www.mercubuana.ac.id/en"
                                        color={linkColor[colorMode]}
                                        isExternal
                                    >
                                        {' '}
                                        Mercu Buana University{' '}
                                    </Link>
                                    with an undergraduate study program majoring in Informatics
                                    Engineering.. My personal website is where I showcase my
                                    projects, writing, statistics, experience, and more. It also
                                    serves as a sandbox to play around with new technologies! Feel
                                    free to reach out via{' '}
                                    <Link
                                        href="mailto:rhmtin12@gmail.com"
                                        color={linkColor[colorMode]}
                                    >
                                        email
                                    </Link>{' '}
                                    or any social media with any inquiries.
                                </Text>
                            </Box>
                            <Box as="section" mt={10} mb={20}>
                                <Heading
                                    letterSpacing="tight"
                                    mt={8}
                                    mb={4}
                                    size="lg"
                                    fontWeight={700}
                                    as="h2"
                                >
                                    Top Repository GitHub 🐱‍💻
                                </Heading>
                                <SimpleGrid minChildWidth="300px" spacing="40px">
                                    <FeaturedRepository
                                        title="lara-stater"
                                        description="Stater Pack Laravel (CRUD, Role, and Other)"
                                        repoHref="https://github.com/rahmatsubandi/lara-stater"
                                        demoHref="https://www.cohttps://larastater.netlify.app/ffeeclass.io?utm_source=website&utm_campaign=benjamincarlson.io"
                                        languageColor="#f7523f"
                                        language="Blade"
                                    />
                                    <FeaturedRepository
                                        title="company"
                                        description="This CMS company profile stater pack"
                                        repoHref="https://github.com/rahmatsubandi/company"
                                        demoHref="https://github.com/rahmatsubandi/company/blob/master/readme.rst"
                                        languageColor="#4F5D95"
                                        language="PHP"
                                    />
                                    <FeaturedRepository
                                        title="Pendeteksi-Ekspresi-Wajah"
                                        description="This program was created with the aim of learning and reference to Big Task 2 Image Processing."
                                        repoHref="https://github.com/rahmatsubandi/Pendeteksi-Ekspresi-Wajah"
                                        demoHref="https://github.com/rahmatsubandi/Pendeteksi-Ekspresi-Wajah#readme"
                                        languageColor="#3572A5"
                                        language="Python"
                                    />
                                    <FeaturedRepository
                                        title="Spam-chat-Whatsapp"
                                        description="Spam Script WhatsApp Web with Javascript"
                                        repoHref="https://github.com/rahmatsubandi/Spam-chat-Whatsapp"
                                        demoHref="https://github.com/rahmatsubandi/Spam-chat-Whatsapp/blob/main/README.md"
                                        languageColor="#f1e05a"
                                        language="JavaScript"
                                    />
                                </SimpleGrid>
                            </Box>
                            <Projects />
                            <Experience />
                            <Box as="section" mt={10}>
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
                                    title="Git Cheat Sheet"
                                    summary="This cheat sheet features the most important and commonly used Git commands for easy reference."
                                    href={`git-cheat-sheet`}
                                />
                                <BlogPost
                                    title="Speed up programming language writing with emmet"
                                    summary="Emmet functions to speed up writing our programming languages, such as Java Script, PHP, and many more, even HTML and CSS can too."
                                    href={`emmet-syntax`}
                                />
                            </Box>
                            <Divider mb={10} mt={20} w="90%" alignSelf="center" />
                            <NowPlaying />
                            <Text mt={8} mb={4}>
                                Looks like you've made it to the end of this page... feel free to
                                check out my{' '}
                                <NextLink href="/hello" passHref>
                                    <Link isExternal color={linkColor[colorMode]}>
                                        /hello
                                    </Link>
                                </NextLink>{' '}
                                where you can find even more about me in fast link.
                            </Text>
                        </Flex>
                    </motion.div>
                </Stack>
            </Container>
        </>
    );
}
