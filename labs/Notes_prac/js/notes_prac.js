let Bike = {
    age: 0,
    wear: 0,
    color: "red",
    type: "huffy",
    destroyed: false
}

function use(bike){
    bike.age ++;
    if(bike.age >= 5){
        bike.wear = 100;
        bike.destroyed = true;
    }


}


console.log(Bike.age);


use(Bike);
use(Bike);
use(Bike);
use(Bike);
use(Bike);

console.log(Bike);