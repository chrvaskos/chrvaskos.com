import type { NextPage } from 'next'
import Image from 'next/image'
import Avatar from 'public/images/avatar.webp'
import Container from 'components/Container'
import {
  BusinessCardContainer,
  BusinessCardImage,
  BusinessCardInfo,
  BusinessCardSocials,
} from 'styles/SecondaryStyles'
import { Github, LinkedIn, Mail } from 'assets/svg/SocialIcons'

const BusinessCard: NextPage = () => {
  return (
    <Container title="Business Card - Christoforidis Vasilis">
      <BusinessCardContainer>
        <BusinessCardInfo>
          <BusinessCardImage>
            <Image src={Avatar} alt="Christoforidis Vasilis"></Image>
          </BusinessCardImage>
          <div>
            <h1>Christoforidis Vasilis</h1>
            <h2>BSc Computer Science, Aristotle University of Thessaloniki</h2>
          </div>
        </BusinessCardInfo>
        <BusinessCardSocials>
          <a
            href="https://github.com/chrvaskos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/christoforidis-vasileios/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
          <a
            href="mailto:chrvaskos@gmail.com?subject=Let's work together!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail />
          </a>
        </BusinessCardSocials>
      </BusinessCardContainer>
    </Container>
  )
}

export default BusinessCard
