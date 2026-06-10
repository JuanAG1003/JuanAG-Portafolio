import { useRef } from 'react'

export function useRefContext () {
  const refContext = useRef({})

  const addRefContext = ({ element, id }) => {
    refContext.current[id] = element
  }

  const getRefContext = (id) => {
    return refContext.current[id]
  }

  return { getRefContext, addRefContext, refContext }
}
