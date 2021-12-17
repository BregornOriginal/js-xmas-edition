/*
TAREA-1 CLASE 6: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calculate", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, 
borrando los inputs ya creados (investigar cómo en MDN).
*/

const $familaryGroupFormulary = document.querySelector(
  "#familary-group-formulary"
);

document.querySelector("#calculate").className = "hidden";

const $cleanFormulary = document.querySelector("#clean");

$cleanFormulary.onclick = function (event) {
  const $result = document.querySelector("#result");
  let $pather = document.getElementById("container-members");
  let $principalInput = document.getElementById("number-members");
  
  $principalInput.value = "";
  $result.innerText = "";
  $pather.innerHTML = "";
  document.querySelector("#calculate").className = "hidden";
  document.querySelector("#send-data").className = "visible";
  
  event.preventDefault();
};

const $sendButton = document.querySelector("#send-data");

$sendButton.onclick = function (event) {
  
  document.querySelector("#send-data").className = "hidden";
  document.querySelector("#calculate").className = "visible";

  const $containerMembers = document.querySelector("#container-members");
  const $inputMembers = document.querySelector("#number-members");
  const numberOfMembers = Number($inputMembers.value);

  if (numberOfMembers > 0) {

    for (let i = 1; i <= numberOfMembers; i++) {
      const $newInputMember = document.createElement("input");
      const $NewLabelMember = document.createElement("label");

      $newInputMember.setAttribute("type", "number");
      $newInputMember.setAttribute("id", "values");
      $newInputMember.setAttribute("placeholder", "Age");
      $newInputMember.className = "input-clase";

      $NewLabelMember.innerText = `Member # ${i}`;
      $NewLabelMember.appendChild($newInputMember);

      $containerMembers.appendChild($NewLabelMember);
    }
  } else {
    
  }
  event.preventDefault();
};


document.querySelector("#calculate").onclick = function (event) {
  let arrayAge = [];
  let ageInputs = document.querySelectorAll("#values");
  const $result = document.querySelector("#result");

  for (let i = 0; i < ageInputs.length; i++) {
    arrayAge.push(Number(ageInputs[i].value));
  }

  let youngerAge = calculateYoungerAge(arrayAge);
  let olderAge = calculateOlderAge(arrayAge);
  let averageAge = calculateAverageAge(arrayAge);

  $result.innerText = `The oldest member is ${olderAge} years old. The youngest member is ${youngerAge} years old. The average age of the members is ${averageAge} years.`;

  event.preventDefault();
};

//  TAREA CLASE 8
// A las 2 tareas de la clase 6, ponerles las validaciones que consideren
// necesarias (usando RegExp, Objetos, forEach, poner estilos, mostrar los errores
//     en la interfaz de usuario y escribir pruebas).

// TIP: Las edades no pueden tener decimales.
//

const $numberOfMembers = document.querySelector("#number-members").value;


function validarIntegrantes (){
  if ($numberOfMembers <= 0){
    "This field must be greater than the number 0"
  }
  if ($numberOfMembers === ""){
    "This field must have one number at least"
  }
  if (!/^[0-9]+$/.test($numberOfMembers)) {
    "This field only accept numbers"
  }
  return "";
};

function tryError(){
  const $errors = document.querySelector("#errors");
  const $error = document.createElement("li");
  $error.innerText = $errors;
  $errors.appendChild($error);
}
