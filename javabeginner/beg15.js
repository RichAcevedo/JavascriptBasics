// Classes
class gameCharacter{
    constructor (name, xPos, health){
        this.name = name;
        this.xPos = xPos;
        this.health = health;
    }

    move(x){
        this.xPos += x;
    }

}


class humanCharacter extends gameCharacter{
    constructor(name, xPos, health){
        super(name, xPos, health);
        this.classification = "Human";
    }
}


var gc1 = new gameCharacter ("rich", 0 ,100);
gc1.move(5);
gc1.name = "Rich";
console.log(gc1);

var hc1 = new humanCharacter ("pepe",3, 200);
console.log(hc1);

// Another class and extended class
class enemyNPC{
    constructor (name, xPos, health, damage){
        this.name = name;
        this.xPos = xPos;
        this.health = health;
        this.damage = damage;
    }

    move(x){
        this.xPos += x;
    }
    punch(f){
        this.damage = f;
    }

}
class goblinNPC extends enemyNPC{
    constructor (name, xPos, health, damage){
        super (name, xPos, health, damage)
        this.classification = "Goblin";
    }
}

var gNPC1 = new goblinNPC ("picapapas", 6, 300, 25);
console.log(gNPC1);