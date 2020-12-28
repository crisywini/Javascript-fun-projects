let map  = new Map();

map.set('A', 1);
for(let i=0; i<10; i++){
  if(i===1){
    continue;
  }
  map.set('A'+i, i);
}
console.log(map);

console.log(map.get('A0'));
console.log(map.has('A'))
