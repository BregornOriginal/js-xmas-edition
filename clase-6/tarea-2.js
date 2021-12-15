/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar)
inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.

Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual,
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $bodyHtml = document.querySelector("body");
const $form = document.querySelector("form");

const $buttonCalculate = document.createElement("button");
$buttonCalculate.innerText = "Calculate";
$buttonCalculate.setAttribute("id", "button-calculate");
$buttonCalculate.className = "hidden";
const $labelButtonCalculate = document.createElement("label");

const $newDiv = document.createElement("div");
$newDiv.setAttribute("id", "container-annual-salary");
$form.appendChild($newDiv);
$form.appendChild($buttonCalculate);

document.querySelector("#add-member").onclick = function (event) {
  $buttonCalculate.className = "view";
  const $newInput = document.createElement("input");
  const $newLabel = document.createElement("label");

  $newLabel.setAttribute("id", "label-members-annual-salary");
  $newLabel.innerText = "Member annual salary";
  $newLabel.appendChild($newInput);
  $newDiv.appendChild($newLabel);
  $newInput.setAttribute("type", "number");
  $newInput.setAttribute("id", "members-annual-salary");
  $newInput.setAttribute("placeholder", "Annual salary");
  $newInput.value = 0;

  event.preventDefault();
  return false;
};

const $buttonRemoveMember = document.getElementById("remove-member");

$buttonRemoveMember.onclick = function (event) {
  let $dad = document.getElementById("container-annual-salary");
  let $children = document.getElementById("label-members-annual-salary");
  $dad.removeChild($children);
  event.preventDefault();
};

function calculateMaxSalary(arraySalary) {
  let maxSalary = arraySalary[0];
  for (i = 0; i < arraySalary.length; i++) {
    if (arraySalary[i] > maxSalary) {
      maxSalary = arraySalary[i];
    }
  }
  return maxSalary;
};

function calculateMinSalary(arraySalary) {
  let minSalary = arraySalary[0];
  for (i = 0; i < arraySalary.length; i++) {
    if (arraySalary[i] < minSalary) {
      minSalary = arraySalary[i];
    }
  }
  return minSalary;
};

function calculateAverageAnnualSalary(arraySalary) {
  let arraySalaryNoZero = [];
  let averageAnnualSalary = 0;
  let result = 0;
  for (i = 0; i < arraySalary.length; i++) {
    if (arraySalary[i] > 0) {
      arraySalaryNoZero.push(arraySalary[i]);
    }
  }
  for (let i = 0; i < arraySalaryNoZero.length; i++) {
    result = arraySalaryNoZero[i] + result;
  }
  if (result > 0) {
    averageAnnualSalary = result / arraySalaryNoZero.length;
  }
  return averageAnnualSalary;
};

function calculateAverageMensualSalary(averageAnnualSalary) {
  const monthsInAYear = 12;
  averageMensualSalary = averageAnnualSalary / monthsInAYear;
  return averageMensualSalary;
};

document.querySelector("#button-calculate").onclick = function (event) {
  let arraySalary = [];
  let inputAnnualSalary = document.querySelectorAll("#members-annual-salary");

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

  for (let i = 0; i < inputAnnualSalary.length; i++) {
    if (inputAnnualSalary[i].value != "") {
      arraySalary.push(Number(inputAnnualSalary[i].value));
    }
  }

  let maxSalary = calculateMaxSalary(arraySalary);
  let minSalary = calculateMinSalary(arraySalary);
  let averageAnnualSalary = calculateAverageAnnualSalary(arraySalary);
  let averageMensualSalary = calculateAverageMensualSalary(averageAnnualSalary);

  $resultStrong.innerText = `
  The maximum salary is ${maxSalary} dollars. 
  The minimum salary is ${minSalary} dollars. 
  The average annual salary is ${averageAnnualSalary} dollars. 
  The average mensual salary is ${averageMensualSalary} dollars.`;

  event.preventDefault();
  return false;
};
