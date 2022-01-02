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
  