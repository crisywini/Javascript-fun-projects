


/**
The high order functions allows to create new functions inside the functions
basically the high order functions is a functions that by parameter can use a function
and can return a function
*/


function greaterThan(m){
  return n => n>m;
}

let greaterThan2 = greaterThan(2);

//console.log(greaterThan2(4));

function noisy(f){
  return (...args)=>{
    console.log("Argumentos: ", args);
    let result = f(...args);
    console.log("Argumentos: ", args, " Resultado: ", result);
    return result
  };
}
//noisy(Math.min)(2,3,4,5,6,7,8,9,1,-1);

function repeat(n, action){
  for(let i=0; i<=n; i++){
    action(i);
  }
}

function unless(condition, then){
  if (!condition) then();
}
/*
repeat(10, n =>{
  unless(n%2===1, ()=>{
    console.log(n, " is even");
  });
});*/
const SCRIPTS = require('./dataset');

function filter(array, test){
  let passed = [];
  for(let element of array){
    console.log(test(element));
    if(test(element)){
      passed.push(element);
    }
  }
  return passed;
}


//console.log(SCRIPTS.filter(script => script.living)); // Diferente poner () => a poner n => n porque n sería el parámetro

console.log(SCRIPTS.filter(data => data.direction=='ttb' && data.living));
