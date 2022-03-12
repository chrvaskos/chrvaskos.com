import type { NextPage } from 'next'
import Container from 'components/Container'
import {
  Heading,
  List,
  ListItem,
  Paragraph,
  SecondaryHeading,
  TertiaryHeading,
} from 'styles/SecondaryStyles'
import Link from 'next/link'

const SiteMap: NextPage = () => {
  const mainPages: string[] = ['Home', 'About', 'Blog', 'Projects']

  const secondaryPages: string[] = [
    'Business-Card',
    'Contact',
    'Resume',
    'Social',
    'Uses',
  ]

  return (
    <Container title="Site Map - Christoforidis Vasilis">
      <Heading>Site Map</Heading>
      <SecondaryHeading>
        Links to every page can be found below.
      </SecondaryHeading>
      <TertiaryHeading>Main Content</TertiaryHeading>
      <List>
        {mainPages.map(page => (
          <ListItem key={page}>
            <Link href={page === 'Home' ? '/' : page.toLowerCase()}>
              <a>{page}</a>
            </Link>
          </ListItem>
        ))}
      </List>
      <Paragraph>
        Below are a few more pages not worthy of featuring on the main index
        page.
      </Paragraph>
      <List>
        {secondaryPages.map(page => (
          <ListItem key={page}>
            <Link href={page.toLowerCase()}>
              <a>{page}</a>
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default SiteMap
