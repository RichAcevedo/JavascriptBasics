// > >= < <= != == ===

var number1 = 5;
var number2 = 10;

var string1 = "hello"
var string2 = "world"
var result = number1 > number2; //false
console.log(result);
result = number1 != number2; // true
console.log(result);

// ||, &&, !

result = !result; //change valor of boolean
console.log(result);

result = number1 < number2 && string1 != string2;
console.log(result); 

// ? :

result = number1 > number2 ? number1 : number2

// is game over?
var numLives = 5
var isGameOver = false
while(numLives >= 0){
    isGameOver = numLives >= 1 ? false : true;
    console.log("you dead son? "+ isGameOver);
    numLives--;
}
