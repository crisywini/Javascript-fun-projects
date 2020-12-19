//Find the minimum of two elements

let findMinimun = (a, b) =>{
  return a<=b ? a : b;
};

//Is EVEN or ODD
//2 - is even but 2-2 is EVEN -> 3, 3-2 = 1 that is odd
let isEven = (a) =>{
  if(a<0){
    a = a * -1;
  }
  if(a===0){
    return true;
  }
  if(a === 1){
    return false;
  }
  return isEven(a-2);
};

let countsBs = (str, char) => {
  if(str.length == 0){
    return 0;
  }
  if(str[str.length-1] === char){
    return 1 +countsBs(str.substring(0, str.length-1));
  }
  return countsBs(str.substring(0, str.length-1));//hola ==
};

let sumOfRange = (min, max) =>{
  if(min === max){
    return min;
  }
  return min + sumOfRange(min+1, max);
};

let revereArray = (array) =>{
  let newArray = [];
  for(let i=array.length-1; i>=0; i--){
    newArray.push(array[i]);
  }
  return newArray;
};

let reverseArrayInPlace = (array) =>{
  let reversed = revereArray(array);
  for(let i = 0; i<array.length; i++){
    array[i] = reversed[i];
  }
};


function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i)
  }
};

let numbers = [];

console.log(numbers);
repeat(10, i =>{
    numbers.push(i);
});
console.log(numbers);
