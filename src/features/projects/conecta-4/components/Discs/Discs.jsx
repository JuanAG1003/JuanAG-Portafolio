import styles from './Discs.module.css'

export function Discs ({ color, distance }) {
  const className = `${styles.discs} ${color === 'yellow' ? styles['discs--yellow'] : ''}`

  return (
    <div
      style={{ '--distancia-top': distance }}
      className={className}
    />
  )
}
