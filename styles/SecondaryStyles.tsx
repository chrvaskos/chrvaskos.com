//@ts-ignore: Module '"twin.macro"' has no exported member 'styled'.
import tw, { styled } from 'twin.macro'

export const Heading = tw.h1`
  font-bold text-2xl md:text-4xl tracking-tight mt-3 md:mt-6
`

export const SecondaryHeading = tw.h2`
  md:text-xl mt-1.5 md:mt-3 text-gray-700 dark:text-gray-300 
`

export const TertiaryHeading = tw.h3`
  font-semibold text-xl md:text-2xl mt-2.5 md:mt-5 text-gray-900 dark:text-gray-100
`

export const Paragraph = tw.p`
  text-lg mt-3 md:mt-6
`

export const ResumeContainer = styled.div`
  > div {
    ${tw`flex flex-col items-center my-2 md:my-4`}

    > div {
      ${tw`shadow-lg md:shadow-xl`}

      > canvas {
        ${tw`max-w-full !h-full`}
      }

      > .annotationLayer {
        ${tw`hidden`}
      }
    }
  }

  ${tw`select-none p-2 w-full flex flex-col items-start`}
`

export const SocialContainer = tw.div`
  flex flex-col my-8 w-3/12 md:w-[14%] gap-4 
`

export const List = tw.ul`
  list-disc my-2 md:my-4
`

export const ListItem = tw.li`
  text-lg ml-5 mt-0.5 md:mt-1 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100
`

export const BusinessCardContainer = tw.div`
  flex flex-col items-center p-4 md:p-8 mx-auto bg-blue-50 dark:bg-gray-900/50 rounded-md border border-gray-200 dark:border-gray-600 lg:mx-auto w-11/12 md:w-2/3 lg:w-1/2
`

export const BusinessCardInfo = styled.div`
  > div {
    ${tw`flex flex-col justify-center gap-0.5 p-2`}

    > h1 {
      ${tw`font-semibold text-xl md:text-2xl`}
    }

    > h2 {
      ${tw`text-gray-700 dark:text-gray-300`}
    }
  }

  ${tw`flex gap-2`}
`

export const BusinessCardImage = styled.div`
  ${tw`w-32 sm:mb-0 relative`}
  img {
    ${tw`rounded-full filter grayscale-[33%]`}
  }
`

export const BusinessCardSocials = styled.div`
  > a {
    > svg {
      ${tw`cursor-pointer w-7 h-7 filter grayscale-[50%] text-gray-500 hover:filter-none hover:text-black dark:hover:text-white`}
    }
  }

  ${tw`flex justify-center items-center space-x-5 mt-2 md:mt-4`}
`
