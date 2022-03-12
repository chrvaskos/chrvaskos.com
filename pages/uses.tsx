import type { NextPage } from 'next'
import Container from 'components/Container'
import {
  Heading,
  List,
  ListItem,
  SecondaryHeading,
  TertiaryHeading,
} from 'styles/SecondaryStyles'

const Uses: NextPage = () => {
  const codingArr: string[] = [
    'Editor: VS Code',
    'Theme: Community Material Theme Palenight High Contrast',
  ]

  const vsCodeExtensions: string[] = [
    'Prettier',
    'vs-code-icons',
    'GitLens',
    'Live Server',
    'indent-rainbow',
    'Better Comments',
    'Various Syntax highlighing & IntelliSense extensions',
  ]

  const browserExtensions: string[] = [
    'uBlock Origin',
    'Wappalyzer',
    'WhatFont',
    'React Developer Tools',
    'axe DevTools',
    'Lighthouse',
  ]

  const servicesAndTools: string[] = [
    'GitHub',
    'Figma',
    'Photoshop',
    'Microsoft To Do',
  ]

  return (
    <Container title="Uses - Christoforidis Vasilis">
      <Heading>Uses</Heading>
      <SecondaryHeading>
        Tech that I'm currently using for coding.
      </SecondaryHeading>
      <TertiaryHeading>Coding</TertiaryHeading>
      <List>
        {codingArr.map(item => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </List>
      <TertiaryHeading>VS Code Extensions</TertiaryHeading>
      <List>
        {vsCodeExtensions.map(extension => (
          <ListItem key={extension}>{extension}</ListItem>
        ))}
      </List>
      <TertiaryHeading>Browser Extensions</TertiaryHeading>
      <List>
        {browserExtensions.map(browserExtension => (
          <ListItem key={browserExtension}>{browserExtension}</ListItem>
        ))}
      </List>
      <TertiaryHeading>Services &amp; Tools</TertiaryHeading>
      <List>
        {servicesAndTools.map(service => (
          <ListItem key={service}>{service}</ListItem>
        ))}
      </List>
    </Container>
  )
}

export default Uses
