class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class List {
  constructor(){
    this.head = new Node();
    this.size = 0;
  }
}
List.prototype.addNodeToBegining = function (value){
  let newNode = new Node(value);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};
List.prototype.toString = function(){
  let node = this.head;
  let info = '[';
  while(node !== null){
    if(node.value != undefined){
      info += node.value +", ";
    }
    node = node.next;
  }
  info = info.substring(0, info.length-2) + "]";
  return info;
};
List.prototype.addNodeToEnd = function(value){
  let node = new Node(value);
  if(this.head.value === undefined){
      this.head = node;
  }else{
      let current = this.head;
      while(current !== null){
        if(current.next == null){
          break;
        }
        current = current.next;
      }
      current.next = node;
  }
  this.size++;
};

List.prototype.get = function(index){
  let current = this.head;
  let counter = 0;
  while(current != null ){
    if(counter === index){
      return current;
    }
    counter++;
    current = current.next;
  }
}
List.prototype.set = function(index, value){
  let counter = 0;
  let current = this.head;
  let stopper = false;
  if(index === 0){
    let newNode = new Node(value);
    let currentNext = current.next;
    newNode.next = currentNext;
    this.head = newNode;
    return;
  }


  while(current != null && !stopper ){

    if(counter === index-1  && current.next != null){

      let currentCopy = current.next;//
      let newNode = new Node(value);
      if(currentCopy.next != null){
        newNode.next = currentCopy.next;
      }


      current.next = newNode;

      stopper = true;
    }
    current = current.next;
    counter++;
  }
}

let arrayToList = function(array){
  let list = new List();
  for(let i = 0; i<array.length; i++){
    list.addNodeToEnd(array[i]);
  }
  return list;
};
let listToArray = function(list){
  let array = [];
  for(let i = 0; i<list.size; i++){
    array.push(list.get(i));
  }
  return array;
}

function sortDesc(... numbers){
  let list = arrayToList(numbers);
  for(let i = 0; i<list.size; i++){
    for(let j = 0; j<list.size-1; j++){
      if(list.get(j).value<list.get(j+1).value){
        let copy = list.get(j).value;
        list.set(j, list.get(j+1).value);
        list.set(j+1, copy);
      }
    }
  }
  return list;
}
