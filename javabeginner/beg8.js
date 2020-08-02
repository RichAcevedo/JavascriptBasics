//functions
var maxHealth = 200
var currentHealth = 50
var healAmount = 10

function heal() {
    currentHealth += healAmount;
}

heal();
console.log(currentHealth); //health = 60

// var func = heal(); creating a reference?

// functions with default parameters,
function healing(healNum = 10){
    currentHealth += healNum;
    // return; //breaks block code and exits function
}


healing(15);
console.log(currentHealth); // 75 health

healing();
console.log(currentHealth); //heals 10 by default, 85 health

function hyperHeal(healunit = 10){
    var newHealth = currentHealth + healunit;
    currentHealth = newHealth > maxHealth ? maxHealth : newHealth; //capping health

    var retorno = percentCalc(currentHealth,maxHealth);
    
        function percentCalc(ch,mh){ //nested function to calculate percent
            var pc = (ch/mh)*100;
            return pc;
        }
    return retorno;
}

var percent = hyperHeal(); // adding 10 hp ~ 95 health
console.log("hp percent:",percent);
console.log("hp:",currentHealth)
percent = hyperHeal(40); //adding 40 hp 130 ~ health
console.log("hp percent:",percent)
console.log("hp:",currentHealth)
percent = hyperHeal(4000);  // passing the 200 hp cap
console.log("hp percent:", percent)
console.log("hp:",currentHealth)