 export function clacularDiferenciaDesdeFecha(tipo){
  const fechaInicio = new Date('2023-02-16')
  const fechaActual = new Date()  

  const diferenciaMilisegundos = fechaActual - fechaInicio;

  switch(tipo){
    case 'meses':
      let meses = (fechaActual.getFullYear() - fechaInicio.getFullYear()) * 12
      meses -= fechaInicio.getMonth()
      meses += fechaActual.getMonth()
    
      return Math.max(meses, 0)
    case 'dias':
      return Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24))
    case 'horas':
      return Math.floor(diferenciaMilisegundos / (1000 * 60 * 60))
    case 'minutos':
      return Math.floor(diferenciaMilisegundos / (1000 * 60))
    case 'segundos':
      return Math.floor(diferenciaMilisegundos / 1000)
  }
}