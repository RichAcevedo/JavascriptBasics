// Operators
var health = 50;
health

//arithmetic + - / * % **

health = health + 10; //60 health
health = health % 50; //10 health
if (health%2==0){
    console.log("health is even");
}
health = health **2; // 100 health

// += -= *= /=
health -= 20; // health = health-20 ; 80 health
console.log(health);

// ++ -- increases and decreases by one
health++; //81 health   
health--; //80 health

health/= 4; // 80/4= 20 health
console.log(health);

//increase health by one
health++;
health +=1;
health = health +1;
console.log(health); // 23