//Objects
var gameCharacter ={
    name: "Rich",
    xPos: 0,
    items: ["knife","Food"],
    health: 200,

    move: function(x){
        this.xPos +=x;
    },
};

var name = gameCharacter.name; //get the name
console.log(name)
gameCharacter.items = ["Chelas","Paketaxos"] // changed the inventory
console.log(gameCharacter.items);

gameCharacter.move(5);       // character moves 5 units
console.log(gameCharacter.xPos);

gameCharacter.yPos = 0; //now assign yPos to gamechar

gameCharacter.move = function(x,y){     //modified a function, move function
    this.xPos += x;
    this.yPos += y;
}

gameCharacter.move(2,2);
console.log(gameCharacter.xPos,gameCharacter.yPos);

var map = {
    generalMap: "this is a general map",
    area1Map:   "this is area2 map",
    area2Map:   "this is area3 map",

    coordinates: function(x,y){
        console.log("you are here: ", x,",",y)
    },

};

console.log(map.generalMap);

map.coordinates(gameCharacter.xPos,gameCharacter.yPos);
