import Image from 'next/image'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
// @ts-ignore: Could not find a declaration file for module 'marked'.
import { marked } from 'marked'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime, { ReadTimeResults } from 'reading-time'
import { debounce } from 'ts-debounce'
import 'twin.macro'
//Utils
import { calcPercent } from 'utils'
//Styles
import { ProgressBar, Prose } from 'styles/LayoutStyles'
//Components
import Container from 'components/Container'
import { rehype } from 'rehype'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github-dark.css'

type BlogProps = {
  frontMatter: { [key: string]: any }
  slug: string
  rehypeContent: string
  readingTime: ReadTimeResults
}

const PostPage: NextPage<BlogProps> = props => {
  const {
    frontMatter: { title, date, cover_image, edit },
    slug,
    rehypeContent,
    readingTime,
  } = props

  const [progress, setProgress] = useState<number>(0)

  const calcPercentDebounced = debounce(
    e => {
      setProgress(calcPercent)
    },
    200,
    {
      isImmediate: true,
    }
  )

  useEffect(() => {
    window.addEventListener('scroll', calcPercentDebounced)
    return () => {
      window.removeEventListener('scroll', calcPercentDebounced)
    }
  }, [calcPercentDebounced])

  return (
    <>
      <ProgressBar style={{ width: `${progress}%` }} />
      <Container
        title={title + ' - Christoforidis Vasilis'}
        description={
          title + " - I'm a Front-end developer and CSS enthusiast from Greece."
        }
        image={'https://www.chrvaskos.com' + cover_image}
        date={date}
      >
        <Prose>
          <div tw="prose pt-12">
            <h1>{title}</h1>
            <p tw="font-semibold">
              Written by Christoforidis Vasilis &#8226; {readingTime.text}
              <br />
              Posted on {date} &#8226; Last updated on {edit}
            </p>
            <Image src={cover_image} width={750} height={422} alt={title} />
            <div
              dangerouslySetInnerHTML={{ __html: marked.parse(rehypeContent) }}
            ></div>
          </div>
        </Prose>
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }: any) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.mdx'),
    'utf-8'
  )

  const { data: frontMatter, content } = matter(markdownWithMeta)

  const rehypeContent = await rehype()
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      properties: {
        className: ['anchor'],
      },
    })
    .use(rehypeCodeTitles)
    .use(rehypeHighlight, { aliases: { typescript: 'typescript' } })
    .use(remarkGfm)
    .process(marked.parse(content))

  return {
    props: {
      frontMatter,
      slug,
      content,
      readingTime: readingTime(content),
      rehypeContent: String(rehypeContent),
    },
  }
}

export default PostPage
