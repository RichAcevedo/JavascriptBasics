// while Loops

/* while (){
    statements  // while syntax
} */

let endPos = 10;
var pos = 0;
var enemyPos = 4;
var isGameOver = false;
var xPos = 0;


/*while (pos < endPos){
    pos++;
    // pos--; // while loop will never ends
    console.log(pos);
} */

while(!isGameOver){
    pos+=3; //modify this number to get different results
    console.log(pos)

    if (pos == enemyPos || pos >= endPos){
        isGameOver = true;
        console.log("game over")
        //return;
    }
}

// break exit loops prematurely
 
while (xPos < endPos ){
    xPos++;
    console.log(xPos);
    if (xPos == enemyPos){
        console.log("game over again")
        break;
    }
}

xPos = 0;
while (xPos < endPos ){
    if (xPos%2==1){
        xPos += 2;
        console.log(xPos);
        continue;
    }
    xPos++;
    console.log(xPos);
    if (xPos == enemyPos){
        console.log("game over again")
        break;
    }
}

/*function movePlayer(){
    while (xPos < endPos ){
        xPos++;
        console.log(xPos);
        if (xPos == enemyPos){
            console.log("game over again")
            return;         //return is used because we're on a function
        }
    }
} */