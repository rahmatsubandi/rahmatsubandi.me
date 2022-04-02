import React, { useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import {
  Text,
  Stack,
  Flex,
  Heading,
  useColorMode,
  Code,
  Box,
  Badge,
} from "@chakra-ui/react";

import Container from "../components/Container";
// import ProjectListFull from "../components/ProjectListFull";
import FeaturedProjectCard from "../components/FeaturedProjectCard";

const url = "https://rahmatsubandi.me/projects";
const title = "Projects – Rahmat Subandi";
const description =
  "Here are some of the open source projects and GitHub repos I am working on.";

const Projects = () => {
  const { colorMode } = useColorMode();

  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };

  const iconColor = {
    light: "gray.600",
    dark: "gray.300",
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
        bgGradient="linear(to-r, blue.600, blue.400)"
        position="sticky"
        transition="all 200ms linear"
        top={0}
        zIndex={100}
        w={`${width}%`}
      ></Box>
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            px={4}
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              Projects
            </Heading>
            <Text color={colorSecondary[colorMode]}>
              Below are some of the projects I've worked on in learning methods,
              original projects, and internships.
            </Text>
            <Heading
              letterSpacing="tight"
              as="h1"
              mt={4}
              size="xl"
              fontWeight={700}
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
              Lazadi is the first e-commerce site that I created with{" "}
              <Code>Codeigniter 3</Code>
              technology. This e-commerce creation aims to deepen what I have
              learned in <Code>Codeigniter 3</Code>.
            </FeaturedProjectCard>

            <FeaturedProjectCard
              title="2Cok"
              href="https://2cok.netlify.app/"
              src="/images/featuredproject/2cok.png"
              alt="Image of 2cok"
              color={iconColor[colorMode]}
            >
              2Cok is built with the <Code>ReactJS</Code> programming language.
              Making this 2cok is the final result of learning from the{" "}
              <Code>ReactJS</Code> bootcamp that I participated in in 2020.
            </FeaturedProjectCard>

            <FeaturedProjectCard
              title="TOCBTPRO"
              href="https://tocbtpro.com/"
              src="/images/featuredproject/tocbtpro.png"
              alt="Image of tocbtpro"
              color={iconColor[colorMode]}
            >
              TOCBTPRO is a learning web platform for prospective doctors who
              want to take the final exam. Tocbtpro is also one of my first real
              projects. TOCBTPRO is made in <Code>PHP</Code> using the{" "}
              <Code>Laravel</Code> version <Badge>5.5.20</Badge> framework.
            </FeaturedProjectCard>

            <FeaturedProjectCard
              title="JTS Derek"
              href="https://jtsderek.id/"
              src="/images/featuredproject/jts.png"
              alt="Image of jts"
              color={iconColor[colorMode]}
            >
              JTS Derek is a Website Company Profile which is engaged in towing
              the Jakarta and surrounding areas. JTS Derek is my second project
              in real life. JTS Derek is made with <Code>PHP</Code> language
              using <Code>Laravel</Code>
              framework version <Badge>6.5.0</Badge>.
            </FeaturedProjectCard>

            <FeaturedProjectCard
              title="Survei Mandiri - ANRI"
              href="https://survei.anri.go.id/"
              src="/images/featuredproject/anri.png"
              alt="Image of survei anri"
              color={iconColor[colorMode]}
            >
              This Independent Survey is my first project in a government
              agency/agencies ANRI, what I am working on in this project is to
              create a self-contained survey web application system specifically
              for ANRI institutions. With the <Code>PHP</Code> programming
              language and use framework <Code>Yii2</Code>.
            </FeaturedProjectCard>

            <FeaturedProjectCard
              title="PHPBUILDER"
              href="https://web.bnpb.go.id/phpbuilder/"
              src="/images/featuredproject/bnpb.png"
              alt="Image of phpbuilder"
              color={iconColor[colorMode]}
            >
              This PHPBUILDER is my project in a BNPB agency/government agency.
              This is my first project during my internship at BNPB. Built with
              the <Code>PHP</Code> programming language and using the{" "}
              <Code>Laravel</Code> framework version <Badge>6.30</Badge>.
            </FeaturedProjectCard>

            <FeaturedProjectCard
              title="RB"
              href="https://web.bnpb.go.id/rb/"
              src="/images/featuredproject/bnpb.png"
              alt="Image of rb"
              color={iconColor[colorMode]}
            >
              This Reformasi Birokrasi (RB) is my project in a BNPB
              agency/government agency. This is my second project during my
              internship at BNPB. Built with the <Code>PHP</Code> programming
              language and using the <Code>Laravel</Code> framework version{" "}
              <Badge>6.20.7</Badge>.
            </FeaturedProjectCard>

            <FeaturedProjectCard
              title="JDIH"
              href="https://web.bnpb.go.id/jdih/"
              src="/images/featuredproject/bnpb.png"
              alt="Image of jdih"
              color={iconColor[colorMode]}
            >
              This Jaringan Dokumentasi dan Informasi Hukum (JDIH) is my project
              in a BNPB agency/government agency. This is my third project
              during my internship at BNPB. Built with the <Code>PHP</Code>{" "}
              programming language and using the framework{" "}
              <Code>Codeigniter 3</Code>.
            </FeaturedProjectCard>

            <FeaturedProjectCard
              title="PPID"
              href="https://web.bnpb.go.id/ppid/"
              src="/images/featuredproject/bnpb.png"
              alt="Image of ppid"
              color={iconColor[colorMode]}
            >
              This Pejabat Pengelola Informasi Dan Dokumentasi (PPID) is my
              project in a BNPB agency/government agency. This is my fourth
              project during my internship at BNPB. Built with the{" "}
              <Code>PHP</Code> programming language and using the framework{" "}
              <Code>Codeigniter 3</Code>.
            </FeaturedProjectCard>

            <FeaturedProjectCard
              title="KPR Prima"
              href="https://komisipenjualankavling.com/"
              src="/images/featuredproject/kpr.png"
              alt="Image of kprprima"
              color={iconColor[colorMode]}
            >
              KPR Prima is an accounting and management website for plots and
              mortgages. KPR Prima is my third project in real life. KPR Prima
              is built with <Code>PHP</Code> language using <Code>Laravel</Code>{" "}
              framework version <Badge>5.4.36</Badge>.
            </FeaturedProjectCard>

            <FeaturedProjectCard
              title="Sopel Teteh"
              href="#"
              src="/images/featuredproject/sopel.png"
              alt="Image of sopel teteh"
              color={iconColor[colorMode]}
            >
              Sopel Teteh is a point of sales Website for selling Grilled
              Sausage, Grilled fish, Cornnet, and other things. Sopel Teteh is
              my fourth project in real life. Sopel Teteh was created with{" "}
              <Code>PHP</Code> language using <Code>Laravel</Code> framework
              version <Badge>8.29.0</Badge>.
            </FeaturedProjectCard>

            <FeaturedProjectCard
              title="Lara Stater"
              href="https://larastater.netlify.app/"
              src="/images/featuredproject/larastater.png"
              alt="Image of lara stater"
              color={iconColor[colorMode]}
            >
              Lara Stater is an <Code>open source</Code> project that I worked
              on alone. The purpose of this work is as my foundation in
              deepening my knowledge of programming in Laravel. And also another
              purpose is to make it easier for me, or other programmers to
              create a dynamic website with a monotonous prefix coverage of
              features. This project was created in <Code>PHP</Code> which of
              course uses the <Code>Laravel</Code> framework version
              <Badge>7.25.0</Badge>.
            </FeaturedProjectCard>

            <FeaturedProjectCard
              title="Karta Bhumi Nusanntara"
              href="https://karta-bhumi.co.id/"
              src="/images/featuredproject/kartabhumi.png"
              alt="Image of karta bhumi nusantara"
              color={iconColor[colorMode]}
            >
              Karta Bhumi Nusantara is a company profile website that is engaged
              in air technology. I created this website using{" "}
              <Code>CMS Wordpress</Code> version <Badge>5.8.2</Badge>.
            </FeaturedProjectCard>

            <FeaturedProjectCard
              title="Sinar Lentera Energi"
              href="https://sinarlenteraenergi.com/"
              src="/images/featuredproject/sinarlenteraenergi.png"
              alt="Image of sinar lentera energi"
              color={iconColor[colorMode]}
            >
              Sinar Lentera Energi is a company profile website that is engaged
              in tool sales for industry. I created this website using{" "}
              <Code>CMS Wordpress</Code> version <Badge>5.8.2</Badge>.
            </FeaturedProjectCard>

            <FeaturedProjectCard
              title="Jawara Lobster"
              href="https://jawaralobster.co.id/"
              src="/images/featuredproject/jawaralobster.png"
              alt="Image of jawara lobster"
              color={iconColor[colorMode]}
            >
              Jawara Lobster is a company profile website that is engaged in
              lobster food. I created this website using{" "}
              <Code>CMS Wordpress</Code> version <Badge>5.8.2</Badge>.
            </FeaturedProjectCard>

            <FeaturedProjectCard
              title="Sahabat Indah Logistik"
              href="https://sahabatindahlogistik.com/"
              src="/images/featuredproject/sahabatindahlogistik.png"
              alt="Image of sahabat indah logistik"
              color={iconColor[colorMode]}
            >
              Sahabat Indah Logistik is a company profile website that is
              engaged in land, air, and sea courier services. I created this
              website using <Code>CMS Wordpress</Code> version{" "}
              <Badge>5.8.2</Badge>.
            </FeaturedProjectCard>

            <FeaturedProjectCard
              title="Flowx Valve"
              href="https://flowx.co.id/"
              src="/images/featuredproject/flowx.png"
              alt="Image of flowx"
              color={iconColor[colorMode]}
            >
              Flowx Valve is a company profile website that is engaged in water
              machine. I created this website using <Code>CMS Wordpress</Code>{" "}
              version <Badge>5.8.2</Badge>.
            </FeaturedProjectCard>

            <FeaturedProjectCard
              title="Withdraw"
              href="https://withdraw.co.id/"
              src="/images/featuredproject/withdraw.png"
              alt="Image of withdraw"
              color={iconColor[colorMode]}
            >
              Withdraw is a group of freelancers including myself. Withdraws are
              just getting started and growing. So whatever is in it has not
              completely really worked very well. Website Withdraw is built with
              <Code>Laravel</Code> framework version <Badge>8.12</Badge>.
            </FeaturedProjectCard>

            <FeaturedProjectCard
              title="TBB"
              href="https://tbbagus.store/"
              src="/images/featuredproject/tbb.png"
              alt="Image of tbb"
              color={iconColor[colorMode]}
            >
              TBB is an e-commerce application that implements an a priori
              algorithm. This project was made personally by me for the needs of
              the final project / thesis. This application is built using the
              PHP programming language using the <Code>Laravel</Code>{" "}
              <Badge>7</Badge> framework and <Code>MySQL</Code>
              database.
            </FeaturedProjectCard>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Projects;
