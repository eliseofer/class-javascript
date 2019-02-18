const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

$.get(`${API_URL}${PEOPLE_URL.replace(':id', 1)}`,
{crossDomain: true},
function (luke) {
  console.log(`Hola yo soy ${luke.name}`);
}
)

function obtenerPersonaje (id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  const opts = {crossDomain: true}
  const func = function (perosna) {
    console.log(`Hola yo soy ${perosna.name}`);
  }

  $.get(url,opts,func)
}

obtenerPersonaje(3, function () {
  obtenerPersonaje(2,)
})
