// get and set in objects
var gameCharacter ={
    name: "Rich",
    class: "Priest",
    health: 100,
    get title(){
        return this.name + " the " + this.class;
        
    },
    set maxHealth(h){
        this.health = (h);
    },
    xPos: 0,
    items: ["knife","Food"],

    move: function(x){
        this.xPos += x;
    },
};
var gc = gameCharacter      //creating a reference
gc.name = "Humanito Rich"   // changed the name value of the object
console.log(gameCharacter.name) 

console.log(gameCharacter.title)

gameCharacter.maxHealth = 150; // health = 150
console.log(gameCharacter.health);
