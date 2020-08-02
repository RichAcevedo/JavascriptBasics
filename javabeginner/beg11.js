// For loops
var items = ["axe", "shirt", "knife"];
var finalString = "In my iventory, I have ";

for (var i=0; i < items.length; i++){
    var itemName = items[i];
    finalString += itemName+", ";
}

console.log(finalString)

finalString = "In my iventory, I have ";

items.forEach(function(element){
    finalString += element + ", ";
}
);

console.log(finalString);

//printing my name 5 times with a loop
for(var n=0; n<5; n++){
    console.log("Humanito Rich")
}
// iterate trough an array for a set of times
var numbers = [1,2,3,4,5]


for(var m=0; m<5;m++){
    numbers.forEach(function(){
        numbers[m]++
        console.log(numbers)
    }
);    
}
