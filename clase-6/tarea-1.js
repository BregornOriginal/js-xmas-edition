/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, 
borrando los inputs ya creados (investigar cómo en MDN).
*/

// según la respuesta que reciba del prompt voy a tener que crear tantos nodos inputs y labels.
// colocar en el input la edad.
// tengo que crear un botón para calcular.
// ese botón me tiene que mostrar en un elemento <em> u otro a elección la persona de mayor edad,
// de menor edad y el promedio de edad del grupo familiar.
// también puedo crear un botón que al utilizarlo me limpie los inputs ya creados.

// Se entregó la tarea con los 4 botones, en este código se encuentra activo solo el botón
// mayor edad que cumple con todos los cálculos solicitados.

const $formulariosGrupoFamiliar = document.querySelector(
  "#formularios-grupo-familiar"
);

document.querySelector("#calcular").className = "oculto";

const $limpiarFormulario = document.querySelector("#limpiar");

$limpiarFormulario.onclick = function (event) {
  const $resultado = document.querySelector("#resultado");
  let $padre = document.getElementById("contenedor-integrantes");
  let $inputPrincipal = document.getElementById("cantidad-integrantes");
  
  $inputPrincipal.value = "";
  $resultado.innerText = "";
  $padre.innerHTML = "";
  document.querySelector("#calcular").className = "oculto";
  document.querySelector("#enviar-datos").className = "visible";
  
  event.preventDefault();
};

const $botonEnviar = document.querySelector("#enviar-datos");

$botonEnviar.onclick = function (event) {
  
  document.querySelector("#enviar-datos").className = "oculto";
  document.querySelector("#calcular").className = "visible";

  const $ContenedorIntegrantes = document.querySelector("#contenedor-integrantes");
  const $inputIntegrantes = document.querySelector("#cantidad-integrantes");
  const cantidadDeIntegrantes = Number($inputIntegrantes.value);

  if (cantidadDeIntegrantes > 0) {

    for (let i = 1; i <= cantidadDeIntegrantes; i++) {
      const $nuevoInput = document.createElement("input");
      const $nuevoLabel = document.createElement("label");

      $nuevoInput.setAttribute("type", "number");
      $nuevoInput.setAttribute("id", "valores");
      $nuevoInput.setAttribute("placeholder", "Edad");
      $nuevoInput.className = "input-clase";

      $nuevoLabel.innerText = `Integrante ${i}`;
      $nuevoLabel.appendChild($nuevoInput);

      $ContenedorIntegrantes.appendChild($nuevoLabel);
    }
  } else {
    
  }
  event.preventDefault();
};


document.querySelector("#calcular").onclick = function (event) {
  let arrayEdad = [];
  let edadInputs = document.querySelectorAll("#valores");
  const $resultado = document.querySelector("#resultado");

  for (let i = 0; i < edadInputs.length; i++) {
    arrayEdad.push(Number(edadInputs[i].value));
  }

  let menorEdad = calcularMenorEdad(arrayEdad);
  let mayorEdad = calcularMayorEdad(arrayEdad);
  let promedioEdad = calcularPromedioEdad(arrayEdad);

  $resultado.innerText = `El integrante con mayor edad tiene ${mayorEdad} años. El integrante con menor edad tiene ${menorEdad} años. El promedio de edad es de ${promedioEdad} años.`;

  event.preventDefault();
};

const $cantidadIntegrantes = document.querySelector("#cantidad-integrantes").value;


function validarIntegrantes (){
  if ($cantidadIntegrantes <= 0){
    "Este campo debe ser mayor al número 0"
  }
  if ($cantidadIntegrantes === ""){
    "Este campo debe contener al menos un número"
  }
  if (!/^[0-9]+$/.test($cantidadIntegrantes)) {
    "Este campo solo acepta números"
  }
  return "";
};

function probarError(){
  const $errores = document.querySelector("#errores");
  const $error = document.createElement("li");
  $error.innerText = $errores;
  $errores.appendChild($error);
}
