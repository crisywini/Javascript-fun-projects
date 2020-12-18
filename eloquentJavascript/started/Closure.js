let multiply = function(factor){
  return number => number - factor; // The number is the one that is defioned in the second instance
}


let two = multiply(2);

console.log(two(3));
