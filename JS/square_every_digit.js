function squareDigits(num){
  let concat = "";
  let squared = 0;
  const digits = num.toString().split('').map(Number);

  for(let i = 0; i < digits.length; i++) {
    squared = digits[i] ** 2;
    concat += squared;
  }
  return Number(concat);
}

console.log(squareDigits(9119))