function probarValidarIntegrantes() {
  console.assert(
    validarIntegrantes("") === "Este campo debe contener al menos un número",
    "Validar integrantes no validó que integrantes no sea vacío"
  );
  console.assert(
    validarIntegrantes(-2) === "Este campo debe ser mayor al número 0",
    "Validar integrantes no validó que integrantes sea un número mayor a 0"
  );
  console.assert(
      validarIntegrantes("fda") === "Este campo solo acepta números",
      "Validar integrantes no validó que integrantes contenga números"
  );
}

probarValidarIntegrantes();
