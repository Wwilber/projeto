import { CursoOnline } from './CursoOnline.js'
import { Trilha } from './Trilha.js'

const teste = new CursoOnline(
  'javascript',
  '300hs',
  1000.0,
  'http://teste.com.br'
)
console.log(teste.getInfo())

// const trilhaweb = new catalogo()
