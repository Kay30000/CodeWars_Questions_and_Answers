function squareDigits(num){
  let concat = 0;
  let squared = 0;
  const digits = num.toString().split('').map(Number);

  for(let i = 0; i < digits.length; i++) {
    squared = digits[i] ** 2;
    concat = Number(squared.join(""));
  }
  return concat;
}

console.log(squareDigits(9119))