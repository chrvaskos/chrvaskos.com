import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {
  DarkModeBtn,
  DarkModeBtnSvg,
  DocumentLink,
  HeaderNav,
  HeaderNavItems,
  NavLink,
  SkipNavBtn,
} from '../styles/HeaderStyles'
import { DocumentDownloadArrow } from '../assets/svg/ArrowIcons'
import MobileMenu from './MobileMenu'

type NavItemProps = {
  href: string
  text: string
}

const Header = (): JSX.Element => {
  const router = useRouter()
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => setMounted(true), [])

  const NavItem = (props: NavItemProps): JSX.Element => {
    const { href, text } = props

    const isActive: boolean = router.asPath === href

    return (
      <Link href={href} passHref>
        {isActive ? (
          <NavLink Active>{text}</NavLink>
        ) : (
          <NavLink>{text}</NavLink>
        )}
      </Link>
    )
  }

  return (
    <HeaderNav>
      <SkipNavBtn href="#skip">Jump to content</SkipNavBtn>
      <HeaderNavItems flexStart>
        <MobileMenu />
        <NavItem href="/" text="Home" />
        <NavItem href="/blog" text="Blog" />
        <NavItem href="/projects" text="Projects" />
      </HeaderNavItems>
      <HeaderNavItems flexEnd>
        <a
          href="Christoforidis-Vasileios-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="Christoforidis-Vasileios-CV"
          style={{ zIndex: 40 }}
        >
          <DocumentLink className="group">
            <DocumentDownloadArrow />
            Resume
          </DocumentLink>
        </a>
        <DarkModeBtn
          aria-label="Toggle Dark Mode"
          type="button"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (
            <DarkModeBtnSvg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              {resolvedTheme === 'dark' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </DarkModeBtnSvg>
          )}
        </DarkModeBtn>
      </HeaderNavItems>
    </HeaderNav>
  )
}

export default Header
