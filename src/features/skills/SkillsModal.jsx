import styles from './SkillsModal.module.css'

export function SkillsModal ({ title, coord, skillDetails }) {
  return (
    <div className={styles.modal} style={{ top: `${coord.top}px`, left: `${coord.left}px` }}>
      <div className={styles['card-container']}>
        <div className={styles['card-content']}>
          <div className={styles['card-title']}>
            <span className={styles.title}>{title}</span>
          </div>
          <div className={styles['card-body']}>
            {
              skillDetails?.map(detail => (
                <p key={detail} className={styles.details}>{detail}</p>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
