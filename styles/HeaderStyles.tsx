//@ts-ignore: Module '"twin.macro"' has no exported member 'styled'.
import tw, { styled } from 'twin.macro'
import { motion } from 'framer-motion'

export const HeaderNav = tw.nav`
  flex items-center justify-between 
  min-w-full max-w-4xl
  py-2 m-0
  uppercase
`

export const HeaderNavItems = styled.div(({ flexStart, flexEnd }: any) => [
  tw`flex items-center space-x-2 w-full p-2`,
  flexStart && tw`justify-start`,
  flexEnd && tw`justify-end mr-2 md:mr-0`,
])

export const NavLink = styled.a(({ Active }: any) => [
  tw`cursor-pointer font-normal text-gray-600 dark:text-gray-200
  hidden md:inline-block
  p-1 sm:px-3 sm:py-2 rounded-lg
  hover:text-gray-700 dark:hover:text-gray-50
  hover:bg-gray-200 dark:hover:bg-gray-300/10 transition-all
  dark:active:bg-gray-300/20`,
  Active && tw`font-semibold text-gray-800 dark:text-white`,
])

export const DocumentLink = tw.span`
  flex cursor-pointer font-semibold text-sm rounded-lg mr-1 px-2 sm:px-3 py-2 text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-800/70 hocus:ring-2 active:ring-0 ring-gray-400 dark:ring-gray-300 transition-all
`

export const DarkModeBtn = tw.button`
  flex items-center justify-center z-40
  w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-800/70
  hover:ring-2 active:ring-0 ring-gray-400 dark:ring-gray-300 transition-all 
`

export const DarkModeBtnSvg = tw.svg`
  w-5 h-5 text-gray-800 dark:text-gray-200
`

export const SkipNavBtn = tw.a`
  absolute left-[1vw] p-2 font-semibold text-gray-800 dark:text-gray-300 focus:ring-2 ring-gray-800 dark:ring-gray-300 transition-all top-[-10vh] focus:top-[2vh]
`
