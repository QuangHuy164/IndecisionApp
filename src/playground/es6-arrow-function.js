// const square = function(x) {
//     return x * x;
// };

// console.log(square(5))
// const squareArrow = (x) => {
//     return x * x;
// } 

// console.log(squareArrow(8))  

const getFirstName = (fullName) => {
    return fullName.split(' ')[0]
}

console.log(getFirstName('Mike Smith'))

const add = function(a, b) {
    return a + b;
}

console.log(add(55,1))

const user = {
   name: 'Huy',
   cities:['Hanoi', 'Helsinki', 'Vaasa'],
   printPlacesLived: function () {
    this.cities.forEach((city) => {
        console.log(this.name + ' has lived in ' + city);
    });
   }
}

user.printPlacesLived()

const multiplier = {
    numbers: ['10', '20', '30'],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());