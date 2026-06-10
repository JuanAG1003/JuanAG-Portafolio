import { useRef } from 'react'

export const skillsRefInitialState = useRef({})

export const SKILLS_ACTION_TYPES = {
  ADD_TO_SKILLS_REF: 'ADD_TO_SKILLS_REF',
}

const UPDATE_STATE_BY_ACTION = {
  [SKILLS_ACTION_TYPES.ADD_TO_SKILLS_REF]: (state, action) => {
    const handleMouseEnter = (id) => {
      const skillsRef = getSkillRef(id)

      if (skillsRef) {
        // Mide la distancia desde el techo del contenedor hasta el elemento hijo
        const distanciaSuperior = skillsRef.offsetTop

        // Mide la distancia desde la pared izquierda del contenedor hasta el elemento hijo
        const distanciaIzquierda = skillsRef.offsetLeft
        setCoords({
          top: distanciaSuperior,
          left: distanciaIzquierda
        })

        setShowModal(true)
      }
    }
    const { id, ref } = action.payload
    const newState = state.current[id] = ref
    return newState
  },
}

export function skillsReducer (state, action) {
  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]

  return updateState ? updateState(state, action) : state
}
