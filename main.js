var car = (value1, value2) => {
  var a = value1 + " is " + " a " + value2 + " seat " + " car ";
  return a;
}
console.log(car("honda", 4));

var bike = (name1, color) => name1 + "is" + color + "color";
console.log(bike(" pulsur ", " blue "));

var home = homeName => "my " + " home " + " name " + " is " + homeName;
console.log(home("gowri"));

var win = winner => {
  winner + " is " + " excellent!";
  "attitute " + " person " + " is " + winner;
  return winner + " is " + " so cute";
}
console.log(win("gowri"));

export var cal = calculate => {
  var a = calculate + 10;
  var b = a + 20;
  var c = b * 0;
  return c;
}
console.log(cal(10000));

var x = 10;
export default x;

var bike = {
  name: "honda",
  look: "black"
}
bike.look = "blue"
console.log(bike);

class Flowers {
  constructor() {
    this.color = "",
      this.smell = "",
      this.birth = "today"
  }
  born() {
    console.log(this.color + this.quan + "flower is so cute");
  }
}
class Rose extends Flowers {
  constructor() {
    super();
    this.color = "red";
    this.quan = 5;
  }
}
var x = new Rose();
console.log(x.born());

class Fruits {
  constructor() {
    this.fruitName = "",
      this.taste = "imili"
  }
}
class Mango extends Fruits {
  constructor() {
    super();
    this.look1 = "yellow",
      this.taste = "sweet",
      this.size = "circle"
  }
}
class Banana extends Mango {
  constructor() {
    super();
    this.size = "oval",
      this.fruitName = "Mango"
  }
}
console.log(new Banana().size);
console.log(new Banana().fruitName + " is so " + new Banana().taste)

// spread operator //
function sum(a, b) {
  return a + b;
}
console.log(sum(...[1, 2]));

function add(c, d, e) {
  return (c + d) * e;
}
const addition = [3, 4, 5];
console.log(add(...addition));

const arr = [1, 2, 4];
const arr1 = [5, 3, 6];
console.log([...arr, ...arr1]);
console.log([9,0,...arr,...arr1]);

var name3 = {name :"cutiee"};
var age = {age : 15};
console.log({...name3,...age});

// function div (value3) {
//   if(value3 % 5 == 0){
//     return true;
//   }else{
//     return false;
//   }
// }
// var x = div (7)