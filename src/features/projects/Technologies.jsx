import { PROPS_ICONS_TEMPLETE } from '../../shared/constans.js'
import { useIcons } from '../../shared/hooks/useIcons.js'

export function Technologies ({ technologies }) {
  const { getSvgIcon } = useIcons()

  return (
    <>
      {
        technologies?.map(technologie => {
          const SvgIcon = getSvgIcon(technologie)

          if (!SvgIcon) return null
          return (
            <div key={technologie} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <SvgIcon {...PROPS_ICONS_TEMPLETE.small} />
              <span>{technologie}</span>
            </div>
          )
        })
      }
    </>
  )
}
