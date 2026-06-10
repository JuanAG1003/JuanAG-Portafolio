import styles from './SkillsCard.module.css'
import { useSkillsRef } from '../../hooks/useSkillsRef.js'
import { useIcons } from '../../shared/hooks/useIcons.js'
import { PROPS_ICONS_TEMPLETE } from '../../shared/constans.js'
import { useIsMobile } from '../../shared/hooks/useIsMobile.js'

function Details ({ details, name }) {
  return (
    <details className={styles.details}>
      <summary className={styles['technologi-name']}>{name}</summary>
      <div className={styles['details__ul-container']}>
        <ul>
          {
            details.map(detail => (
              <li key={`detail${detail}`} className={styles['li-detail']}>
                {detail}
              </li>
            ))
          }
        </ul>
      </div>
    </details>
  )
}

export function SkillsCard ({ name, technologies }) {
  const { addToSkillRef, getSkillRef, changeCoords, resetShowModal, changeId } = useSkillsRef()
  const { getSvgIcon } = useIcons()
  const { isMobile } = useIsMobile()

  const handleMouseEnter = (id) => {
    const skillsRef = getSkillRef(id)
    changeId(id)

    changeCoords(skillsRef)
  }

  return (
    <div className={styles.card}>
      <div className={styles.circle}>
        <h3>{name}</h3>
      </div>
      <div className={styles.content}>
        <h3>{name}</h3>
        <ul>
          {
            technologies?.map((technologie, index) => {
              const SvgIcon = getSvgIcon(technologie.icon)
              if (!SvgIcon) return null

              return (
                <li
                  key={index}
                  ref={((el) => addToSkillRef({ id: technologie.text, element: el }))}
                  id={technologie.text}
                  onMouseEnter={() => handleMouseEnter(technologie.text)}
                  onMouseLeave={() => resetShowModal()}
                  className={styles['li-skill']}
                >
                  <SvgIcon className={styles.icon} {...PROPS_ICONS_TEMPLETE.small} />
                  {
                    isMobile
                      ? <p className={styles['technologi-name']}>{technologie.text}</p>
                      : (technologie.details && <Details details={technologie.details} name={technologie.text} />) || <p className={styles['technologi-name']}>{technologie.text}</p>
                  }
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}
