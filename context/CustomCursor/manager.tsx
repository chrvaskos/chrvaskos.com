import React, { useState } from 'react'
import { WithChildren } from 'types'
import CustomCursorContext, { CursorLookType } from './CustomCursorContext'

type CustomCursorProps = WithChildren<{}>

export default function CustomCursorManager(
  props: CustomCursorProps
): JSX.Element {
  const { children } = props

  const [type, setType] = useState<CursorLookType>('default')

  return (
    <CustomCursorContext.Provider value={{ type, setType }}>
      {children}
    </CustomCursorContext.Provider>
  )
}
