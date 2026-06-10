import { createContext } from 'react'
import { useState } from 'react'
import { useRefContext } from '../shared/hooks/useRefContext.js'

export const SkillsRefContext = createContext()

function useSkillsCoord () {
  const [coords, setCoords] = useState({ top: 0, left: 0 })
  const [showModal, setShowModal] = useState(false)
  const [id, setId] = useState(null)

  const changeCoords = (skillsRef) => {
    if (skillsRef) {
      // Obtenemos la posición física de la tarjeta en la ventana
      const rect = skillsRef.getBoundingClientRect()

      setCoords({
        // Alinea el modal con la parte superior de la tarjeta (sumando el scroll actual)
        top: rect.top + window.scrollY,
        // Coloca el modal justo a la derecha de la tarjeta sumando su ancho + 15px de separación
        left: rect.left + rect.width + 15 + window.scrollX
      })

      setShowModal(true)
    }
  }

  const changeId = (id) => {
    setId(id)
  }

  const resetShowModal = () => {
    setShowModal(false)
  }

  return { coords, changeCoords, showModal, resetShowModal, id, changeId }
}

export function SkillsRefProvider ({ children }) {
  const { getRefContext: getSkillRef, addRefContext: addToSkillRef } = useRefContext()
  const { coords, changeCoords, showModal, resetShowModal, id, changeId } = useSkillsCoord()

  return (
    <SkillsRefContext.Provider
      value={{
        getSkillRef,
        addToSkillRef,
        coords,
        changeCoords,
        showModal,
        resetShowModal,
        id,
        changeId
      }}
    >
      {children}
    </SkillsRefContext.Provider>
  )
}
