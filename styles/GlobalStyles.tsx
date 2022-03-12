import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  *::selection {
      ${tw`bg-gray-200 dark:bg-gray-800/70`}
    }
  html {
    ${tw`overflow-y-scroll scroll-behavior[smooth]`}
  }
  body {
    ${tw`h-full`}
  }
  main {
    ${tw`px-8`}
  }
`

export const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)
