import { useIcons } from '../../hooks/useIcons'
import styles from './Navbar.module.css'

export function Navbar ({ links }) {
  const { getSvgIcon } = useIcons()

  return (
    <nav class={styles.menu}>
      <div className={styles['menu__container']}>
        <input type='checkbox' className={styles.checkbox} />
        <span class={styles['button-menu']} />
        {
        links?.map(link => {
          const SvgIcon = getSvgIcon(link.icon)
          if (!SvgIcon) return null

          return (
            <a key={link.id} href={`#${link.id}`} className={styles.option}>
              <SvgIcon className={styles.icon} />
              <span className={styles['option__title']}>{link.text}</span>
            </a>
          )
        })
      }
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 400 60'
          preserveAspectRatio='none'
          overflow='visible'
          class={styles.outline}
        >
          <rect
            stroke-width='2'
            fill='transparent'
            y='0'
            x='0'
            pathLength='100'
            class={styles.rect}
          />
        </svg>
      </div>
    </nav>
  )
}
