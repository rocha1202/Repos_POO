const checkLeapYear = function (year) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
  };
  
  const num = +prompt('Enter the year to check if it is a leap');
  
  if (checkLeapYear(num)) {
    alert(`${num} é um ano bissexto`);
  } else {
    alert(`${num} não é um ano bissexto`);
  }