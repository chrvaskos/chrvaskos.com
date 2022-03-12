import React, { useRef, useEffect, useContext } from 'react'
import tw from 'twin.macro'
import CustomCursorContext from '../context/CustomCursor/CustomCursorContext'
import { CursorSpan, CursorStyles } from '../styles/CursorStyles'

type CustomCursorProps = {
  text?: string | null
}

export const CustomCursor = (props: CustomCursorProps): JSX.Element => {
  const { text } = props

  const cursorRef = useRef<HTMLDivElement>(null)

  const { type } = useContext(CustomCursorContext)

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      if (cursorRef.current) {
        const { clientX, clientY } = event
        const mouseX = clientX - cursorRef?.current?.clientWidth / 2
        const mouseY = clientY - cursorRef?.current?.clientHeight / 2
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      }
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <CursorStyles
      // @ts-ignore: Type '{ css: TwStyle[]; ref: RefObject<HTMLDivElement>; }' is not assignable to type 'IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>'. Property 'css' does not exist on type 'IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>'.
      css={[
        type === 'read'
          ? tw`block`
          : type === 'mix'
          ? tw`block mix-blend-difference bg-white dark:bg-[#121212] z-10 w-2 h-2 transition-duration[90ms] transition-timing-function[linear]`
          : '',
      ]}
      ref={cursorRef}
    >
      <CursorSpan>{text}</CursorSpan>
    </CursorStyles>
  )
}
