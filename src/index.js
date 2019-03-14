module.exports = function getZerosCount(number, base) {
  let multipliers = calculateMultipliers();
  let j = 0;
  let k = 0;
  let newArr = [];
  newArr[j] = [];
  newArr[j][k] = multipliers[0];
  for (let i = 1; i < multipliers.length; i++) {
    if (multipliers[i] > newArr[j][k]) {
      j++;
      newArr[j] = [];
      k = 0;
    } else {
      k++;
    }
    newArr[j][k] = multipliers[i];
  }

  let division = 0;
  let exponent = 1;
  let summ = 0;
  let arrSumm = [];
  for (let i = 0; i < newArr.length; i++) {
    do {
      division = Math.floor(number / Math.pow(newArr[i][0], exponent));
      exponent++;
      summ += division;
    } while (division >= 1);
    arrSumm.push(Math.floor(summ / newArr[i].length));
    summ = 0;
    division = 0;
    exponent = 1;
  }

  function calculateMultipliers() {
    let numbers = [];
    for (let i = 2; i <= base;) {
      if (base % i === 0) {
        numbers.push(i);
        base = base / i;
        i = 2;
      } else {
        i++;
      }
    }
    return numbers;
  }
  
  function min(arr) {
    let min = arr[0];
    for (i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  return min(arrSumm);
}
