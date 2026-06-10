import { useContext } from 'react'
import { SkillsRefContext } from '../context/skillsRef'

export function useSkillsRef () {
  const skillsRef = useContext(SkillsRefContext)

  if (skillsRef === undefined) {
    throw new Error('useSkillsRef must be used within a SkillsRefProvider')
  }

  return skillsRef
}
