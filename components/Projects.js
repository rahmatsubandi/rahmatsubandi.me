import React from "react";
import FeaturedProjectCard from "./FeaturedProjectCard";
import NextLink from "next/link";
import {
  useColorMode,
  Heading,
  Code,
  Badge,
  Flex,
  Button,
  Link,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Projects = () => {
  const { colorMode } = useColorMode();

  const iconColor = {
    light: "gray.600",
    dark: "gray.300",
  };

  return (
    <>
      <Heading letterSpacing="tight" mt={8} size="lg" fontWeight={700} as="h2">
        Featured Projects
      </Heading>
      <FeaturedProjectCard
        title="TBB"
        href="https://tbbagus.store/"
        src="https://ik.imagekit.io/rhmtin/featuredproject/tbb_RjhJRo9c6.png"
        alt="Image of tbb"
        color={iconColor[colorMode]}
      >
        TBB is an e-commerce application that implements an a priori algorithm.
        This project was made personally by me for the needs of the final
        project / thesis. This application is built using the PHP programming
        language using the <Code>Laravel</Code> <Badge>7</Badge> framework and{" "}
        <Code>MySQL</Code>
        database.
      </FeaturedProjectCard>
      <FeaturedProjectCard
        title="Survei Mandiri - ANRI"
        href="https://survei.anri.go.id/"
        src="https://ik.imagekit.io/rhmtin/featuredproject/anri_3W1aE9aUn.png"
        alt="Image of survei anri"
        color={iconColor[colorMode]}
      >
        This Independent Survey is my first project in a government
        agency/agencies ANRI, what I am working on in this project is to create
        a self-contained survey web application system specifically for ANRI
        institutions. With the <Code>PHP</Code> programming language and use
        framework <Code>Yii2</Code>.
      </FeaturedProjectCard>
      <FeaturedProjectCard
        title="JDIH"
        href="https://web.bnpb.go.id/jdih/"
        src="https://ik.imagekit.io/rhmtin/featuredproject/bnpb_IAMqy_-9Q.png"
        alt="Image of jdih"
        color={iconColor[colorMode]}
      >
        This Jaringan Dokumentasi dan Informasi Hukum (JDIH) is my project in a
        BNPB agency/government agency. This is my third project during my
        internship at BNPB. Built with the <Code>PHP</Code> programming language
        and using the framework <Code>Codeigniter 3</Code>.
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
    </>
  );
};

export default Projects;
