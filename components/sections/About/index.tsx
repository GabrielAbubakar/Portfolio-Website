import { once } from "events";
import React from "react";
import { Header, SectionName } from "../../styled/Components.styled";
import Container, { Button, Content, Paragraph } from "./About.styled";

const copy = [
  "Hello there, I’m Gabriel a versatile and excellence driven software engineer committed to building web and mobile products that are accessible, fault-tolerant, functional and user-centric.",
  "My primary technical language for web and mobile cross-platform development is Javascript/Typescript with frameworks and tools including React, React Native, Next and Vue. I also have experience working on backend projects with NodeJS, Express.",
  "For style presentation on the web I make use of frontend libraries  including but not limited to CSS/SCSS, Styled Components and TailwindCSS.",
  "I write tests for my code so as to increase code confidence and reduce debugging times by using Typescript for static testing, and React Testing Library/Jest for the testing of components and their functionalities in React. I have also taken to time to learn about QA testing strategies in order to become a more well rounded software engineer and to be able to write better tests for my code.",
  "Currently searching for opportunities that would challenge me and allow me to grow as a software engineer, I am open to working in a remote or hybrid setting. I am also open to working in a team or independently.",
];

const About: React.FunctionComponent = () => {
  return (
    <Container id="about">
      <Header>About.</Header>

      <Content>
        {copy.map((paragraph, index) => (
          <Paragraph key={index}>{paragraph}</Paragraph>
        ))}

        <Button
          target="_blank"
          href="https://docs.google.com/document/d/18lJt11IEQF1Zmas8BM8HMa5GFyBq36h4Fkf7U5PP8Tw/edit?usp=drive_link"
          rel="noreferrer"
        >
          Resume
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4 13.5L0 12.1L9.6 2.5H1V0.5H13V12.5H11V3.9L1.4 13.5Z"
              fill="inherit"
            />
          </svg>
        </Button>
      </Content>

      <SectionName
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1, transition: { duration: 4 } }}
        viewport={{ once: true }}
      >
        About.
      </SectionName>
    </Container>
  );
};

export default About;
