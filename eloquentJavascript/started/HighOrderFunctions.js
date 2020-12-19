


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
    if(test(element)){
      passed.push(element);
    }
  }
  return passed;
}


//console.log(SCRIPTS.filter(script => script.living)); // Diferente poner () => a poner n => n porque n sería el parámetro

//console.log(SCRIPTS.filter(data => data.direction=='ttb' && data.living));

function map(array, action){
  let mapped = [];
  for(let element of array){
    mapped.push(action(element));
  }
  return mapped;
}
function reduce(array, actionCombine, start){
  let current = start;
  for(let element of array){
    //console.log(current, " <- current, actionCombine result -> ",  actionCombine(current, element));
    current = actionCombine(current, element);
  }
  return current;
}
//Finding the script with the most characters
function countCharacters(script){
  return reduce(script.ranges, (count, [from, to])=>{
    return count + (to-from);
  }, 0);
}
/*
console.log(SCRIPTS.reduce( (a, b) => {
  return countCharacters(a) < countCharacters(b) ? b : a;
}));// → {name: "Han"
*/

function getAverage(array){
  return reduce(array, (a,b) => a+b, 0) / array.length;
}
/*
console.log(Math.round(getAverage(SCRIPTS.filter(ef => ef.living).map(e => e.year)))); //First we're having all of the living scripts and then we're getting the years to get the aberage of it
console.log(Math.round(getAverage(SCRIPTS.filter(ef => !ef.living).map(e => e.year))));
*/
function getCharacterScript(code){
  for(let script of SCRIPTS){
    if(script.ranges.some(([from, to ]) => {
      return code>=from && code< to;
    })){
      return script;
    }
  }
  return null;
}

function flattenArray(array){
  return array.reduce((a, b) => a.concat(b));
}
function every(array, fnCondition){

  for(let element of array){
    if(!fnCondition(element)){
      return false;
    }
  }
  return true;
}

let array = [2,4,6,8,112];
console.log(every(array, e => e%2===1));
