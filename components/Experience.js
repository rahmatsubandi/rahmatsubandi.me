import React from "react";
import ExperienceBox from "../components/ExperienceBox";
import { useColorMode, Heading, Code, Link } from "@chakra-ui/react";

const Experience = () => {
  const { colorMode } = useColorMode();

  const linkColor = {
    light: "green.400",
    dark: "green.600",
  };

  return (
    <>
      <Heading letterSpacing="tight" mt={8} size="lg" fontWeight={700} as="h2">
        Experience
      </Heading>

      <ExperienceBox
        name="Hans Development"
        years="2022 - Present"
        pos="Web Developer"
        badge_1="Full-time"
      >
        As a Web Developer, the tasks I do are: Install, configure, and perform
        maintenance on Internal and External <Code>VPS</Code>. Create a website
        according to company needs. Create custom themes and compatible with{" "}
        <Code>AMP</Code>. Create a website Blog Set basic <Code>SEO</Code> on
        the website. Perform routine maintenance on dozens of websites
      </ExperienceBox>

      <ExperienceBox
        name="Indonesia Crypto Network"
        years="2022"
        pos="Web Developer"
        badge_1="Full-time"
      >
        As a Web Developer who implements from Design to website interface,
        makes the necessary tools for implementation into websites, creates
        databases, and is fully responsible for creating dynamic websites so as
        to make it easier for the author/writer team. Some websites that I have
        worked on:
        <br />
        1.{" "}
        <Link
          href="https://coinfest.asia/"
          isExternal
          color={linkColor[colorMode]}
          target="_blank"
        >
          Coinfest Asia 2022
        </Link>
        <br />
        2.{" "}
        <Link
          href="https://coinvestasi.com/"
          isExternal
          color={linkColor[colorMode]}
          target="_blank"
        >
          Coinvestasi (On Going)
        </Link>
      </ExperienceBox>

      <ExperienceBox
        name="PT Lima Sekawan Indonesia"
        years="2021"
        pos="Full Stack Web Developer"
        badge_1="Part-Time"
      >
        At Hivefive I use the <Code>PHP</Code> programming language or{" "}
        <Code>CMS Wordpress</Code> for such fast needs both internally and
        externally. Not only that, I also maintain 3 VPS at once, the first is
        HiveFive's VPS, the second is the client's VPS which accommodates 30
        websites, and the third is the VPS client which accommodates 25
        websites. VPS1 and VPS2 have clients that continue to grow, my estimate
        is that one VPS can accommodate 50 websites. And I also create client
        websites such as company profiles, e-commerce, or other custom websites.
      </ExperienceBox>

      <ExperienceBox
        name="PT Bintang Inovasi Teknologi"
        years="2020 - Present"
        pos="Software Engineering Specialist"
        badge_1="Freelance"
        badge_2="Part Time"
      >
        At Owltech, I use <Code>PHP</Code>, <Code>HTML</Code> / <Code>CSS</Code>
        , <Code>JavaScript</Code>, <Code>SQL</Code> and several{" "}
        <Code>frameworks</Code> to create and update internal websites for
        Owltech and clients. I have completed 2 projects and more than 6 months
        part time or freelance work both in office and remote.
      </ExperienceBox>

      <ExperienceBox
        name="BNPB (Badan Nasional Penanggulangan Bencana)"
        years="2020 - 2021"
        pos="Junior Web Developer"
        badge_1="Internship"
      >
        At BNPB, I use <Code>PHP</Code>, <Code>HTML</Code> / <Code>CSS</Code>,{" "}
        <Code>JavaScript</Code>, <Code>SQL</Code> and several{" "}
        <Code>frameworks</Code> to create and update internal websites for BNPB.
        I have completed 3 projects and more than 3 months internship work both
        in office and remote.
      </ExperienceBox>

      <ExperienceBox
        name="PT Putra Mulia Telecommunication"
        years="2017 - 2018"
        pos="Telecommunications Technician"
        badge_1="Full Time"
      >
        At PMT I was a Telecommunications Technician whose job was to remotely,
        check, and make repairs to the first stage in terms of systems and lines
        at the BTS (Base Transceiver Station). The length of time I worked was 8
        months, from September 2017 to April 2018.
      </ExperienceBox>

      <ExperienceBox
        name="PT Putra Mulia Telecommunication"
        years="2016"
        pos="Telecommunications Technician Support"
        badge_1="Internship"
      >
        At PMT I was a vocational high school student majoring in Computer and
        Network Engineering. In this internship, my job and position is only as
        a support technician, and my job is only to help technicians to make LAN
        cables, check cables on switches, routers, and antennas in BTS. Like the
        job of a support technician in general. The length of my internship at
        PMT is 4 months, from January to April.
      </ExperienceBox>
    </>
  );
};

export default Experience;
