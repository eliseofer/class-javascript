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
};

var ejecute = new Personas('Joel','Fernandez',2.0)
var ejecute2 = new Personas('Raul','Castro',1.8)
var ejecute3 = new Personas('Homero','Simpsom',1)
