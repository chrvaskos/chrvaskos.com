//@ts-ignore: Module '"twin.macro"' has no exported member 'styled'.
import tw, { styled } from 'twin.macro'

export const ContainerBox = tw.div`
  mx-auto min-h-screen max-w-screen-lg px-2 md:px-8
`

export const Prose = tw.div`
  prose dark:prose-dark mx-auto text-left
`

export const ProgressBar = tw.div`
  h-1 bg-blue-500 fixed transition-width z-50
`
