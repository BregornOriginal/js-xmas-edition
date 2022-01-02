/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar)
inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.

Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual,
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

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
  $buttonCalculate.className = "view";
  const $newInput = document.createElement("input");
  const $newLabel = document.createElement("label");

  inputNumber = document.querySelectorAll(
    "#container-annual-salary input"
  ).length;

  for (let i = 0; i <= inputNumber; i++) {
    $newLabel.setAttribute("id", "label-members-annual-salary");
    $newLabel.innerText = "Member annual salary";
    $newLabel.appendChild($newInput);
    $newDiv.appendChild($newLabel);
    $newInput.setAttribute("type", "number");
    $newInput.setAttribute("id", `members-annual-salary${i}`);
    $newInput.setAttribute("placeholder", "Annual salary");
    $newInput.value = 0;
  }

  event.preventDefault();
  return false;
};

const $buttonRemoveMember = document.getElementById("remove-member");

$buttonRemoveMember.onclick = function (event) {
  let $dad = document.getElementById("container-annual-salary");
  $dad.lastChild.remove();
  console.log(document.querySelectorAll(
    "#container-annual-salary input"
  ));
  if (!document.querySelector("#label-members-annual-salary")) {
    document.querySelector("#container-strong").className = "hidden";
    document.querySelector("#button-calculate").className = "hidden";

  }
  event.preventDefault();
};

function getAnnualSalaryOfMember() {
  
  let arraySalary = [];
  let inputAnnualSalary = inputNumber = document.querySelectorAll(
    "#container-annual-salary input"
  );
  console.log (document.querySelectorAll(
    "#container-annual-salary input"
  ))
  for (let i = 0; i < inputAnnualSalary.length; i++) {
    if (inputAnnualSalary[i].value != "") {
      arraySalary.push(Number(inputAnnualSalary[i].value));
    };
  };
  return arraySalary;
};

document.querySelector("#button-calculate").onclick = function (event) {
  console.log(document.querySelectorAll(
    "#container-annual-salary input"
  ));
  let memberSalary = getAnnualSalaryOfMember();
  let counter = 0;
  console.log(memberSalary);

  memberSalary.forEach(function (salary) {

    let errorAnnualSalary = validateAnnualSalary(salary);
    if (errorAnnualSalary) {
      errors[`members-annual-salary${counter}`] = errorAnnualSalary;
      console.log(errors[`members-annual-salary${counter}`]);
      counter++;
    } else {
      console.log(errors[`members-annual-salary${counter}`])
      delete errors[`members-annual-salary${counter}`];
      console.log(errors[`members-annual-salary${counter}`])

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
      calculateAverageMensualSalary(averageAnnualSalary);

    $resultStrong.innerText = `
  The maximum salary is ${maxSalary} dollars. 
  The minimum salary is ${minSalary} dollars. 
  The average annual salary is ${averageAnnualSalary} dollars. 
  The average mensual salary is ${averageMensualSalary} dollars.`;
  }
  event.preventDefault();
  return false;
};

//  TAREA CLASE 8
// A las 2 tareas de la clase 6, ponerles las validaciones que consideren
// necesarias (usando RegExp, Objetos, forEach, poner estilos, mostrar los errores
//     en la interfaz de usuario y escribir pruebas).

// TIP: Las edades no pueden tener decimales.
//

function validateAnnualSalary(salary) {

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
  console.log(errors)
  console.log(keys);
  let errorsCounter = 0;

  keys.forEach(function (key) {
    const errorSalary = errors[key];
    console.log(errorSalary)

    if (errorSalary) {
      errorsCounter++;
      $form[key].className = "error";
      console.log($form[key])
    } else {
      console.log($form[key])
      $form[key].className = "";
    }
  });
  return errorsCounter;
}
