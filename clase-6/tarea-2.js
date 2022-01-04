/*
TAREA CLASE 6:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar)
inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.

Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual,
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

//  TAREA CLASE 8
// A las 2 tareas de la clase 6, ponerles las validaciones que consideren
// necesarias (usando RegExp, Objetos, forEach, poner estilos, mostrar los errores
//     en la interfaz de usuario y escribir pruebas).

// TIP: Las edades no pueden tener decimales.
//

const $form = document.querySelector("form");

const $buttonCalculate = document.createElement("button");
$buttonCalculate.innerText = "Calculate";
$buttonCalculate.setAttribute("id", "button-calculate");
$buttonCalculate.className = "hidden";

const $newDiv = document.createElement("div");
$newDiv.setAttribute("id", "container-annual-salary");
$form.appendChild($newDiv);
$form.appendChild($buttonCalculate);

document.querySelector("#add-member").onclick = function (event) {

  $buttonCalculate.className = "";

  const $newInput = document.createElement("input");
  const $newLabel = document.createElement("label");
  let inputNumber = document.querySelectorAll("#container-annual-salary input").length;

  for (let i = 0; i <= inputNumber; i++) {
    $newLabel.setAttribute("id", "label-members-annual-salary");
    $newLabel.innerText = `Member annual salary #: ${i}`;
    $newLabel.appendChild($newInput);
    $newDiv.appendChild($newLabel);
    $newInput.setAttribute("type", "number");
    $newInput.setAttribute("id", `members-annual-salary${i}`);
    $newInput.setAttribute("placeholder", "Annual salary");
    $newInput.value = 0;
  };

  event.preventDefault();
  return false;
};

const $buttonRemoveMember = document.getElementById("remove-member");

$buttonRemoveMember.onclick = function (event) {

  let $dad = document.getElementById("container-annual-salary");
  errors = {};
  $dad.lastChild.remove();
  if (!document.querySelector("#label-members-annual-salary")) {
    document.querySelector("#container-strong").className = "hidden";
    document.querySelector("#button-calculate").className = "hidden";
  };
  event.preventDefault();
};

function getAnnualSalaryOfMember() {

  let salaries = [];
  let inputNumber = document.querySelectorAll("#container-annual-salary input");
  for (let i = 0; i < inputNumber.length; i++) {
    if (inputNumber[i].value != "") {
      salaries.push(Number(inputNumber[i].value));
    }
  };
  return salaries;
};

document.querySelector("#button-calculate").onclick = function (event) {

  let memberSalary = getAnnualSalaryOfMember();
  let counter = 0;

  memberSalary.forEach(function (salary) {
    let errorAnnualSalary = validateAnnualSalary(salary);
    if (errorAnnualSalary) {
      errors[`members-annual-salary${counter}`] = errorAnnualSalary;
      counter++;
    } else {
      if (document.querySelector(`#members-annual-salary${counter}error`)) {
        document.querySelector(`#members-annual-salary${counter}error`).remove();
      }
      document.querySelector(`#members-annual-salary${counter}`).className = "";
      delete errors[`members-annual-salary${counter}`];
      counter++;
    }
  });

  const $divStrong = document.createElement("div");
  $divStrong.setAttribute("id", "container-strong");
  const $divContenedorStrong = document.querySelectorAll("#container-strong");

  const $resultStrong = document.createElement("strong");
  $resultStrong.setAttribute("class", "result");
  $divStrong.appendChild($resultStrong);
  $form.appendChild($divStrong);

  for (let i = 0; i < $divContenedorStrong.length; i++) {
    $divContenedorStrong[i].remove();
  }

  const isSuccessfull = handleErrors(errors) === 0;

  if (isSuccessfull) {
    let maxSalary = calculateMaxSalary(memberSalary);
    let minSalary = calculateMinSalary(memberSalary);
    let averageAnnualSalary = calculateAverageAnnualSalary(memberSalary);
    let averageMensualSalary =
      calculateAverageMonthlySalary(averageAnnualSalary);

    $resultStrong.innerText = `
  The maximum salary is ${maxSalary} dollars. 
  The minimum salary is ${minSalary} dollars. 
  The average annual salary is ${averageAnnualSalary} dollars. 
  The average mensual salary is ${averageMensualSalary} dollars.`;
  };
  event.preventDefault();
  return false;
};

function validateAnnualSalary(salary) {

  if (salary === "") {
    return "Please enter a value on this field";
  }
  if (salary < 0) {
    return "Please enter a value greater than 0";
  };
  if (!/^[0-9]+$/.test(salary)) {
    return "This field only accept numbers";
  };
  return "";
};

let errors = {};

function handleErrors(errors) {

  const keys = Object.keys(errors);
  let errorsCounter = 0;

  keys.forEach(function (key) {
    const errorElement = $form[key].parentElement;
    const errorSalary = errors[key];

    if (errorSalary) {
      errorsCounter++;
      $form[key].className = "error";

      const $descriptionErrors = document.createElement("p");
      $descriptionErrors.id = [key] + "error";
      $descriptionErrors.innerText = errorSalary;

      if (!document.querySelector(`#${key}error`))
        errorElement.appendChild($descriptionErrors);
    }
  });
  return errorsCounter;
}
