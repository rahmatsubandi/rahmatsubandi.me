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
import fetcher from '../scripts/fetcher'

import SocialLink from '../components/SocialLink'
import Container from '../components/Container'
import { CodeIcon } from '../components/CustomIcons'
import { 
    FaLinkedin,
    FaGithub,
    FaGitlab,
    FaYoutube,
    FaMedium,
    FaInstagram,
    FaFacebook,
    FaTumblr
} from 'react-icons/fa'

const url = 'https://rahmatsubandi.me/hello'
const titleSEO = 'Hello – Rahmat Subandi'
const description = 'I’m a developer, writer, and tech enthusiast. Use the links below to learn more.'

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
                            src="../images/profile.png"
                            mr={2}
                            alignSelf="center"
                            my={5}
                        />
                        <Heading letterSpacing="tight" mb={4} as="h1" size="xl" alignSelf="center">
                            Hello 👋, I'm Rahmat Subandi
                        </Heading>
                        <Text alignSelf="center" maxWidth="450px" textAlign="center" mb={4}>You can call me Rahmat, i'm a developer, writer, and tech enthusiast. Use the links below to learn more.</Text>
                        <SocialLink name="Visit to my website!" href="/" icon={CodeIcon} />
                        <SocialLink name="Connect with me on Linkedin" href="https://www.linkedin.com/in/rahmat-subandi-7238391b4/" icon={FaLinkedin} />
                        <SocialLink name="View my repository in GitHub" href="https://github.com/rahmatsubandi?tab=repositories" icon={FaGithub} />
                        <SocialLink name="View my repository in GitLab" href="https://gitlab.com/rahmatsubandi" icon={FaGitlab} />
                        <SocialLink name="View my Medium" href="https://medium.com/@rhmtin12" icon={FaMedium} />
                        <SocialLink name="View my Instagram" href="https://instagram.com/rhmtin" icon={FaInstagram} />
                        <SocialLink name="View my Facebook" href="https://www.facebook.com/subandi12" icon={FaFacebook} />
                        <SocialLink name="Read my Rhymes" href="https://brontoosaurus.tumblr.com/" icon={FaTumblr} />
                        <SocialLink name="Watch my Youtube" href="https://www.youtube.com/channel/UCHXxNuytKUbfsYjRS357gtw" icon={FaYoutube} />
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export default Hello
