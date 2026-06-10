import { useContext } from 'react'
import { BoardContext } from '../../context/board.jsx'

export function useBoardContext () {
  const board = useContext(BoardContext)

  if (board === undefined) {
    // si la parte de la aplicacion no esta envuelta en el provider
    throw new Error('useCart must be used within a CartProvider')
  }

  return board
}
