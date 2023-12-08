export class Trilha {
  cursos
  constructor() {
    this.cursos = []
  }

  adicionarCurso(curso) {
    this.cursos.push(curso)
  }
}
