//var nombre='Joel'
//var nombre2='Dario'
var Joel={
  nombre: 'Joel',
  apellido: 'Fernandez',
  edad: 26
}
var Mateo={
  nombre: 'Mateo',
  apellido: 'Brañez',
  edad: 30
}
function imprimirNombreEnMayusculas({nombre}) {
//  var nombre=persona.nombre.toUpperCase()
//  console.log(persona.nombre.toUpperCase())
console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(Joel)
imprimirNombreEnMayusculas(Mateo)
