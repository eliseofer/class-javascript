class Personas {
  constructor(nombre,apellido,talla) {
    this.nombre = nombre
    this.apellido = apellido
    this.talla = talla
  }

  saludo(sal) {
      console.log(`Hola soy ${this.nombre} ${this.apellido}`);
      if (sal) {
        sal(this.nombre, this.apellido)
      }
  }

  altura() {
    if (this.talla > 1.8) {
      console.log(`${this.nombre} ${this.apellido} es alto.`);
    }else {
      console.log(`${this.nombre} ${this.apellido} es bajo.`);
    }
  }
}


class Desarrollador extends Personas {
  constructor(nombre,apellido,altura) {
    super(nombre, apellido, altura)
  }

  saludo (sal) {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
    if (sal) {
      sal(this.nombre, this.apellido, true)
    }
  }
}


function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen dia ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`Ah mira no sabia que eras desarrollador.`);
  }
}

var ejecute = new Personas('Joel','Fernandez',2.0)
var ejecute2 = new Personas('Raul','Castro',1.8)
var ejecute3 = new Desarrollador('Homero','Simpsom',3)

ejecute.saludo()
ejecute2.saludo(responderSaludo)
ejecute3.saludo(responderSaludo)
