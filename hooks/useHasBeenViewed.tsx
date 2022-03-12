import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

const useHasBeenViewed = () => {
  const [ref, inView]: any = useInView()
  const prevInView = useRef(false)
  const hasBeenViewed = prevInView.current || inView
  useEffect(() => {
    prevInView.current = inView
  })

  return [hasBeenViewed, ref]
}

export default useHasBeenViewed
