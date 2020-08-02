// const, let, var
var currentHealth = 50; //can change
const maxHealth = 100; //can't change

if (true) {
    var isGameOver = false;
    let isNotGameOver = true; //can only accessed in the codeblock
    console.log(isNotGameOver)
}
console.log(isGameOver) // undefined but can run
//console.log(isNotGameOver) //error

var actualDMG = 5;
var powerUP = false;

console.log(actualDMG);
console.log(powerUP);