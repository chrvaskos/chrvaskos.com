//@ts-ignore: Module '"twin.macro"' has no exported member 'styled'.
import tw, { styled } from 'twin.macro'
import { motion } from 'framer-motion'

export const AboutSectionBox = tw.section`
  flex flex-col-reverse sm:flex-row items-start py-16 
`

export const AboutSectionInfo = styled(motion.div)`
  ${tw`flex flex-col pr-4`}

  >h1 {
    ${tw`font-bold text-3xl md:text-5xl tracking-tight mb-1`}
  }

  > h2 {
    ${tw`md:text-xl mt-1 dark:text-gray-100`}
  }

  > p {
    ${tw`w-full sm:w-5/6 line-height[1.25] mt-4 dark:text-gray-300`}
  }
`

export const SocialLinkContainer = tw.div`flex gap-4 justify-start items-center mt-4`

export const SocialLinkAnchor = styled(motion.a)`
  > svg {
    ${tw`w-4 h-4 text-gray-900 dark:text-gray-200`}
  }

  ${tw`flex items-center gap-1.5 cursor-pointer p-2 rounded-lg bg-gray-200 dark:bg-gray-800/70 hover:ring-2 active:ring-0 ring-gray-400 dark:ring-gray-300 transition-all font-semibold text-sm text-gray-600 dark:text-gray-200`}
`

export const AboutSectionImage = styled(motion.div)`
  ${tw`w-[80px] sm:w-[224px] sm:mb-0 relative`}
  img {
    ${tw`rounded-full filter grayscale-[50%] animate-grayScale mix-blend-overlay`}
  }
`

export const Noise = styled.div`
  > img {
    ${tw`mix-blend-overlay`}
  }

  ${tw`absolute inset-0 opacity-0 animate-hide`}
`
