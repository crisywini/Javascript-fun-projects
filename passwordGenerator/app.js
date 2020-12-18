const PASSWORD = document.querySelector("#password");
const BTN = document.querySelector("#generate");
const ARRAY = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9','?','%','#'];
function getPassword(){
  let pass = '';
  for(let i = 0;i<10; i++){
    pass +=ARRAY[getRandomNumber(0,ARRAY.length)];
  }
  return pass;
};
function getRandomNumber(min, max){
  return Math.floor(Math.random()*(min-max+1)+max);
}
BTN.addEventListener('click', (e)=>{
  e.preventDefault();
  PASSWORD.innerText = getPassword();
});
