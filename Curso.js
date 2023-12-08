export class Curso {
  nome
  cargaHoraria
  valor

  constructor(nome, cargaHoraria, valor) {
    this.nome = nome
    this.cargaHoraria = cargaHoraria
    this.valor = valor
  }

  getInfo() {
    return `Curso: ${this.nome} - Carga Horária: ${this.cargaHoraria} horas - Valor: ${this.valor} `
  }
}
