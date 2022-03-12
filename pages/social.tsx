import type { NextPage } from 'next'
import Container from 'components/Container'
import { SocialLinkContainer } from 'styles/AboutSectionStyles'
import { SocialLink } from 'components/AboutSection'
import {
  Heading,
  SecondaryHeading,
  SocialContainer,
} from 'styles/SecondaryStyles'

const Social: NextPage = () => {
  return (
    <Container title="Social - Christoforidis Vasilis">
      <Heading>Social</Heading>
      <SecondaryHeading>
        Links to all my social media can be found below.
      </SecondaryHeading>
      <SocialContainer>
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
      </SocialContainer>
    </Container>
  )
}

export default Social
