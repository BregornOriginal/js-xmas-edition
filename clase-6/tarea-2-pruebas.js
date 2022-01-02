function testValidateAnnualSalaryOfMembers(){
    console.assert(
        validateAnnualSalary(-2) === "Please enter a value greater than 0",
    	"Validate Annual Salary didn't validate that salary is greater than 0"
    );
    console.assert(
        validateAnnualSalary("letras") === "This field only accept numbers",
        "Validate Annual Salary didn't validate that salary must have only numbers"
    );
};

testValidateAnnualSalaryOfMembers();