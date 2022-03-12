import Post from '../Post'
import { BlogSectionBox, PostsContainer } from 'styles/BlogSectionStyles'
import ArrowLink from 'components/ArrowLink'
import { motion } from 'framer-motion'

type BlogSectionProps = {
  posts: Array<Object>
  mapAll?: boolean
  initialY?: number
  initialOpacity?: number
  delay?: number
  blogTitle: string
  arrowLinkHidden?: boolean
  mainHeading?: boolean
  postHeadingLevel?: number
}

const BlogSection = (props: BlogSectionProps): JSX.Element => {
  const {
    posts,
    mapAll = true,
    initialY = 0,
    initialOpacity = 1,
    delay = 0,
    blogTitle,
    arrowLinkHidden = false,
    mainHeading = false,
    postHeadingLevel = 4,
  } = props

  return (
    <BlogSectionBox>
      {!mainHeading && (
        <motion.h3
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: initialY, opacity: initialOpacity }}
          transition={{
            duration: 0.5,
            ease: [0.6, 0.05, -0.01, 0.9],
            delay: delay,
          }}
        >
          {blogTitle}
        </motion.h3>
      )}
      {mainHeading && <h1>{blogTitle}</h1>}
      <PostsContainer>
        {posts
          .slice(0, mapAll ? posts.length : 1)
          .map((post: Object, index: number) => (
            <Post
              key={index}
              post={post}
              initialY={initialY}
              initialOpacity={initialOpacity}
              delay={0.05 + delay}
              headingLevel={postHeadingLevel}
            />
          ))}
      </PostsContainer>
      {arrowLinkHidden ? (
        ''
      ) : (
        <ArrowLink
          href="/blog"
          text="Read all blog posts"
          transitionDelay={0.15 + delay}
        />
      )}
    </BlogSectionBox>
  )
}

export default BlogSection
