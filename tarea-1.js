/*
TAREA-1 CLASE 6: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calculate", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, 
borrando los inputs ya creados (investigar cómo en MDN).
*/

const $familaryGroupForm = document.querySelector(
  "#familary-group-formulary"
);

document.querySelector("#button-calculate").className = "hidden";

const $cleanFormulary = document.querySelector("#button-clean");
$cleanFormulary.className = "hidden";

$cleanFormulary.onclick = function (event) {
  document.querySelector("#amount-of-members").className = "";

  document.querySelector("#number-members").className = "";
  const $result = document.querySelector("#result");
  let $inputOfMembers = document.getElementById("number-members");
  const $newMember = document.querySelector("#list-of-members");

  $inputOfMembers.value = "";
  $result.innerText = "";
  $newMember.innerHTML = "";
  document.querySelector("#button-calculate").className = "hidden";
  document.querySelector("#button-send-data").className = "visible";
  document.querySelector("#number-memberserror").innerText = "";
  $cleanFormulary.className = "hidden";

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

      $newMember.appendChild($NewListOfMember);

      $newInputMember.setAttribute("type", "number");
      $newInputMember.setAttribute("id", `values-${i}`);
      $newInputMember.setAttribute("placeholder", "Age");
      $newInputMember.className = "input-clase";

      $NewLabelMember.setAttribute = 
      $NewLabelMember.innerText = `# ${i} Member age: `;
      $NewListOfMember.appendChild($NewLabelMember);
      $NewLabelMember.appendChild($newInputMember);

      
      $cleanFormulary.className = "hidden";
    }
  }
};

const $sendButton = document.querySelector("#button-send-data");

$sendButton.onclick = function (event) {
  $cleanFormulary.className = "hidden";
  const amountOfMembers = document.querySelector("#number-members").value;

  const erorrAmountOfMembers = validateAmountOfMembers(amountOfMembers);

  if (erorrAmountOfMembers) {
    document.querySelector("#number-members").className = "error";
    errors["number-members"] = erorrAmountOfMembers;
    handleErrors(errors);
  } else {
    document.querySelector("#number-members").className = "";
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
  
  let counter = 0;
  const ages = getAgeOfMembers();
  
  ages.forEach(function (age) {
    let errorAgeOfMember = validateAgeOfMembers(age);
    
    if (errorAgeOfMember) {
      document.querySelector(`#values-${counter + 1}`).className = "error";
      errors[`values-${counter + 1}`] = errorAgeOfMember;
      counter++;
    } else {
      document.querySelector(`#values-${counter + 1}`).className = "input-clase";
      document.querySelector(`#values-${counter + 1}error`).innerText = "";
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
  let errorsCounter = 0;
  

  keys.forEach(function (key) {
    const $inputLabel = $familaryGroupForm[key].parentElement;
    const error = errors[key];

    if (error) {
      errorsCounter++;
      
      const $error = document.createElement("p");
      $error.innerText = error;
      $error.id = [key] + "error";

      if(!document.querySelector(`#${key}error`)){
        $inputLabel.appendChild($error);
      } else {
        $inputLabel.appendChild($error);
        if (document.querySelector(`#${key}error`));
        document.querySelector(`#${key}error`).remove();
      
    }
  }
  });
  return errorsCounter;
};
