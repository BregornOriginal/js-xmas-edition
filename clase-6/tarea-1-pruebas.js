function testValidateAmountOfMembers() {
  console.assert(
    validateAmountOfMembers("") === "This field must have one number at least",
    "Validate members did not validate that members are not empty"
  );
  console.assert(
    validateAmountOfMembers(-2) ===
      "This field must be greater than the number 0",
    "Validate members did not validate that members is a number greater than 0"
  );
  
  console.assert(
    validateAmountOfMembers("fda") === "This field only accept numbers",
    "Validate members did not validate that members contain numbers"
  );
  console.assert(
    validateAmountOfMembers(3) === "",
    "validateAmountOfMembers fail whit a amount valid"
  );
}

testValidateAmountOfMembers();
