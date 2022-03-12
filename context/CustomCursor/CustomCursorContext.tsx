import { createContext } from 'react'

export type CursorLookType = 'default' | 'read' | 'mix'

export type CustomCursorType = {
  type: CursorLookType
  setType: (type: CursorLookType) => void
}

const CustomCursorContext = createContext<CustomCursorType>({
  type: 'default',
  setType: () => {},
})

export default CustomCursorContext
