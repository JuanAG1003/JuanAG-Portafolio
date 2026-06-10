import { SkillsCard } from './SkillsCard.jsx'
import styles from './Skills.module.css'
import { SkillsModal } from './SkillsModal.jsx'
import { useSkillsRef } from '../../hooks/useSkillsRef.js'
import { useEffect } from 'react'
import { useState } from 'react'
import { ICONS_SVG } from '../../shared/constans.js'
import { useIsMobile } from '../../shared/hooks/useIsMobile.js'

const SKILLS_FRONTED = [
  {
    icon: ICONS_SVG.HTML5,
    text: 'HTML5'
  },
  {
    icon: ICONS_SVG.CSS,
    text: 'CSS3',
    details: ['Responsive Design', 'Mobile First', 'Flexbox', 'Grid']
  },
  {
    icon: ICONS_SVG.JavaScript,
    text: 'JavaScript',
    details: ['(ES6+)']
  },
  {
    icon: ICONS_SVG.React,
    text: 'React',
    details: ['Hooks', 'Custom Hooks', 'Context API', 'Redux']
  }
]

const SKILLS_TOOLS = [
  {
    icon: ICONS_SVG.Git,
    text: 'Git'
  },
  {
    icon: ICONS_SVG.GitHub,
    text: 'GitHub'
  },

]

export function Skills () {
  const { coords, showModal, id } = useSkillsRef()
  const [skillDetail, setSkillDetail] = useState(null)
  const { isMobile } = useIsMobile()

  useEffect(() => {
    if (!isMobile) return
    setSkillDetail(null)
    const allSkills = [...SKILLS_FRONTED, ...SKILLS_TOOLS]
    const skill = allSkills.find(skill => skill.text === id)
    if (skill?.details) setSkillDetail({ name: skill.text, details: skill.details })
  }, [id])

  return (
    <section className={styles.skills} id='skills-section'>
      {showModal && skillDetail && <SkillsModal title={skillDetail.name} coord={coords} skillDetails={skillDetail.details} />}
      <h2>SKILLS</h2>
      <div className={styles['skills__container']}>
        <SkillsCard
          name='Frontend'
          technologies={SKILLS_FRONTED}
        />
        <SkillsCard
          name='Herramientas'
          technologies={SKILLS_TOOLS}
        />
      </div>
    </section>
  )
}
