import { useRef } from 'react'
import styles from './ProjectModal.module.css'
import { useEffect } from 'react'
import { useIcons } from '../../shared/hooks/useIcons'
import { PROPS_ICONS_TEMPLETE } from '../../shared/constans'
import { GitHub, Vercel } from '../../shared/components/Icons'
import { useState } from 'react'

export function ProjectModal ({ isOpen, onClose, project }) {
  const [indexImg, setIndexImg] = useState(0)
  const modalRef = useRef(null)
  const { getSvgIcon } = useIcons()

  useEffect(() => {
    const modal = modalRef.current
    if (!modal) return
    if (!project) return

    if (isOpen) {
      modal.showModal()
    } else {
      modal.close()
    }
  }, [isOpen])

  useEffect(() => {
    const modal = modalRef.current
    if (!modal) return

    const handleCancel = (e) => {
      e.preventDefault()
      onClose()
    }

    modal.addEventListener('cancel', handleCancel)
    return () => modal.removeEventListener('cancel', handleCancel)
  }, [onClose])

  const handleBackdropClick = (e) => {
    if (e.target === modalRef.current) onClose()
  }

  const handleIncrementIndex = () => {
    const newIndex = indexImg + 1
    if (newIndex < project?.img.length) return setIndexImg(newIndex)
    return setIndexImg(0)
  }

  const handleDecrementIndex = () => {
    const newIndex = indexImg - 1
    if (newIndex < 0) return setIndexImg(project.img.length - 1)
    return setIndexImg(newIndex)
  }

  return (
    project &&
      <dialog
        ref={modalRef}
        className={styles.modal}
        onClick={handleBackdropClick}
      >
        <div className={styles['modal__content']}>
          <h2 className={styles.title} autoFocus>{project.name}</h2>
          <div className={styles['modal__wrapper']}>
            <div className={styles['container__img']}>
              <img src={project.img[indexImg]} alt={project.name} />
            </div>
            <div className={styles['buttons__container']}>
              <button className={styles['button']} onClick={handleDecrementIndex}>&#8592;</button>
              <button className={styles['button']} onClick={handleIncrementIndex}>&#8594;</button>
            </div>
            <div className={styles['container__icons']}>
              {
                project.technologies?.map(technologie => {
                  const SvgIcon = getSvgIcon(technologie)
                  if (!SvgIcon) return null

                  return (
                    <div key={`modal${technologie}`} className={styles['container__icon']}>
                      <SvgIcon className={styles.icon} {...PROPS_ICONS_TEMPLETE.small} />
                      <span className={styles['icon__name']}>{technologie}</span>
                    </div>
                  )
                })
            }
            </div>
            <p className={styles.description}>
              {project.details}
            </p>
            <div className={styles['links__container']}>
              {
                project.demo &&
                  <div>
                    <a className={styles['link__container']} href={project.demo} target='blank'>
                      <Vercel className={styles.icon} />
                      <span>Demo</span>
                    </a>
                  </div>
              }
              <a className={styles['link__container']} href={project.github} target='blank'>
                <GitHub className={styles.icon} {...PROPS_ICONS_TEMPLETE.medium} />
                <span>Repositorio</span>
              </a>
            </div>
          </div>
          <button className={styles['button__close']} onClick={onClose}>
            &#10006;
          </button>
        </div>
      </dialog>
  )
}
