//@ts-ignore: Module '"twin.macro"' has no exported member 'styled'.
import tw, { styled } from 'twin.macro'
import { motion } from 'framer-motion'

export const ProjectsSectionBox = styled.section`
  ${tw`py-8`}

  > h3, h1 {
    ${tw`font-bold text-2xl md:text-4xl tracking-tight mb-16`}
  }
`

export const ProjectsContainer = tw(motion.div)`
  w-full md:w-5/6 lg:w-full grid gap-6 gap-y-16 grid-template-columns[repeat(auto-fill, minmax(48.5%, 1fr))] mb-6
`

export const ProjectCardOuter = tw.a`
  transform transition-all w-full bg-gradient-to-b p-0.5 rounded-lg from-[#9e9e9e] via-[#c0c0c0] to-[#9e9e9e] cursor-pointer hocus:via-[#7e7e7e] dark:via-[#7e7e7e] dark:hocus:via-[#c0c0c0] mb-2
`

export const ProjectCard = styled.article`
  > h3 {
    ${tw`text-lg`}
  }

  ${tw`bg-white dark:bg-[#121212] flex flex-col px-4 pt-4 rounded-lg h-full`}
`

export const ProjectImageContainer = styled.div`
  > span {
    ${tw`absolute -top-11 left-[50%] transform translate-x-[-50%] rounded sm:grayscale-[50%] transition-all  sm:group-hocus:-translate-y-1 sm:group-hocus:grayscale-0`}
  }

  ${tw`relative w-[95%] mx-auto`}
`

export const ProjectTagList = tw.ul`
  absolute flex w-full flex-wrap bottom-2 -left-2 md:left-0
`

export const ProjectTag = tw.li`
  rounded inline-block py-1 px-2.5 bg-black/90 text-white dark:bg-gray-300 dark:text-[#121212] font-bold text-sm ml-2 mt-1 md:ml-4 md:first:ml-0 
`

export const ProjectInfo = styled.div`
  > h2,
  h4 {
    ${tw`text-xl font-bold w-full text-black dark:text-gray-100 mt-8 mb-2`}
  }

  ${tw`w-[95%] dark:text-gray-200 mx-auto -mt-8 h-full flex flex-col`}
`

export const ProjectLinkBox = tw.div`
  flex justify-end items-center p-2.5 mt-auto
`

export const ProjectLink = styled.div`
  > p {
    ${tw`uppercase font-bold tracking-widest 
    text-black/80 dark:text-gray-300 group-hocus:text-black dark:group-hocus:text-white py-1`}
  }

  > svg {
    ${tw`ml-2 w-6 h-6 overflow-visible dark:group-hocus:text-white`}
  }

  ${tw`flex justify-between items-center`}
`
