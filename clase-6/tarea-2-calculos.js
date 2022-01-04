function calculateMaxSalary(salaries) {
    let maxSalary = salaries[0];
    for (i = 0; i < salaries.length; i++) {
      if (salaries[i] > maxSalary) {
        maxSalary = salaries[i];
      }
    }
    return maxSalary;
  };
  
  function calculateMinSalary(salaries) {
    let minSalary = salaries[0];
    for (i = 0; i < salaries.length; i++) {
      if (salaries[i] < minSalary) {
        minSalary = salaries[i];
      }
    }
    return minSalary;
  };
  
  function calculateAverageAnnualSalary(salaries) {
    let validSalaries = [];
    let averageAnnualSalary = 0;
    let result = 0;
    for (i = 0; i < salaries.length; i++) {
      if (salaries[i] > 0) {
        validSalaries.push(salaries[i]);
      }
    }
    for (let i = 0; i < validSalaries.length; i++) {
      result = validSalaries[i] + result;
    }
    if (result > 0) {
      averageAnnualSalary = result / validSalaries.length;
    }
    return averageAnnualSalary;
  };
  
  function calculateAverageMonthlySalary(averageAnnualSalary) {
    const monthsInAYear = 12;
    averageMensualSalary = averageAnnualSalary / monthsInAYear;
    return averageMensualSalary;
  };
  