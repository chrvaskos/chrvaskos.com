import Link from 'next/link'
import { ArrowRightSmall } from '../assets/svg/ArrowIcons'
import 'twin.macro'
import { motion } from 'framer-motion'

type ArrowLinkProps = {
  text: string
  href: string
  transitionDelay?: number
}

const ArrowLink = (props: ArrowLinkProps): JSX.Element => {
  const { text, href, transitionDelay = 0 } = props

  return (
    <Link href={href} passHref>
      <motion.a
        className="group"
        tw="flex font-semibold cursor-pointer max-w-max mt-6 transform transition-transform sm:hover:-translate-x-0.5 text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-gray-200"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          duration: 0.75,
          ease: [0.6, 0.05, -0.01, 0.9],
          delay: transitionDelay,
        }}
      >
        {text}
        <ArrowRightSmall />
      </motion.a>
    </Link>
  )
}

export default ArrowLink
