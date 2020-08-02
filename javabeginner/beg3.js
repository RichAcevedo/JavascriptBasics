//strings, anything between "" '' 
var charName = "Humanito Rich";
charName = "Monster Rich";
var age = 27;
let wMessage = `Hello there ${charName} your age is ${age}`; 
//backticks are Altgr+} x2  on latinamerican keyboard
console.log(wMessage);
var newmessage = "my name is " +charName+ "and I am " + age + " years old";
console.log(newmessage);

let lenght = charName.length;
console.log(lenght)

let upperName = charName.toUpperCase();
let lowerName = charName.toLowerCase();
console.log(upperName);
console.log(lowerName);

let zen = charName.slice(0,7);
console.log(zen);