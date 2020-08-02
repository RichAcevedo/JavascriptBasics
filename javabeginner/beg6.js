// arrays add, modify, erase elements

var inventory = ["shirt", "axe", "bread"];
// inventory = ["water", "pants"];

let shirt = inventory[0];
inventory[2]= "cheese";
console.log(shirt);
console.log(inventory[2]);

var lenght = inventory.length; // 3
lenght = inventory[0].length; // 5 shirt

inventory.push("cacahuates");
console.log(inventory);
var water = inventory.pop();
console.log(water);