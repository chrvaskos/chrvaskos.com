import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

// Context
import CustomCursorManager from '../context/CustomCursor/manager'

//Utils
import { sortByDate } from '../utils'

//Components
import Container from '../components/Container'
import { CustomCursor } from '../components/CustomCursor'
import { AboutSection } from 'components/AboutSection'
import BlogSection from 'components/BlogSection/BlogSection'
import { Project, ProjectsSection } from 'components/ProjectsSection'
import { ContactSection } from 'components/ContactSection'

/**
 * Home: The Landing page of the web app
 * @return {JSX.Element} The JSX Code for the Home Page
 */

type Props = {
  posts: Array<Object>
}

export const Home: NextPage<Props> = (props: Props) => {
  const { posts } = props

  const [cursorText, setCursorText] = useState('Read')

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    return () => {
      window.history.scrollRestoration = 'auto'
    }
  }, [])

  return (
    <CustomCursorManager>
      <CustomCursor text={cursorText} />
      <Container>
        <AboutSection setCursorText={setCursorText} />
        <BlogSection
          blogTitle="Latest Post"
          posts={posts}
          mapAll={false}
          initialY={72}
          initialOpacity={0}
          delay={1.4}
        />
        <ProjectsSection>
          <Project
            href="https://github.com/chrvaskos/BurdenOff"
            name="Burden Off"
            description="A complete CRUD web application made collaboratively with fellow students during our undergraduate studies. I was completely responsible for the UI/UX design and front-end development. I've actively participated in discussions about the back-end as well."
            tags={['React', 'Bootstrap', 'MySQL', 'Express.js']}
            image="/images/projects/burdenoff.webp"
          />
          <Project
            href="https://github.com/chrvaskos/card-sorting"
            name="Card Sorting Tool"
            description='A card sorting tool that was created to be used in an experiment for my thesis entitled "Web usability: Task-based card sorting".'
            tags={['React', 'Bootstrap', 'jQuery']}
            image="/images/projects/cardsorting.webp"
          />
        </ProjectsSection>
        <ContactSection />
      </Container>
    </CustomCursorManager>
  )
}

export default Home

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
    const slug = filename.replace('.mdx', '')

    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontMatter, content } = matter(markdownWithMeta)

    return {
      slug,
      frontMatter,
      readingTime: readingTime(content),
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
