import tw from 'twin.macro'

export const CursorStyles = tw.div`
  fixed hidden w-12 h-12 bg-[#121212] border-[1px] dark:border-gray-300 text-white pointer-events-none rounded-full z-50 transition-[width, height] transition-property[transform, opacity] transition-duration[0ms] transition-timing-function[linear]
`

export const CursorSpan = tw.span`
  text-center absolute top-2/4 left-2/4 translate-x-[-50% ] translate-y-[-50%]
`
