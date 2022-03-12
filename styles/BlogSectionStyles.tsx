//@ts-ignore: Module '"twin.macro"' has no exported member 'styled'.
import tw, { styled } from 'twin.macro'
import { motion } from 'framer-motion'

export const BlogSectionBox = styled.section`
  ${tw`py-8`}

  > h1, h3 {
    ${tw`font-bold text-2xl md:text-4xl tracking-tight mb-6`}
  }
`

export const PostsContainer = tw.div`
  flex flex-col gap-4 p-2
`

export const PostCardOuter = tw(motion.article)`
  transition-colors w-full sm:w-2/3 lg:w-5/6 bg-gradient-to-b p-0.5 rounded-lg from-[#9e9e9e] via-[#C0C0C0] to-[#9E9E9E] hocus:via-[#7e7e7e] dark:via-[#7e7e7e] dark:hocus:via-[#C0C0C0]
`

export const PostCardInner = styled.a(() => [
  tw`flex flex-col-reverse lg:flex-row gap-0.5 justify-between h-full rounded-lg`,
  `cursor: none;`,
])

export const PostCardInfo = styled.div`
  ${tw`flex flex-col justify-between rounded-lg p-4 lg:w-7/12 lg:rounded-r-none lg:rounded-l-lg bg-white dark:bg-[#121212]`}
  > h2, h4 {
    ${tw`text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight transform group-hocus:translate-y-1.5 transition-transform`}
  }

  > p {
    ${tw`uppercase font-bold text-xs tracking-wide 
    text-gray-900 dark:text-gray-100 transform group-hocus:-translate-y-1 md:group-hocus:-translate-y-1.5 transition-transform`}
  }
`

export const PostCardImage = tw.div`
  hidden lg:block lg:w-5/12 p-4 rounded-r-lg bg-white dark:bg-[#121212]
`
