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
