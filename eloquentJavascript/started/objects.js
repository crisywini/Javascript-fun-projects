class Person {
  constructor(name, opera = () => undefined){
    this.name = opera(this.name);
  }

  get nickName(){
    return this.name;
  }

}

let alejandra = new Person('alejandra', (name) => 'hola' );

console.log(alejandra.nickName);
