import { useRef } from 'react'
import styles from './Footer.module.css'
import { useState } from 'react'
import { useEffect } from 'react'

export function Footer () {
  const footerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const className = `${styles['gtr-light']} ${isVisible ? styles.visible : ''}`

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si el footer entra en el campo de visión (al menos un 20% visible)
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Opcional: desconecta el observer si solo quieres que parpadee la primera vez
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.6 } // Se dispara cuando se ve el 20% del footer
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])
  return (
    <footer className={styles.footer} ref={footerRef}>
      <svg
        viewBox='0 0 1000 400'
        width='100%'
        height='100%'
        preserveAspectRatio='none'
        xmlns='http://w3.org'
        style={{ backgroundColor: '#111', display: 'block' }}
      >
        <defs>
          {/* Efecto de brillo para las luces encendidas */}
          <filter id='glow' x='-50%' y='-50%' width='200%' height='200%'>
            <feGaussianBlur stdDeviation='8' result='blur' />
            <feMerge>
              <feMergeNode in='blur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>

        {/* ALERÓN TRASERO */}
        <path d='M 150,60 L 850,60 L 830,90 L 170,90 Z' fill='#1a1a1a' />
        <path d='M 180,90 L 200,120 L 210,120 L 190,90 Z' fill='#111' />
        <path d='M 820,90 L 800,120 L 790,120 L 810,90 Z' fill='#111' />

        {/* CUERPO PRINCIPAL / MALETERO */}
        <path d='M 180,120 L 820,120 L 860,190 L 900,260 L 880,330 L 120,330 L 100,260 L 140,190 Z' fill='#2a2a2a' />

        {/* PARTE SUPERIOR DEL MALETERO (Sombra) */}
        <path d='M 220,120 L 780,120 L 800,170 L 200,170 Z' fill='#222' />

        {/* PORTAPLACAS (Hundimiento central) */}
        <polygon points='350,190 650,190 630,270 370,270' fill='#151515' />

        {/* LA PLACA (Matrícula) */}
        <g id='placa'>
          <rect x='390' y='200' width='220' height='60' rx='5' fill='#f0f0f0' stroke='#ccc' strokeWidth='2' />
          {/* Reemplaza "TU NOMBRE" por tu nombre real */}
          <text
            x='500'
            y='240'
            fontFamily='monospace, sans-serif'
            fontSize='26'
            fontWeight='bold'
            fill='#111'
            textAnchor='middle'
            letterSpacing='4'
          >
            JAGAR
          </text>
        </g>

        {/* FAROS TRASEROS IZQUIERDOS */}
        <g id='faros-izquierdos'>
          {/* Faro Exterior Izquierdo */}
          <circle cx='210' cy='200' r='32' fill='#500' />
          <circle className={className} cx='210' cy='200' r='25' fill='#ff0000' filter='url(#glow)' />
          <circle cx='210' cy='200' r='10' fill='#fff' opacity='0.3' />

          {/* Faro Interior Izquierdo */}
          <circle cx='295' cy='200' r='26' fill='#500' />
          <circle className={className} cx='295' cy='200' r='20' fill='#ff0000' filter='url(#glow)' />
          <circle cx='295' cy='200' r='8' fill='#fff' opacity='0.3' />
        </g>

        {/* FAROS TRASEROS DERECHOS */}
        <g id='faros-derechos'>
          {/* Faro Interior Derecho */}
          <circle cx='705' cy='200' r='26' fill='#500' />
          <circle className={className} cx='705' cy='200' r='20' fill='#ff0000' filter='url(#glow)' />
          <circle cx='705' cy='200' r='8' fill='#fff' opacity='0.3' />

          {/* Faro Exterior Derecho */}
          <circle cx='790' cy='200' r='32' fill='#500' />
          <circle className={className} cx='790' cy='200' r='25' fill='#ff0000' filter='url(#glow)' />
          <circle cx='790' cy='200' r='10' fill='#fff' opacity='0.3' />
        </g>

        {/* DIFUSOR TRASERO (Parte baja oscura) */}
        <path d='M 120,330 L 880,330 L 860,380 L 140,380 Z' fill='#111' />

        {/* TUBOS DE ESCAPE DOBLES */}
        {/* Izquierdos */}
        <circle cx='170' cy='370' r='14' fill='#333' stroke='#666' strokeWidth='3' />
        <circle cx='170' cy='370' r='10' fill='#050505' />
        <circle cx='205' cy='370' r='14' fill='#333' stroke='#666' strokeWidth='3' />
        <circle cx='205' cy='370' r='10' fill='#050505' />

        {/* Derechos */}
        <circle cx='795' cy='370' r='14' fill='#333' stroke='#666' strokeWidth='3' />
        <circle cx='795' cy='370' r='10' fill='#050505' />
        <circle cx='830' cy='370' r='14' fill='#333' stroke='#666' strokeWidth='3' />
        <circle cx='830' cy='370' r='10' fill='#050505' />
      </svg>
    </footer>
  )
}
