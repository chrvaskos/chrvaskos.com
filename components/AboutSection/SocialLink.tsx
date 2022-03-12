import { Github, LinkedIn, Mail } from 'assets/svg/SocialIcons'
import { SocialLinkAnchor } from 'styles/AboutSectionStyles'

type SocialLinkProps = {
  href: string
  text: string
  playAnimate?: boolean
}

const SocialLink = (props: SocialLinkProps): JSX.Element => {
  const { href, text, playAnimate = true } = props

  return (
    <SocialLinkAnchor
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      animate={{ opacity: 1 }}
      initial={playAnimate ? { opacity: 0 } : { opacity: 1 }}
      transition={{
        duration: 0.1,
        ease: [0.6, 0.05, -0.01, 0.9],
        delay: text === 'Github' ? 0.7 : text === 'LinkedIn' ? 0.9 : 1.1,
      }}
    >
      {text === 'Github' ? (
        <Github />
      ) : text === 'LinkedIn' ? (
        <LinkedIn />
      ) : (
        <Mail />
      )}
      {text}
    </SocialLinkAnchor>
  )
}

export default SocialLink
