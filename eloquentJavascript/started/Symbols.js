let symbol = Symbol('toString');

Array.prototype[symbol] = function(){
  return this.length+' <- length, content ->' +this ;
};

let interesting = [1,2,3,4,5,6,67,7,8]
console.log(interesting[symbol]());
