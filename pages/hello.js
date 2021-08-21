import React from 'react'
import { NextSeo } from 'next-seo'
import {
    Stack,
    Flex,
    Heading,
    Avatar,
    Text
} from '@chakra-ui/react'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'

import SocialLink from '../components/SocialLink'
import Container from '../components/Container'
import { CodeIcon } from '../components/CustomIcons'
import {
    FiGithub,
    FiInstagram,
    FiYoutube,
    FiLinkedin,
} from "react-icons/fi";

const url = 'https://rahmatsubandi.me/hello'
const titleSEO = 'Hello – Rahmat Subandi'
const description = 'I’m a developer, writer, creator, and student. Use the links below to learn more.'

const Hello = () => {

    const { data } = useSWR('/api/links', fetcher)
    const title = data?.title

    return (
        <>
            <NextSeo
                title={titleSEO}
                description={description}
                canonical={url}
                openGraph={{
                    url,
                    title,
                    description
                }}
            />
            <Container>
                <Stack
                    as="main"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="700px"
                    px={2}
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        width={['100%', '500px', '700px']}
                    >
                        <Avatar
                            size='2xl'
                            name="Rahmat Subandi"
                            src="../images/profile.jpg"
                            mr={2}
                            alignSelf="center"
                            my={5}
                        />
                        <Heading letterSpacing="tight" mb={4} as="h1" size="xl" alignSelf="center">
                            Hello 👋, I'm Rahmat Subandi
                        </Heading>
                        <Text alignSelf="center" maxWidth="450px" textAlign="center" mb={4}>You can call me Rahmat, i'm a developer, writer, creator, and student. Use the links below to learn more.</Text>
                        <SocialLink name="View my apps opensource" href="https://github.com/rahmatsubandi?tab=repositories" icon={FiGithub} />
                        <SocialLink name="View my videos" href="https://www.youtube.com/channel/UCHXxNuytKUbfsYjRS357gtw" icon={FiYoutube} />
                        <SocialLink name="Connect with me on Instagram" href="https://instagram.com/rhmtin" icon={FiInstagram} />
                        <SocialLink name="Connect with me on Linkedin" href="https://www.linkedin.com/in/rahmat-subandi-7238391b4/" icon={FiLinkedin} />
                        <SocialLink name="Back to my website!" href="/" icon={CodeIcon} />
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export default Hello
