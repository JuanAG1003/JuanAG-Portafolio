import { GitHub, Preview } from '../../shared/components/Icons.jsx'
import { PROPS_ICONS_TEMPLETE } from '../../shared/constans.js'

export function ButtonBox ({ openModal, link }) {
  return (
    <>
      <a href={link} target='blank'>
        <GitHub {...PROPS_ICONS_TEMPLETE.small} />
      </a>
      <button
        onClick={openModal}
      >
        <Preview {...PROPS_ICONS_TEMPLETE.small} />
      </button>
    </>
  )
}
