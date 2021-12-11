function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío'
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
}

probarValidarNombre();

function probarValidarCiudad() {
  console.assert(
    validarCiudad('') === 'Seleccione la ciudad donde vive',
    'Validar ciudad no validó que una ciudad este seleccionada'
  );
}

probarValidarCiudad();

function probarValidarDescripcionRegalo(){
  console.assert(
    validarDescripcionRegalo('') === 'Escriba que regalo le gustaría recibir',
  'Validar descripción regalo no valido que se haya completado el campo de texto'
  );

  console.assert(
    validarDescripcionRegalo('11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111')
    === 'Este campo debe tener menos de 100 caracteres',
    'Validar descripción regalo debe tener menos de 100 caracteres'
  );
 }

 probarValidarDescripcionRegalo();

