import { Square } from '../Square/Square.jsx'
import { Discs } from '../Discs/Discs.jsx'
import styles from './Board.module.css'
import { useBoardContext } from '../../../../../shared/hooks/useBoardContext.js'

export function Board () {
  const { board, distance } = useBoardContext()
  const columnas = Array.from({ length: 7 })

  return (
    <section className={styles.game}>
      {
        columnas.map((_, colIndex) => (
          <div key={colIndex} className={styles.colum}>
            {board[colIndex].map((color, rowIndex) => (
              <Square
                key={`${colIndex}${rowIndex}`}
                colIndex={colIndex}
                id={`${colIndex}-${rowIndex}`}
              >
                {board[colIndex][rowIndex] &&
                  <Discs
                    distance={distance}
                    color={color}
                  />}
              </Square>
            ))}
          </div>
        ))
      }
    </section>
  )
}
