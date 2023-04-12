function checkNumber(randomNumber, attemptNumber) {
    if (randomNumber === attemptNumber) {
      return 0;
    } else if (randomNumber > attemptNumber) {
      return -1;
    } else {
      return 1;
    }
  }
  
  let attempts = 0;
  let result;
  const limitAttempts = 5;
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  
  do {
    attempts += 1;
    const attemptNumber = +prompt('Numero');
    result = checkNumber(randomNumber, attemptNumber);
    if (result === 0) {
      break;
    } else if (result > 0) {
      alert('O número é INFERIOR!');
    } else {
      alert('O número é MAIOR');
    }
  } while (attempts < limitAttempts);
  
  if (result === 0) {
    alert(`PARABÉNS, VOCÊ ACHOU! (Número${randomNumber})`);
  } else {
    alert(`PACIÊNCIA, POR FAVOR, JOGUE DE NOVO! (o número era ${randomNumber})`);
  }