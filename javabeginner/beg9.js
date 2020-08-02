// conditional statements

var keypresed = "a";
var xPos = 0;
let endPos = 5;
var rip = 2;

if (keypresed == "a"){
    xPos -= 1; // xPos = -1
    console.log(xPos);
} else if (keypresed == "d"){
    xPos += 1;  // xPos = 1
    console.log(xPos);
} else {
    xPos = 0;   // xPos = 0
    console.log(xPos);
}

var someNum = 5;

// will do the check twice
/*
if (someNum>4){
    rip -= 2; 
}
if (someNum>1){
    rip += 2;
}
*/

if(keypresed == "a" && xPos < endPos){
    xPos -= 1; // only happen if the two conditions happen
}

if (keypresed == "a"){
    //can still write code here
    if (xPos <= endPos){
        xPos -= 1; // xPos = -1
    }
    console.log(xPos);
} else if (keypresed == "d"){
    xPos += 1;  // xPos = 1
    console.log(xPos);
} else {
    xPos = 0;   // xPos = 0
    console.log(xPos);
}