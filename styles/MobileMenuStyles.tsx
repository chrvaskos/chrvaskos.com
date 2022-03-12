//@ts-ignore: Module '"twin.macro"' has no exported member 'styled'.
import tw, { styled } from 'twin.macro'

export const MobileMenuButton = styled.button`
  ${tw`visible md:hidden transition-opacity border-0 bg-transparent w-10 h-10 relative z-50`}

  > svg {
    ${tw`m-auto`}
  }
`

export const MobileMenuList = styled.ul`
  ${tw`flex flex-col absolute bg-white dark:bg-[#121212] pt-6 pr-6 pl-1 m-0 w-[96.5%] z-40 opacity-0 transition-all top-0 bottom-0 left-2 right-0`}

  >:first-child {
    ${tw`mt-16`}
  }

  > * + * {
    ${tw`mt-6`}
  }

  > div {
    ${tw`mt-auto`}
  }
`

export const MobileMenuListItem = tw.li`
  border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold transform -translate-x-4 opacity-0 transition-all w-0 whitespace-nowrap
`

export const MobileMenuAnchor = tw.a`flex w-auto pb-4 cursor-pointer`
