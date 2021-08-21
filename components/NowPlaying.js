import useSWR from "swr";
import {
  Flex,
  Link,
  Heading,
  Text,
  Stack,
  useColorMode,
  Image,
  Box,
} from "@chakra-ui/react";
import fetcher from "../lib/fetcher";
import { SiSpotify } from "react-icons/si";

export default function NowPlaying() {
  const { data } = useSWR("/api/now-playing", fetcher);
  const { colorMode } = useColorMode();
  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
  };
  const boxShadowColor = {
    light: "0px 8px 26px rgba(0, 0, 0, 0.1)",
    dark: "0px 8px 26px rgba(0, 0, 0, 0.9)",
  };

  return (
    <Box
      _hover={{
        boxShadow: boxShadowColor[colorMode],
      }}
    >
      <Link
        href={
          data?.isPlaying
            ? data.songUrl
            : "https://open.spotify.com/user/31xzubu5orhdqbnj2jtz5rlre3he?si=1YKfVrycSfW8FYzAQlebKg"
        }
        isExternal
        mt={4}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Flex
          align="center"
          border="1px solid"
          borderColor={borderColor[colorMode]}
          borderRadius={4}
          p={4}
        >
          {data?.isPlaying ? (
            <Image
              src={data?.albumImageUrl}
              alt={data?.album}
              width="100px"
              ml={2}
              mr={4}
            />
          ) : (
            <Text mr={3}>
              <SiSpotify size={100} color={"#1ED760"} />
            </Text>
          )}
          <Stack>
            <Flex align="center" justify="center">
              <Heading
                as="h4"
                size="md"
                fontWeight="bold"
                mb={2}
                _hover={{
                  textDecoration: "none",
                }}
              >
                {data?.isPlaying ? data.artist : "Spotify"}
              </Heading>
            </Flex>
            <Text
              mb={3}
              _hover={{
                textDecoration: "underline",
              }}
            >
              {data?.isPlaying ? data.title : "Not Listening"}
            </Text>
            <Flex justifyContent="flex-end">
              <SiSpotify size={20} color={"#1ED760"} />
            </Flex>
          </Stack>
        </Flex>
      </Link>
    </Box>
  );
}
