function testValidateIntegrantes() {
  console.assert(
    validateMembers("") === "This field must be greater than the number 0",
    "Validate members did not validate that members are not empty"
  );
  console.assert(
    validateMembers(-2) === "This field must have one number at least",
    "Validate members did not validate that members is a number greater than 0"
  );
  console.assert(
      validateMembers("fda") === "This field only accept numbers",
      "Validate members did not validate that members contain numbers"
  );
}

testValidateIntegrantes();
