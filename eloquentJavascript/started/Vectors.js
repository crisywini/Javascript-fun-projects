class Vec {

  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  get length(){
    return Math.pow((this.x*this.x)+(this.y*this.y),1/2);
  }

  plus(vector){
      return new Vec(this.x+vector.x, this.y+vector.y);
  }
  minus(vector){
    return new Vec(this.x-vector.x, this.y-vector.y);
  }

}
class Group{

  constructor(){
    this.elements = [];
  }
  add(element){
    let index = this.search(element);
    if(index==-1){
      this.elements.push(element);
    }
  }
  search(element){
    this.elements.sort((a, b) => {
      if(a>b){
        return 1;
      }else if(a<b){
        return -1;
      }
      return 0;
    });
    let binarySearch = function(arr, x, min, max){
      if(min>max){
        return -1;
      }
      let half = Math.floor((max+min)/2);
      if(arr[half] === x){
        return half;
      }
      if(arr[half]>x){
        return binarySearch(arr, x, min, half-1);
      }
      return binarySearch(arr, x, half+1, max);

    };
    let length = this.elements.length;
    return binarySearch(this.elements, element, 0, length);
  }

  has(element){
    return this.search(element)!=-1;
  }

  remove(element){
    if(this.has(element)){
      this.elements.pop(element);
    }
  }

  toString(){
    return this.elements.toString;
  }
}
