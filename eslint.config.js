import neostandard from 'neostandard'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  // 1. Configuración de Neostandard con exclusiones integradas
  ...neostandard({
    ignores: ['dist/**/*', 'node_modules/**/*', 'public/**/*'], // Evita que revise estas carpetas
    noJsx: false // Asegura que las reglas de JSX estén totalmente activas
  }),

  // 2. Reglas obligatorias para Fast Refresh de Vite en ficheros React (JS/JSX)
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }, // Permite exportar constantes junto a tus componentes de React
      ],
    },
  },
]
