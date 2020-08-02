var GameChar ={
    name: "Rich",
    pos: 2,
    health: 100,
    move: function(byAmount){
        this.pos += byAmount;
    },

    damage: function(minusHP){
        this.health = this.health - minusHP
    }
    
};

var name = GameChar.name;
GameChar.health = 50;
console.log(GameChar.health);

GameChar.move(10);
GameChar.damage(20);
console.log(GameChar.pos);
console.log(GameChar.health);