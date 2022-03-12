import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import {
  PostCardImage,
  PostCardInfo,
  PostCardInner,
  PostCardOuter,
} from 'styles/BlogSectionStyles'
import 'twin.macro'
import CustomCursorContext from '../context/CustomCursor/CustomCursorContext'

type PostProps = {
  post: any
  key: number
  initialY: number
  initialOpacity: number
  delay: number
  headingLevel?: number
}

const Post = (props: PostProps): JSX.Element => {
  const { post, initialY, initialOpacity, delay, headingLevel = 4 } = props

  const { setType } = useContext(CustomCursorContext)

  return (
    <PostCardOuter
      className="group"
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: initialY, opacity: initialOpacity }}
      transition={{
        duration: 0.5,
        ease: [0.6, 0.05, -0.01, 0.9],
        delay: delay,
      }}
    >
      <Link href={`/blog/${post.slug}`} passHref>
        <PostCardInner
          onMouseEnter={() => setType('read')}
          onMouseLeave={() => setType('default')}
        >
          <PostCardInfo>
            {headingLevel === 2 ? (
              <h2>{post.frontMatter.title}</h2>
            ) : (
              <h4>{post.frontMatter.title}</h4>
            )}
            <p>
              Last updated on {post.frontMatter.edit} — {post.readingTime.text}
            </p>
          </PostCardInfo>
          <PostCardImage>
            <Image
              src={post.frontMatter.cover_image}
              alt={post.frontMatter.title}
              width={750}
              height={422}
              tw="filter grayscale-[50%] group-hocus:grayscale-0 transition-all"
            />
          </PostCardImage>
        </PostCardInner>
      </Link>
    </PostCardOuter>
  )
}

export default Post
