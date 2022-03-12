import Link from 'next/link'
import useDelayedRender from 'use-delayed-render'
import { useState, useEffect } from 'react'
import {
  MobileMenuAnchor,
  MobileMenuButton,
  MobileMenuList,
  MobileMenuListItem,
} from 'styles/MobileMenuStyles'
import {
  FooterCopyright,
  FooterLabel,
  FooterSocials,
} from 'styles/FooterStyles'
import { Github, LinkedIn, Mail } from 'assets/svg/SocialIcons'

const MobileMenu = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  )

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.height = ''
      document.body.style.width = ''
    } else {
      setIsMenuOpen(true)
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.height = '100%'
      document.body.style.width = '100%'
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.height = ''
      document.body.style.width = ''
    }
  }, [])

  return (
    <>
      <MobileMenuButton aria-label="Toggle menu" onClick={toggleMenu}>
        {isMenuOpen ? (
          <CrossIcon data-hide={!isMenuOpen} />
        ) : (
          <MenuIcon data-hide={isMenuOpen} />
        )}
      </MobileMenuButton>
      {isMenuMounted && (
        <MobileMenuList style={isMenuRendered ? { opacity: '100%' } : {}}>
          <MobileMenuListItem
            style={
              isMenuRendered
                ? {
                    transitionDelay: '160ms',
                    transform: 'translateX(0)',
                    opacity: '100%',
                    width: '100%',
                  }
                : {}
            }
          >
            <Link href="/" passHref>
              <MobileMenuAnchor>Home</MobileMenuAnchor>
            </Link>
          </MobileMenuListItem>
          <MobileMenuListItem
            style={
              isMenuRendered
                ? {
                    transitionDelay: '200ms',
                    transform: 'translateX(0)',
                    opacity: '100%',
                    width: '100%',
                  }
                : {}
            }
          >
            <Link href="/about" passHref>
              <MobileMenuAnchor>About</MobileMenuAnchor>
            </Link>
          </MobileMenuListItem>
          <MobileMenuListItem
            style={
              isMenuRendered
                ? {
                    transitionDelay: '240ms',
                    transform: 'translateX(0)',
                    opacity: '100%',
                    width: '100%',
                  }
                : {}
            }
          >
            <Link href="/blog" passHref>
              <MobileMenuAnchor>Blog</MobileMenuAnchor>
            </Link>
          </MobileMenuListItem>
          <MobileMenuListItem
            style={
              isMenuRendered
                ? {
                    transitionDelay: '280ms',
                    transform: 'translateX(0)',
                    opacity: '100%',
                    width: '100%',
                  }
                : {}
            }
          >
            <Link href="/projects" passHref>
              <MobileMenuAnchor>Projects</MobileMenuAnchor>
            </Link>
          </MobileMenuListItem>
          <MobileMenuListItem
            style={
              isMenuRendered
                ? {
                    transitionDelay: '320ms',
                    transform: 'translateX(0)',
                    opacity: '100%',
                    width: '100%',
                  }
                : {}
            }
          >
            <Link href="/contact" passHref>
              <MobileMenuAnchor>Contact</MobileMenuAnchor>
            </Link>
          </MobileMenuListItem>
          <FooterLabel
            style={
              isMenuRendered
                ? {
                    transitionDelay: '200ms',
                    opacity: '100%',
                  }
                : { opacity: '0%' }
            }
          >
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
        </MobileMenuList>
      )}
    </>
  )
}

export default MobileMenu

const MenuIcon = (props: JSX.IntrinsicElements['svg']) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const CrossIcon = (props: JSX.IntrinsicElements['svg']) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  )
}
