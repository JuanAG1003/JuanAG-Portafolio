import { ICONS_SVG } from '../constans'
import {
  JavaScript,
  HTML5,
  CSS,
  Git,
  GitHub,
  React,
  Redux,
  ESLint,
  Vite,
  Vercel,
  Contact,
  Portfolio,
  Home,
  Skills
} from '../components/Icons'

const ICONS_SVG_COMPONENTS = {
  [ICONS_SVG.JavaScript]: JavaScript,
  [ICONS_SVG.HTML5]: HTML5,
  [ICONS_SVG.CSS]: CSS,
  [ICONS_SVG.Git]: Git,
  [ICONS_SVG.GitHub]: GitHub,
  [ICONS_SVG.React]: React,
  [ICONS_SVG.Redux]: Redux,
  [ICONS_SVG.ESLint]: ESLint,
  [ICONS_SVG.Vite]: Vite,
  [ICONS_SVG.Vercel]: Vercel,
  [ICONS_SVG.Contact]: Contact,
  [ICONS_SVG.Portfolio]: Portfolio,
  [ICONS_SVG.Home]: Home,
  [ICONS_SVG.Skills]: Skills
}

export function useIcons () {
  const getSvgIcon = (icon) => {
    return ICONS_SVG_COMPONENTS[icon]
  }

  return { getSvgIcon }
}
