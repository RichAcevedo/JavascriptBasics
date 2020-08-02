//multidimentional arrays

var levels = [
    [1.1, 1.2, 1.3],
    [2.1, 2.2, 2.3, 2.4],
    [3.1, 3.2],
    [4.1]
];

var firstWorld = levels[0];     // 1.1 1.2 1.3
console.log(firstWorld); 
var firstLevel = levels[0][1]; //1.2
console.log(firstLevel);
// firstLevel[0][1]= 1.4

// remove and add levels

levels[1].pop();
levels[2].push(3.3);
levels[3].push(4.2,4.3);
console.log(levels);