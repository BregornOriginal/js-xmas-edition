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

const $divContenedorIntegrantes = document.createElement("div");
$divContenedorIntegrantes.setAttribute("id", "contenedor-integrantes");

const $body = document.getElementById("body");
$body.appendChild($divContenedorIntegrantes);

const $resultado = document.createElement("p");
$resultado.setAttribute("id", "resultado");
$body.appendChild($resultado);

const $labelcalcular = document.createElement("label");
$labelcalcular.className = "label-clase";
$labelcalcular.innerText = "Calcular";

const $botonEnviar = document.createElement("button");
$botonEnviar.setAttribute("id", "enviar-datos");
// $botonEnviar.setAttribute("type", SubmitEvent);
$botonEnviar.className = "label-clase";
$botonEnviar.innerText = "Enviar";
$formulariosGrupoFamiliar.appendChild($botonEnviar);

const $calcular = document.createElement("button");
$calcular.appendChild($labelcalcular);
$calcular.setAttribute("id", "calcular");
// $calcular.setAttribute("type", SubmitEvent);
$formulariosGrupoFamiliar.appendChild($calcular);

document.querySelector("#calcular").className = "oculto";

const $limpiarFormulario = document.createElement("button");
$limpiarFormulario.setAttribute("id", "limpiar");
$limpiarFormulario.className = "label-clase";
$limpiarFormulario.innerText = "Limpiar";
$formulariosGrupoFamiliar.appendChild($limpiarFormulario);

$limpiarFormulario.onclick = function (event) {
  event.preventDefault();
  let $padre = document.getElementById("contenedor-integrantes");
  let $inputPrincipal = document.getElementById("cantidad-integrantes");
  console.log($padre);
  $inputPrincipal.value = "";
  $resultado.innerText = "";
  $padre.innerHTML = "";
  document.querySelector("#calcular").className = "oculto";
  document.querySelector("#enviar-datos").className = "visible";
};

// function crearInput(textoLabel) {
//   const $nuevoForm = document.createElement("form");
//   const $orderList = document.createElement("ol");
//   $nuevoForm.appendChild($nuevoInput);
//   $nuevoLabel.appendChild($orderList);
//   $formulariosGrupoFamiliar.appendChild($nuevoLabel);
// }

$botonEnviar.onclick = function (event) {
  document.querySelector("#enviar-datos").className = "oculto";
  document.querySelector("#calcular").className = "visible";
  const $inputIntegrantes = document.querySelector("#cantidad-integrantes");
  const cantidadDePersonas = Number($inputIntegrantes.value);
  if (cantidadDePersonas > 0) {

    for (let i = 1; i <= cantidadDePersonas; i++) {
      const $nuevoInput = document.createElement("input");
      const $nuevoLabel = document.createElement("label");

      $nuevoInput.setAttribute("type", "number");
      $nuevoInput.setAttribute("id", "valores");
      $nuevoInput.setAttribute("placeholder", "Edad");
      $nuevoInput.className = "input-clase";

      $nuevoLabel.innerText = `Integrante ${i}`;
      $nuevoLabel.appendChild($nuevoInput);

      $divContenedorIntegrantes.appendChild($nuevoLabel);
    }
  } else {
    return alert("Por favor ingrese un número mayor a 0");
  }
  event.preventDefault();
};

function calcularMayorEdad(arrayEdad) {
  let valorMaximo = arrayEdad[0];
  for (i = 0; i < arrayEdad.length; i++) {
    if (arrayEdad[i] > valorMaximo) {
      valorMaximo = arrayEdad[i];
    }
  }
  return valorMaximo;
}

function calcularMenorEdad(arrayEdad) {
  let valorMinimo = arrayEdad[0];
  for (i = 0; i < arrayEdad.length; i++) {
    if (arrayEdad[i] < valorMinimo) {
      valorMinimo = arrayEdad[i];
    }
  }
  return valorMinimo;
}

function calcularPromedioEdad(arrayEdad) {
  let promedioEdad = 0;
  let resultado = 0;
  for (i = 0; i < arrayEdad.length; i++) {
    resultado += +arrayEdad[i];
    promedioEdad = resultado / arrayEdad.length;
  }
  return promedioEdad;
}

document.querySelector("#calcular").onclick = function (event) {
  let arrayEdad = [];
  let edadInputs = document.querySelectorAll("#valores");

  for (let i = 0; i < edadInputs.length; i++) {
    arrayEdad.push(Number(edadInputs[i].value));
  }

  let menorEdad = calcularMenorEdad(arrayEdad);
  let mayorEdad = calcularMayorEdad(arrayEdad);
  let promedioEdad = calcularPromedioEdad(arrayEdad);

  $resultado.innerText = `El integrante con mayor edad tiene ${mayorEdad} años. El integrante con menor edad tiene ${menorEdad} años. El promedio de edad es de ${promedioEdad} años.`;

  event.preventDefault();
};
/*
document.querySelector("#reload").onclick = function () {
  location.reload();
};
*/
