import styles from './Hero.module.css'
import photoProfile from '../../assets/resource/perfil.webp'
import photoProfileSmall from '../../assets/resource/perfil-small.webp'
import { useRef } from 'react'
import { GitHub, LinkedIn } from '../../shared/components/Icons'
import { PROPS_ICONS_TEMPLETE } from '../../shared/constans'
import { useIsMobile } from '../../shared/hooks/useIsMobile'

export function Hero () {
  const cardRef = useRef(null)
  const { isMobile } = useIsMobile()

  const handleMouseMove = (e) => {
    if (!isMobile) return
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()

    // Calcula la posición del mouse relativa al centro de la tarjeta
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    // Calcula los grados de rotación (puedes ajustar el divisor '15' para más/menos sensibilidad)
    const degX = -(y / 15)
    const degY = x / 15

    // Aplicamos los estilos directamente al DOM para máximo rendimiento (sin re-renders)
    card.style.transform = `rotateX(${degX}deg) rotateY(${degY}deg)`
  }

  const handleMouseLeave = () => {
    if (!isMobile) return
    const card = cardRef.current
    if (!card) return

    // Resetea la tarjeta a su posición plana original
    card.style.transform = 'rotateX(0deg) rotateY(0deg)'
  }

  return (
    <main
      className={styles.hero}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles['hero__card']} ref={cardRef}>
        <div className={styles['hero__title-container']}>
          <h2>Hola, soy Juan</h2>
          <h1>Desarrollador Web</h1>
        </div>
        <div className={styles['hero__wrapper']}>
          <div className={styles['wrapper__img-container']}>
            <picture>
              <source media='(max-width: 1200px)' srcset={photoProfileSmall} />
              <img src={photoProfile} alt='Foto de perfil' />
            </picture>
          </div>
          <div className={styles['wrapper__section']}>
            <p>
              Soy un Desarrollador FrontEnd en búsqueda de mi primera oportunidad en la industria, enfocado en el ecosistema de JavaScript y React. A través de proyectos propios y de estudio, he adquirido experiencia construyendo aplicaciones web responsivas, manejando estados con Redux y conectando interfaces con APIs REST.

              Soy un apasionado por el código bien estructurado. Disfruto aprender nuevas tecnologías y me motiva ver cómo la calidad de mi trabajo evoluciona proyecto tras proyecto, listo para llevar todo este aprendizaje y dedicación a un equipo profesional.
            </p>
            <div className={styles['section__links']}>
              <a href='https://github.com/JuanAG1003' target='blank'>
                <GitHub {...PROPS_ICONS_TEMPLETE.medium} />
              </a>
              <a href='https://www.linkedin.com/in/juan-ag-dev/' target='blank'>
                <LinkedIn {...PROPS_ICONS_TEMPLETE.medium} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
