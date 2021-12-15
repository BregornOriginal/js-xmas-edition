function probarValidarNombre() {
  console.assert(
    validarNombre("") === "Este campo debe tener al menos 1 caracter",
    "Validar nombre no validó que el nombre no sea vacío"
  );

  console.assert(
    validarNombre(
      "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    ) === "Este campo debe tener menos de 50 caracteres",
    "Validar nombre no validó que el nombre sea menor a 50 caracteres"
  );

  console.assert(
    validarNombre("Julio") === "",
    "validarNombre falló con un nombre válido"
  );

  console.assert(
    validarNombre("123123") === "El campo nombre solo acepta letras",
    "Validar nombre no validó que el nombre solo tenga letras"
  );
};

probarValidarNombre();

function probarValidarCiudad() {
  console.assert(
    validarCiudad("") === "Seleccione la ciudad donde vive",
    "Validar ciudad no validó que una ciudad este seleccionada"
  );
};

console.assert(
  validarCiudad("Buenos Aires") === "",
  "Validar ciudad no funcionó con un nombre de ciudad válido"
);

probarValidarCiudad();

function probarValidarDescripcionRegalo() {

  console.assert(
    validarDescripcionRegalo("") === "Escriba que regalo le gustaría recibir",
    "Validar descripción regalo no valido que se haya completado el campo de texto"
  );

  console.assert(
    validarDescripcionRegalo(
      "11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    ) === "Este campo debe tener menos de 100 caracteres",
    "Validar descripción regalo debe tener menos de 100 caracteres"
  );

  console.assert(
    validarDescripcionRegalo("Regalo") === "",
    "La función validar descripción regalo no funcionó con una descripción correcta"
  );

  console.assert(
    validarDescripcionRegalo('.,.,.,.,.') === 'El campo descripción solo puede tener números y letras',
    'La función validar descripción regalo no validó que fuera solo números y letras'
  )
};

probarValidarDescripcionRegalo();

