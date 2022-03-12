import { BlogSection } from 'components/BlogSection'
import Container from 'components/Container'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { sortByDate } from 'utils'
import fs from 'fs'
import path from 'path'
import { NextPage } from 'next'
import CustomCursorManager from 'context/CustomCursor/manager'
import { CustomCursor } from 'components/CustomCursor'
import { useState } from 'react'

type BlogProps = {
  posts: Array<Object>
}

const Blog: NextPage<BlogProps> = (props: BlogProps) => {
  const { posts } = props

  const [cursorText, setCursorText] = useState('Read')

  return (
    <CustomCursorManager>
      <>
        <CustomCursor text={cursorText} />
        <Container title="Blog - Christoforidis Vasilis">
          <BlogSection
            blogTitle="My Blog Posts"
            posts={posts}
            arrowLinkHidden={true}
            mainHeading={true}
            postHeadingLevel={2}
          />
        </Container>
      </>
    </CustomCursorManager>
  )
}

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

export default Blog
