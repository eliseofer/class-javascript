function heredaDe (prototipohijo,prototipopadre){
  var fn = function () {}
  fn.prototype = prototipopadre.prototype
  prototipohijo.prototype = new fn
  prototipohijo.prototype.constructor = prototipohijo
}

function Personas(nombre,apellido,talla) {
  this.nombre = nombre
  this.apellido = apellido
  this.talla = talla
}

Personas.prototype.altura = function () {
  if (this.talla > 1.8) {
    console.log(`${this.nombre} ${this.apellido} es alto.`);
  }else {
    console.log(`${this.nombre} ${this.apellido} es bajo.`);
  }
}

Personas.prototype.saludo = function () {
  //debugger
  console.log(`Hola soy ${this.nombre} ${this.apellido}`);
}

function Desarrollador(nombre,apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

heredaDe(Desarrollador,Personas)

Desarrollador.prototype.saludo = function () {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
}


//var ejecute = new Personas('Joel','Fernandez',2.0)
//var ejecute2 = new Personas('Raul','Castro',1.8)
//var ejecute3 = new Personas('Homero','Simpsom',1)
