import { ButtonBox } from './ButtonBox.jsx'
import styles from './ProjectCard.module.css'
import { Technologies } from './Technologies.jsx'

function CardContent ({ project, openModal }) {
  return (
    <figure className={styles['figure__container']}>
      <img src={project.img[project.frontPage]} alt={project.name} />
      <div className={styles['figure__figcaption_container']}>
        <figcaption>
          {project.details}
        </figcaption>
        <div className={styles['figure__buttons_box']}>
          <div className={styles['buttons_box__technologies']}>
            <Technologies technologies={project.technologies} />
          </div>
          <div className={styles['buttons_box__buttons']}>
            <ButtonBox openModal={openModal} link={project.github} />
          </div>
        </div>
      </div>
    </figure>
  )
}

export function ProjectCard ({ project, openModal, index }) {
  const ChildrenComponent = project.component

  const openAndLoadProjectInModal = () => {
    openModal(index)
  }

  return (
    <div className={styles['portfolio__project-query-container']}>
      <div class={styles['portfolio__project']}>
        <h2 class={styles['portfolio__project-name']}>{project.name}</h2>
        <div className={styles['portfolio__wrapper']}>
          <div className={styles['wrapper__buttons_box']}>
            <div className={styles['buttons_box__technologies']}>
              <Technologies technologies={project.technologies} />
            </div>
            <div className={styles['buttons_box__buttons']}>
              <ButtonBox openModal={openAndLoadProjectInModal} link={project.github} />
            </div>
          </div>
          {
            project.component &&
              <div className={styles.children}>
                <ChildrenComponent />
              </div>
          }
          <CardContent project={project} openModal={openAndLoadProjectInModal} />
        </div>
      </div>
    </div>
  )
}
