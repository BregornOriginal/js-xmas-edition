function testValidateAnnualSalaryOfMembers(){

    console.assert(
        validateAnnualSalary("") === "Please enter a value on this field",
        "Validate Annual Salary didn't validate that salary have a input value"
    );
    console.assert(
        validateAnnualSalary(-2) === "Please enter a value greater than 0",
    	"Validate Annual Salary didn't validate that salary is greater than 0"
    );
    console.assert(
        validateAnnualSalary("letters") === "This field only accept numbers",
        "Validate Annual Salary didn't validate that salary must have only numbers"
    );
};

testValidateAnnualSalaryOfMembers();
