import styles from './Projects.module.css'

import { ProjectCard } from './ProjectCard.jsx'
import { ProjectModal } from './ProjectModal.jsx'
import { useState } from 'react'
import { projects } from './projectsData.js'

export function Projects () {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [indexProject, setIndexProject] = useState(null)

  const handleOpenModal = (index) => {
    setIsModalOpen(true)
    setIndexProject(index)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const getProject = () => {
    return projects[indexProject]
  }

  return (
    <section className={styles.portfolio} id='portfolio'>
      <ProjectModal key={indexProject} isOpen={isModalOpen} onClose={handleCloseModal} project={getProject()} />
      <h2>PROYECTOS</h2>
      <div class={styles['portfolio__project-container']}>
        {
          projects.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                project={project}
                openModal={handleOpenModal}
                index={index}
              />
            )
          })
        }
      </div>
    </section>
  )
}
