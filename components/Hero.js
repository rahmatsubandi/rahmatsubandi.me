import {
    useColorMode,
    Button,
    Flex,
    Box,
    useColorModeValue,
    Heading,
    Text,
    AspectRatio,
    Link,
    ButtonGroup,
    SimpleGrid,
    Image,
} from '@chakra-ui/react'
import { DownloadIcon, LinkedInIcon } from '../components/CustomIcons'
import { motion } from "framer-motion"

export default function Hero() {
    const { colorMode } = useColorMode();

    const headingColor = {
        light: "green.400",
        dark: "green.600",
    };
    return (
        <Box bgColor={useColorModeValue("rgb(248, 250, 252)", "gray.900")}>
            <Flex
                w="100%"
                flexDir={["column", "column", "row"]}
                align="center"
                px={4}
                mt={[8, 8, 16]}
                mb={8}
                maxW="1200px"
                mx="auto"
            >
                <Flex flexDir="column" w={["100%", "100%", "50%"]} mr={[0, 0, 4]}>
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: .7, delay: .4 }}>
                        <Heading letterSpacing="tight" mb={4} as="h1" size="md" fontWeight={700}>Hi, I'm</Heading>
                        <Heading letterSpacing="tight" mb={4} as="h1" size="2xl" fontWeight={700} color={headingColor[colorMode]}>Rahmat Subandi</Heading>
                    </motion.div>
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: .7, delay: .8 }}
                    >
                        <Text
                            fontSize="lg"
                            color={useColorModeValue("gray.600", "gray.500")}
                            mb={6}
                        >
                            A <strong>developer</strong>, <strong>writer</strong>, and <strong>tech enthusiast.</strong>. You've stumbled onto my online portfolio, resume, blog, and all things in between.
                        </Text>
                    </motion.div>
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: .7, delay: 1.2 }}
                    >
                        <Flex flexDir={["column", "row", "row"]}>
                            <Link href="https://www.linkedin.com/in/rahmat-subandi-7238391b4/" _hover={{ textDecor: 'none' }} w={["100%", "100%", null]} mr={[0, 2, 2]} mb={[2, 0, 0]} isExternal>
                                <Button
                                    w={["100%", "100%", null]}
                                    colorScheme="blue"
                                    size="md"
                                    leftIcon={<LinkedInIcon fontSize="xl" />}
                                    boxShadow={useColorModeValue("0px 8px 26px rgba(0, 0, 0, 0.2)", "0px 8px 26px rgba(0, 0, 0, 0.7)")}
                                    _hover={{ transform: "translateY(-2px)", opacity: .85, bgColor: useColorModeValue("blue.600", "blue.500"), color: "white" }}
                                >
                                    Visit my LinkedIn
                                </Button>
                            </Link>
                            <Link href="./cv/CV - Rahmat Subandi.pdf" _hover={{ textDecor: 'none' }} w={["100%", "100%", null]} isExternal>
                                <Button
                                    w={["100%", "100%", null]}
                                    colorScheme="gray"
                                    variant="outline"
                                    size="md"
                                    leftIcon={<DownloadIcon fontSize="xl" />}
                                    boxShadow={useColorModeValue("0px 8px 26px rgba(0, 0, 0, 0.2)", "0px 8px 26px rgba(0, 0, 0, 0.7)")}
                                    _hover={{ transform: "translateY(-2px)", bgColor: useColorModeValue("gray.100", "gray.800") }}
                                >
                                    Download my CV
                                </Button>
                            </Link>
                        </Flex>
                    </motion.div>
                </Flex>
                <Box mt={[10, 10, 0]} w={["100%", "100%", "50%"]}>
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: .7, delay: 1.6 }}
                    >
                        <AspectRatio ratio={16 / 9}>
                            {/* <iframe src="https://www.youtube.com/embed/uNKBWrkMO_Q" alt="Featured YouTube video" allowFullScreen={true} style={{ borderRadius: 10 }} /> */}
                            <Image alt={'Banner'} objectFit={'cover'} src={'../images/profile.png'} style={{ borderRadius: 10 }}/>
                        </AspectRatio>
                    </motion.div>
                </Box>
            </Flex>
        </Box>
    )
}
