//@ts-ignore: Module '"twin.macro"' has no exported member 'styled'.
import tw, { styled } from 'twin.macro'
import { motion } from 'framer-motion'

export const ContactSectionBox = tw.section`
  py-8 mt-6 mb-12
`

export const ContactFormContainer = styled(motion.div)`
  > div {
    ${tw`text-center mt-5 flex justify-center items-center mx-auto`}

    > h1, h3 {
      ${tw`font-extrabold uppercase text-xl tracking-wider text-gray-600 dark:text-gray-300 mb-1.5 text-center mr-4`}
    }

    > span {
      ${tw`w-14 mr-2 transform grayscale`}
    }
  }

  ${tw`bg-blue-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-600 lg:mx-auto md:w-5/6`}
`

export const ContactFormBox = tw.form`
  flex w-full gap-y-4 px-5 md:px-10 py-4 flex-wrap justify-between
`

export const InputWrapper = styled.div`
  > label {
    ${tw`p-1.5 mb-1 font-bold text-gray-600 dark:text-gray-300`}
  }

  > input,
  textarea {
    ${tw`w-full p-3 mt-1 rounded font-semibold hocus:ring-2 ring-gray-400 focus:ring-gray-500 dark:ring-gray-400 dark:focus:ring-gray-300 outline-none transition-all dark:bg-gray-600/70 placeholder-gray-400 focus:placeholder-gray-300 dark:placeholder-gray-400 dark:focus:placeholder-gray-500`}
  }

  textarea {
    ${tw`resize-none`}
  }

  ${tw`w-full md:w-[48.5%] md:last-of-type:w-full`}
`

export const SubmitButton = styled.button`
  > svg {
    ${tw`mb-1 mr-1 text-gray-600 dark:text-gray-300`}
  }

  > p {
    ${tw`font-bold text-gray-600 dark:text-gray-300`}
  }

  > span {
    ${tw`w-12 h-12 mr-1`}
  }

  ${tw`cursor-pointer flex items-center ml-auto mb-1.5 py-2.5 px-4 bg-white text-gray-500 rounded dark:bg-gray-600/70 hover:ring-2 ring-gray-400 dark:ring-gray-300 transition-all disabled:cursor-not-allowed disabled:ring-0`}
`
