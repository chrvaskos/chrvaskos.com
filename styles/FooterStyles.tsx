//@ts-ignore: Module '"twin.macro"' has no exported member 'styled'.
import tw, { styled } from 'twin.macro'

export const FooterContainer = tw.footer``

export const FooterGrid = tw.nav`
  w-full grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3
`

export const FooterCol = tw.div`
  flex flex-col space-y-4 sm:even:mt-[52px]
`

export const FooterBigAnchor = tw.a`
  flex items-center gap-2 ml-10 py-2 font-semibold text-gray-400 dark:text-gray-400 uppercase text-sm tracking-widest
`

export const FooterHR = tw.hr`
  w-full border-[1px] border-gray-200 dark:border-gray-400 my-8
`

export const FooterAnchor = tw.a`
  cursor-pointer ml-10 p-0.5 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 transform transition-transform hover:translate-x-0.5
`

export const FooterLabel = tw.div`w-full my-8`

export const FooterSocials = styled.div`
  > a {
    > svg {
      ${tw`cursor-pointer w-5 h-5 filter grayscale text-gray-500 hover:filter-none hover:text-black dark:hover:text-white hover:animate-wiggle`}
    }
  }

  ${tw`flex justify-center items-center space-x-3 my-4`}
`

export const FooterCopyright = tw.p`text-center text-gray-500 dark:text-gray-300 my-8 normal-case`
