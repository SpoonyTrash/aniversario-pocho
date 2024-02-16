import { clacularDiferenciaDesdeFecha } from "./fechaUtils.js"

const palabras = ['meses', 'dias', 'horas']
let indiceActual = 0


const btnIzq1 = document.getElementById('btnIzq1')
const btnDer1 = document.getElementById('btnDer1')
const displayTime = document.getElementById('time')
const displayWord = document.getElementById('timeWord')

function siguienteFormato(){
  if (indiceActual < palabras.length - 1){
    indiceActual++
  } else{
    indiceActual = 0
  }


  actualizarDisplay()
}

function anteriorFormato(){
  if (indiceActual > 0){
    indiceActual--
  } else{
    indiceActual = palabras.length - 1
  }
  actualizarDisplay()
}

function actualizarDisplay(){
  displayTime.textContent = clacularDiferenciaDesdeFecha(palabras[indiceActual])
  displayWord.textContent = palabras[indiceActual].toUpperCase()
}

actualizarDisplay()
btnDer1.addEventListener('click', siguienteFormato)
btnIzq1.addEventListener('click', anteriorFormato)


const images =[
  './images/amor.jpg',
  './images/amor7.jpg',
  './images/amor8.jpg',
  './images/amor4.jpg',
  './images/amor5.jpg',
  './images/amor6.jpg',
  './images/amor9.jpg',
  './images/amor10.png',
  './images/amor11.png',
  './images/amor12.jpg',
  './images/amor13.jpg',
  './images/amor14.jpg',
  './images/amor15.jpg',
  './images/amor16.png',
  './images/amor17.png',
  './images/amor18.png',
  './images/amor19.png',
  './images/amor20.png',
  './images/Captura.png',
  './images/amor21.jpg'
]

let indice = 0

function actualizarFoto(){
  document.getElementById('fotito').src = images[indice]
}

actualizarFoto()

document.getElementById('btnIzq2').addEventListener('click', () => {
  indice = (indice - 1 + images.length) % images.length;
  actualizarFoto()
})

document.getElementById('btnDer2').addEventListener('click', () => {
  indice = (indice + 1) % images.length;
  actualizarFoto()
})