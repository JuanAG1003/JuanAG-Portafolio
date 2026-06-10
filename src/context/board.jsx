import { createContext, useState } from 'react'
import { useRefContext } from '../shared/hooks/useRefContext.js'
import { turns } from '../features/projects/conecta-4/constans.js'
import { isWinner } from '../features/projects/conecta-4/logic/app.js'

export const BoardContext = createContext()

function useBoard ({ squareRef }) {
  const [board, setBoard] = useState(Array(7).fill(Array(6).fill(null)))
  const [turn, setTurn] = useState(turns.red)
  const [distance, setDistance] = useState('0px')

  const updateBoard = ({ colIndex }) => {
    // actualizar tablero
    const newBoard = [...board]

    const rowIndex = newBoard[colIndex].findLastIndex(e => e === null)
    if (rowIndex === -1) return
    const newRow = newBoard[colIndex].map((e, i) =>
      i === rowIndex ? turn : e
    )
    newBoard[colIndex] = newRow
    setBoard(newBoard)

    // actualizar turno
    const newTurn = turn === turns.red ? turns.yellow : turns.red
    setTurn(newTurn)

    // calcular distancia para la animacion
    if (squareRef.current[`${colIndex}-${rowIndex}`]) {
      const calcularTecho = squareRef.current[`${colIndex}-${rowIndex}`].offsetTop
      setDistance(`${-calcularTecho}px`)
    }

    // checar ganador por columna
    console.log(isWinner(newBoard, colIndex, rowIndex))
  }

  return { board, turn, distance, updateBoard }
}

export function BoardProvider ({ children }) {
  const { getRefContext: getSquareRef, addRefContext: addToSquareRef, refContext: squareRef } = useRefContext()
  const { board, turn, distance, columnas, updateBoard } = useBoard({ squareRef })

  return (
    <BoardContext
      value={{
        getSquareRef,
        addToSquareRef,
        board,
        turn,
        distance,
        columnas,
        updateBoard
      }}
    >
      {children}
    </BoardContext>
  )
}
