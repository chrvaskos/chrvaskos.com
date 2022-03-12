import { SitemapIcon, SocialsIcon } from 'assets/svg/GeneralIcons'
import Link from 'next/link'
import {
  FooterAnchor,
  FooterBigAnchor,
  FooterCol,
  FooterContainer,
  FooterCopyright,
  FooterGrid,
  FooterHR,
  FooterLabel,
  FooterSocials,
} from 'styles/FooterStyles'
import { Github, LinkedIn, Mail } from '../assets/svg/SocialIcons'

type FooterLinkProps = {
  href: string
  text: string
}

const Footer = (): JSX.Element => {
  const FooterLink = (props: FooterLinkProps): JSX.Element => {
    const { href, text } = props

    return (
      <Link href={href} passHref>
        <FooterAnchor>{text}</FooterAnchor>
      </Link>
    )
  }

  return (
    <FooterContainer>
      <FooterHR />
      <FooterGrid>
        <FooterCol>
          <Link href="/sitemap" passHref>
            <FooterBigAnchor>
              <SitemapIcon /> Sitemap
            </FooterBigAnchor>
          </Link>
          <FooterLink href="/" text="Home" />
          <FooterLink href="/blog" text="Blog" />
          <FooterLink href="/projects" text="Projects" />
        </FooterCol>
        <FooterCol>
          <FooterLink href="/about" text="About" />
          <FooterLink href="/contact" text="Contact" />
          <FooterLink href="/resume" text="Resume" />
        </FooterCol>
        <FooterCol>
          <Link href="/social" passHref>
            <FooterBigAnchor>
              <SocialsIcon /> Social
            </FooterBigAnchor>
          </Link>
          <FooterAnchor
            href="https://github.com/chrvaskos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </FooterAnchor>
          <FooterAnchor
            href="https://www.linkedin.com/in/christoforidis-vasileios/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </FooterAnchor>
          <FooterAnchor
            href="mailto:chrvaskos@gmail.com?subject=Let's work together!"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mail
          </FooterAnchor>
        </FooterCol>
      </FooterGrid>
      <FooterLabel>
        <FooterSocials>
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
        </FooterSocials>
        <FooterCopyright>
          &copy; {new Date().getFullYear()} - Christoforidis Vasileios
        </FooterCopyright>
      </FooterLabel>
    </FooterContainer>
  )
}

export default Footer
