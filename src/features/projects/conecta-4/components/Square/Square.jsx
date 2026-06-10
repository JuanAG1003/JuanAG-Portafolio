import styles from './Square.module.css'
import { useBoardContext } from '../../../../../shared/hooks/useBoardContext'

export function Square ({ children, colIndex, id }) {
  const { updateBoard, addToSquareRef } = useBoardContext()

  const handleClick = () => {
    updateBoard({ colIndex })
  }

  return (
    <div
      ref={(element) => addToSquareRef({ id, element })}
      className={styles.square}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}
