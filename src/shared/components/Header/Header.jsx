import { Navbar } from './Navbar.jsx'
import logo from '../../../assets/icons/jagar_logo-small.webp'
import styles from './Header.module.css'
import { ICONS_SVG } from '../../constans.js'

const links = [
  { text: 'Inicio', id: 'root', icon: ICONS_SVG.Home },
  { text: 'Skills', id: 'skills-section', icon: ICONS_SVG.Skills },
  { text: 'Proyectos', id: 'portfolio', icon: ICONS_SVG.Portfolio },
  { text: 'Contacto', id: 'contact', icon: ICONS_SVG.Contact },
]

export function Header () {
  return (
    <header className={styles.header}>
      <img className={styles['header__img']} src={logo} alt='Logo Jagar' />
      <Navbar links={links} />
    </header>
  )
}
