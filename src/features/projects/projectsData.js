import { ICONS_SVG } from '../../shared/constans'
import { Board } from './conecta-4/components/Board/Board'

export const projects = [
  {
    name: 'Conecta 4',
    img: [
      new URL('../../assets/proyects-img/conecta4-1.webp', import.meta.url).href,
      new URL('../../assets/proyects-img/conecta4-2.webp', import.meta.url).href
    ],
    frontPage: 1,
    component: Board,
    technologies: [
      ICONS_SVG.HTML5,
      ICONS_SVG.CSS,
      ICONS_SVG.JavaScript,
      ICONS_SVG.React,
      ICONS_SVG.ESLint,
      ICONS_SVG.Vite,
    ],
    details: 'Para poner a prueba mis bases en React más allá de las aplicaciones tradicionales, decidí construir este clásico juego de mesa. El verdadero reto aquí no fue solo la interfaz, sino la gestión compleja del estado interno y la lógica de victoria. Diseñé algoritmos mediante la manipulación avanzada de arreglos para detectar jugadas ganadoras y encapsulé toda esta lógica en Custom Hooks. Fue un ejercicio excelente para entender a fondo el ciclo de vida de los componentes, el renderizado condicional y cómo mantener un código modular y predecible.',
    github: 'https://github.com/JuanAG1003/Conecta-4---Juego-Interactivo'
  },
  {
    name: 'Buscador de Películas Web',
    img: [
      new URL('../../assets/proyects-img/buscador-1.webp', import.meta.url).href,
      new URL('../../assets/proyects-img/buscador-2.webp', import.meta.url).href,
      new URL('../../assets/proyects-img/buscador-3.webp', import.meta.url).href,
    ],
    frontPage: 1,
    technologies: [
      ICONS_SVG.HTML5,
      ICONS_SVG.CSS,
      ICONS_SVG.JavaScript,
      ICONS_SVG.React,
      ICONS_SVG.Vite,
      ICONS_SVG.ESLint
    ],
    details: 'Consumir APIs es una tarea del día a día, pero mi objetivo con este buscador era hacerlo garantizando el mejor rendimiento posible. Para evitar saturar el servidor con peticiones innecesarias cada vez que el usuario escribía, implementé un mecanismo de debounce. Además, me enfoqué en crear una experiencia de usuario muy fluida, manejando correctamente los estados de carga y diseñando una interfaz completamente responsiva. Este proyecto me ayudó a consolidar mis habilidades en la optimización de asincronía y el manejo eficiente del DOM en interfaces modernas.',
    github: 'https://github.com/JuanAG1003/Buscador-de-Pel-culas'
  },
  {
    name: 'Carrito de Compras (E-commerce)',
    img: [
      new URL('../../assets/proyects-img/shop-1.webp', import.meta.url).href,
      new URL('../../assets/proyects-img/shop-2.webp', import.meta.url).href
    ],
    frontPage: 0,
    technologies: [
      ICONS_SVG.HTML5,
      ICONS_SVG.CSS,
      ICONS_SVG.JavaScript,
      ICONS_SVG.React,
      ICONS_SVG.Vite,
      ICONS_SVG.ESLint
    ],
    details: 'A medida que una aplicación web crece, pasar datos entre componentes puede volverse insostenible. Para anticiparme a este problema, desarrollé este simulador de e-commerce con el objetivo de dominar el estado global usando las herramientas nativas de React. Combiné Context API con el hook useReducer para centralizar las operaciones del carrito. Mi mayor logro en este desarrollo fue abstraer el contexto a través de un Custom Hook; esto me permitió desacoplar la lógica, asegurando que la arquitectura sea escalable y flexible ante futuros cambios.',
    github: 'https://github.com/JuanAG1003/Carrito-de-Compras-E-commerce-'
  },
  {
    name: 'Panel de Gestión de Usuarios (CRUD)',
    img: [
      new URL('../../assets/proyects-img/panel-1.webp', import.meta.url).href,
      new URL('../../assets/proyects-img/panel-2.webp', import.meta.url).href
    ],
    frontPage: 0,
    technologies: [
      ICONS_SVG.HTML5,
      ICONS_SVG.CSS,
      ICONS_SVG.JavaScript,
      ICONS_SVG.React,
      ICONS_SVG.Redux,
      ICONS_SVG.Vite,
      ICONS_SVG.ESLint
    ],
    details: 'Después de comprender a fondo el manejo de estado nativo, quise acercarme a un entorno de desarrollo de nivel empresarial. Construí este panel de administración específicamente para integrar y dominar Redux Toolkit. Diseñé una tienda global (Store) y la dividí en porciones lógicas (Slices) para aislar la gestión de los usuarios. Desarrollar todo el flujo de creación, lectura, actualización y eliminación de datos bajo esta arquitectura me dio una visión muy clara de cómo las aplicaciones a gran escala mantienen su flujo de información ordenado y fácil de mantener.',
    github: 'https://github.com/JuanAG1003/Panel-de-Gestion-de-Usuarios-CRUD-'
  },
  {
    name: 'Kin Conecta - Plataforma de Turismo Local',
    img: [
      new URL('../../assets/proyects-img/kin-1.webp', import.meta.url).href,
      new URL('../../assets/proyects-img/kin-2.webp', import.meta.url).href
    ],
    frontPage: 0,
    technologies: [
      ICONS_SVG.HTML5,
      ICONS_SVG.CSS,
      ICONS_SVG.JavaScript,
      ICONS_SVG.Git,
      ICONS_SVG.GitHub
    ],
    details: 'Este proyecto tiene un gran valor para mí porque representó mi integración total al desarrollo colaborativo profesional. Durante tres meses, trabajé en equipo bajo la metodología ágil SCRUM para dar vida a una plataforma web diseñada para democratizar el turismo y conectar a viajeros con experiencias auténticas. Mi responsabilidad se centró en construir la interfaz de usuario, asegurar su responsividad y lograr la integración fluida del Front-End con las APIs del sistema. Fue la experiencia perfecta para aprender a coordinar código con Git en equipo, mantener comunicación técnica efectiva y entregar valor constante en un entorno de trabajo real.',
    github: 'https://github.com/isa-capa/KinConecta',
    demo: 'https://kin-conecta-nine.vercel.app'
  },
]
