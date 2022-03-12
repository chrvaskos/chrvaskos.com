import type { NextPage } from 'next'
import Container from 'components/Container'
import { SocialLink } from 'components/AboutSection'
import { SocialLinkContainer } from 'styles/AboutSectionStyles'
import {
  Heading,
  Paragraph,
  SecondaryHeading,
  TertiaryHeading,
} from 'styles/SecondaryStyles'
import Image from 'next/image'
import Avatar from 'public/images/avatar.webp'

const About: NextPage = () => {
  return (
    <Container title="About - Christoforidis Vasilis">
      <Heading>About Me</Heading>
      <SecondaryHeading>
        Christoforidis Vasilis - BSc Computer Science, Aristotle University of
        Thessaloniki
      </SecondaryHeading>
      <TertiaryHeading>Social Links</TertiaryHeading>
      <SocialLinkContainer>
        <SocialLink
          href="https://github.com/chrvaskos"
          text="Github"
          playAnimate={false}
        />
        <SocialLink
          href="https://www.linkedin.com/in/christoforidis-vasileios/"
          text="LinkedIn"
          playAnimate={false}
        />
        <SocialLink
          href="mailto:chrvaskos@gmail.com?subject=Let's work together!"
          text="Mail"
          playAnimate={false}
        />
      </SocialLinkContainer>
      <TertiaryHeading>Bio</TertiaryHeading>
      <Paragraph>
        Hi there! My name is Vasilis. I'm passionate about web development, and
        especially the front-end. I've graduated from Aristotle University of
        Thessaloniki with a BSc in Computer Science. Right now I'm working on
        creating a portfolio of projects where I can show off my skills and love
        about what I do, including this website. In addition to that, I'm trying
        to document &amp; share everything new and interesting I learn through
        my blog posts.
      </Paragraph>
      <TertiaryHeading>Headshot</TertiaryHeading>
      <Paragraph>
        <Image
          src={Avatar}
          height={200}
          width={200}
          alt="Christoforidis Vasilis"
        ></Image>
      </Paragraph>
    </Container>
  )
}

export default About
