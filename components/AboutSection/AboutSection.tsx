import Image from 'next/image'
import Avatar from 'public/images/avatar.webp'
import NoisyTexture from 'public/images/noisy-texture.webp'
import {
  AboutSectionBox,
  AboutSectionImage,
  AboutSectionInfo,
  Noise,
  SocialLinkContainer,
} from 'styles/AboutSectionStyles'
import CustomCursorContext from 'context/CustomCursor/CustomCursorContext'
import { useContext } from 'react'
import 'twin.macro'
import ArrowLink from 'components/ArrowLink'
import { motion } from 'framer-motion'
import { SocialLink } from './'

type AboutProps = {
  setCursorText: any
}

const AboutSection = (props: AboutProps): JSX.Element => {
  const { setCursorText } = props

  const { setType } = useContext(CustomCursorContext)

  return (
    <AboutSectionBox>
      <AboutSectionInfo>
        <motion.h1
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 72, opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.6, 0.05, -0.01, 0.9],
            delay: 0.2,
          }}
        >
          Christoforidis Vasilis
        </motion.h1>
        <motion.h2
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 72, opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.6, 0.05, -0.01, 0.9],
            delay: 0.35,
          }}
        >
          BSc Computer Science, Aristotle University of Thessaloniki
        </motion.h2>
        <motion.p
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 72, opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.6, 0.05, -0.01, 0.9],
            delay: 0.5,
          }}
        >
          Enthusiastic and hard-working team player with a passion for designing
          and creating beautiful websites, optimizing for the web and mobile,
          and cross-browser testing.
        </motion.p>
        <SocialLinkContainer>
          <SocialLink href="https://github.com/chrvaskos" text="Github" />
          <SocialLink
            href="https://www.linkedin.com/in/christoforidis-vasileios/"
            text="LinkedIn"
          />
          <SocialLink
            href="mailto:chrvaskos@gmail.com?subject=Let's work together!"
            text="Mail"
          />
        </SocialLinkContainer>
        <ArrowLink
          href="/about"
          text="Learn more about me"
          transitionDelay={1.1}
        />
      </AboutSectionInfo>
      <AboutSectionImage
        key="aboutImage"
        animate={{ scale: 1 }}
        initial={{ scale: 2 }}
        transition={{
          duration: 1.5,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
        exit={{ scale: 2 }}
      >
        <div
          tw="relative"
          onMouseEnter={() => {
            setCursorText('')
            setType('mix')
          }}
          onMouseLeave={() => {
            setCursorText('Read')
            setType('default')
          }}
        >
          <Noise>
            <Image src={NoisyTexture} alt="Noisy texture" tw="z-10" />
          </Noise>
          <Image
            src={Avatar}
            alt="Christoforidis Vasilis"
            tw="z-10 hidden"
          ></Image>
        </div>
      </AboutSectionImage>
    </AboutSectionBox>
  )
}

export default AboutSection
