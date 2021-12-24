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

document.querySelector("#button-calculate").className = "hidden";

const $cleanFormulary = document.querySelector("#button-clean");
$cleanFormulary.className = "hidden";

$cleanFormulary.onclick = function (event) {
  document.querySelector("#amount-of-members").className = "";
  const $errors = document.querySelector("#errors");
  $errors.innerText = "";

  document.querySelector("#number-members").className = "";
  const $result = document.querySelector("#result");
  let $inputOfMembers = document.getElementById("number-members");
  const $newMember = document.querySelector("#list-of-members");

  $inputOfMembers.value = "";
  $result.innerText = "";
  $newMember.innerHTML = "";
  document.querySelector("#button-calculate").className = "hidden";
  document.querySelector("#button-send-data").className = "visible";

  event.preventDefault();
};

function createMembers() {
  const $inputMembers = document.querySelector("#number-members");
  const numberOfMembers = Number($inputMembers.value);

  if (numberOfMembers > 0) {
    for (let i = 1; i <= numberOfMembers; i++) {
      const $newInputMember = document.createElement("input");
      const $NewLabelMember = document.createElement("label");
      const $NewListOfMember = document.createElement("li");
      const $newMember = document.querySelector("#list-of-members");
      const $fda = document.createElement("li");

      $fda.setAttribute("id", `error-member${i}`);
      $fda.setAttribute("class", "hidden-error");

      $newMember.appendChild($NewListOfMember);

      $newInputMember.setAttribute("type", "number");
      $newInputMember.setAttribute("id", `values-${i}`);
      $newInputMember.setAttribute("placeholder", "Age");
      $newInputMember.className = "input-clase";

      $NewLabelMember.innerText = `# ${i} Member age: `;
      $NewListOfMember.appendChild($NewLabelMember);
      $NewLabelMember.appendChild($fda);
      $NewLabelMember.appendChild($newInputMember);

      const $errors = document.querySelector("#errors");
      $errors.innerText = "";
      $cleanFormulary.className = "hidden";
    }
  }
};

const $sendButton = document.querySelector("#button-send-data");

$sendButton.onclick = function (event) {
  $cleanFormulary.className = "hidden";
  const $errors = document.querySelector("#errors");
  $errors.innerText = "";
  const amountOfMembers = document.querySelector("#number-members").value;

  const erorrAmountOfMembers = validateAmountOfMembers(amountOfMembers);

  if (erorrAmountOfMembers) {
    errors["number-members"] = erorrAmountOfMembers;
    handleErrors(errors);
  } else {
    delete errors["number-members"];
    $cleanFormulary.className = "";
    document.querySelector("#amount-of-members").className = "hidden";
    document.querySelector("#button-send-data").className = "hidden";
    document.querySelector("#button-calculate").className = "";
    createMembers();
  }
  event.preventDefault();
};

function getAgeOfMembers() {
  let arrayAge = [];
  let $age = document.querySelectorAll("#list-of-members input");
  for (let i = 0; i < $age.length; i++) {
    arrayAge.push(Number($age[i].value));
  }
  return arrayAge;
};

document.querySelector("#button-calculate").onclick = function (event) {
  
  const $errors = document.querySelector("#errors");
  $errors.innerText = "";
  let counter = 0;
  const ages = getAgeOfMembers();

  ages.forEach(function (age) {
    document.querySelector(`#values-${counter + 1}`).className = "";
    let errorAgeOfMember = validateAgeOfMembers(age);

    if (errorAgeOfMember) {
      errors[`values-${counter + 1}`] = errorAgeOfMember;
      counter++;
      $cleanFormulary.className = "hidden";
    } else {
      delete errors[`values-${counter + 1}`];
      counter++;
    }
  });

  const isSuccessfull = handleErrors(errors) === 0;

  if (isSuccessfull) {
    $cleanFormulary.className = "";
    const $result = document.querySelector("#result");
    let youngerAge = calculateYoungerAge(ages);
    let olderAge = calculateOlderAge(ages);
    let averageAge = calculateAverageAge(ages);

    $result.innerText = `The oldest member is ${olderAge} years old. The youngest member is ${youngerAge} years old. The average age of the members is ${averageAge} years.`;
  }
  event.preventDefault();
};

//  TAREA CLASE 8
// A las 2 tareas de la clase 6, ponerles las validaciones que consideren
// necesarias (usando RegExp, Objetos, forEach, poner estilos, mostrar los errores
//     en la interfaz de usuario y escribir pruebas).

// TIP: Las edades no pueden tener decimales.
//



function validateAmountOfMembers(amountOfMembers) {
  if (amountOfMembers === "") {
    return "This field must have one number at least";
  };

  if (amountOfMembers <= 0) {
    return "This field must be greater than the number 0";
  };

  if (amountOfMembers >= 50) {
    return "The max amount of members accepted is 50 maximum";
  };

  if (!/^[0-9]+$/.test(amountOfMembers)) {
    return "This field only accept numbers";
  };
  return "";
};

function validateAgeOfMembers(age) {
  if (age >= 150) {
    return "The age of member can't by more than 150";
  };
  if (age <= 0) {
    return "The age of member must by higher than 0";
  };
  if (!/^[0-9]+$/.test(age)) {
    return "This field only accept numbers";
  };
  return "";
};

let errors = {};

function handleErrors(errors) {
  const keys = Object.keys(errors);
  const $errors = document.querySelector("#errors");
  let errorsCounter = 0;
  const $fda = document.querySelector(".hidden-error");

  keys.forEach(function (key) {
    const error = errors[key];
    if (error) {
      $familaryGroupFormulary[key].className = "error";
      errorsCounter++;

      const $error = document.createElement("li");
      $error.innerText = error;
      $error.id = [key] + "error";
      
      if (!document.querySelector(`#values-${key}error`))
      $fda.appendChild($error);
    } else {
      $familaryGroupFormulary[key].className = "";
      if (document.querySelector(`#${key}error`)) {
        document.querySelector(`#${key}error`).remove();
      }
    }
  });
  return errorsCounter;
};
