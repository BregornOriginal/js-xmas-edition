function calculateOlderAge(arrayAge) {
    let maximumValue = arrayAge[0];
    for (i = 0; i < arrayAge.length; i++) {
      if (arrayAge[i] > maximumValue) {
        maximumValue = arrayAge[i];
      }
    }
    return maximumValue;
  }
  
  function calculateYoungerAge(arrayAge) {
    let minimunValue = arrayAge[0];
    for (i = 0; i < arrayAge.length; i++) {
      if (arrayAge[i] < minimunValue) {
        minimunValue = arrayAge[i];
      }
    }
    return minimunValue;
  }
  
  function calculateAverageAge(arrayAge) {
    let averageAge = 0;
    let result = 0;
    for (i = 0; i < arrayAge.length; i++) {
      result += +arrayAge[i];
      averageAge = result / arrayAge.length;
    }
    return averageAge;
  }

  function anular(e) {
    tecla = (document) ? e.keyCode : e.which;
    return (tecla != 13);
  }
  