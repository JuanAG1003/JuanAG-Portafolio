import { useState, useEffect } from 'react'

export function useIsMobile () {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Definimos el mismo breakpoint que usarías en CSS
    const mediaQuery = window.matchMedia('(min-width: 1200px) and (min-height:800px ')

    // Evaluamos el estado inicial
    setIsMobile(mediaQuery.matches)

    // Escuchamos si el usuario cambia el tamaño de la pantalla (ej. rota el celular)
    const handler = (e) => setIsMobile(e.matches)
    mediaQuery.addEventListener('change', handler)

    // Limpiamos el evento al desmontar el componente
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return { isMobile }
}
