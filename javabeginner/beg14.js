// constructor of objects
function gameChar(name, xPos, health){
    this.name = name;
    this.xPos = xPos;
    this.health = health;
    this.class = "Priest";
    
    this.move = function(x){
        this.xPos += x;
    }
}

var gc1 = new gameChar("Rich", 0, 100);
var name = gc1.name;
gc1.health = 150;
gc1.move(10);

console.log(gc1);

var gc2 = new gameChar("Pepe", 5, 50);
gc2.class = "warrior";
console.log(gc2);

//prototype
gameChar.prototype.pasive = "God's Blessing";
gc2.pasive = "brief inmortality";
console.log(gc1.pasive," , ",gc2.pasive);

var heal = function(amount){ //creating a heal function outside constructor
    this.health += amount;
}
gameChar.prototype.heal = heal; //adding the function to the constructor
gc1.heal(200);
console.log(gc1.health);