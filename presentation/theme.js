import Provider from "./components/Provider"

export default {
  fontSizes: ['0.75em', '1em', '1.5em', '2em', '3em'],
  font: '"neue-haas-unica", "Halyard", system-ui, sans-serif',
  monospace: '"Dank Mono", "dm", "Fira Code", "Fira Mono", Menlo, monospace',
  colors: {
    text: '#131213',
    background: '#fbf9fc',
    link: '#8c7ae6',
    pre: '#f0f',
    preBackground: '#333',
    code: '#f0f'
  },
  css: {
    fontSize: '18px',
    textAlign: 'left',
    '@media screen and (min-width:64em)': {
      fontSize: '34px'
    }
  },
  heading: {
    color: '#111',
    fontWeight: 600
  },
  quote: {
    fontWeight: 600
  },
  ol: {
    textAlign: 'left'
  },
  ul: {
    textAlign: 'left'
  },
  Provider,
}
