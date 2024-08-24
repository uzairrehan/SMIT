// const arr = ['first', 'second', 'third'];

// console.log(Object.keys(arr));















// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
//   };
  
// console.log(Object.keys(obj));
// console.log(Object.values(obj));


















// let human =  {
//     userName : "Uzair",
//     Uzair : "uzair is a web developer"
// }


// let userName = "Uzair"


// console.log(human.userName);
// console.log(human["Uzair"]);
// console.log(human[userName]);
// console.log(human["userName"]);

















// let human =  {
//     userName : "Uzair",
//     Uzair : "uzair is a web developer"
// }

// let array = [];

// for(let property in human){
//     let Object = {[property]: human[property]}
//     array.push(Object)
// }


// console.log(array);












// let keyName = prompt("key name")
// let keyValue = prompt("key value")


// let object = {
//     [keyName]: keyValue
// }


// console.log(object);




































// constructor function



function Making (carName, variant , modelNumber) {
    this.carName = carName;
    this.variant = variant;
    this.modelNumber = modelNumber;
}


let carOne = new Making("mehran", "ex", 2012)
let carTwo = new Making("civic", "ev", 2024)
let carThree = new Making("porsche", "uv", 2010)

console.log(carOne);
console.log(carTwo);
console.log(carThree);