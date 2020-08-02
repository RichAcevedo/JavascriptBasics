var pos = 5;

/*function move(){
    pos +=1;
}

move();
*/
/*function move(byAmount){
    pos += byAmount;
}

move(5)
*/

function move(pos, byAmount){
    const newPos = pos + byAmount;
    return newPos;
}
var finalPos = move(pos,2);
console.log(finalPos);