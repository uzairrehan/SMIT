// function in object is called method
// let obj = {
//     num:10,
//     calSqr: function() {
//         console.log(this.num * this.num);
//     }
// }
// obj.calSqr()





// arrow function dont have "this" keyword
// let obj = {
//     num:10,
//     method: ()=>{
//         console.log(this);
//     }
// }

// obj.method()






// const hello = {
//     userName: "uzair"
// }
// hello.userName = "rehan" 
// console.log(hello.userName);







// for each loop
// let fruits = ["Apple", "Banana", "Cherry", "Grape", "Orange"]
// fruits.forEach((fruit, i)=>{
//     if(i % 2 !== 0) return;
//     console.log(fruit,i);
// })


// let veg = ["bengan", "bhindi", "kaddu", "khera"];

// veg.forEach((vegatable, ind) =>{
//     if(ind % 2 === 0) return;
//     console.log(vegatable, ind);
// })   









// map is just like foreach but it always retuns a value and makes new array from existing array .
// let num = [1,2,3,4,5,6,7,8,9,10]
// let sqrNum = num.map(num => num * num)









// on string
// let fruits = ["apple", "banana", "cherry", "grape", "orange"]

// fruits = fruits.map(fruits => fruits.toUpperCase())


// fruits.forEach((fruit,i) => {
//     fChr = fruit[i].toUpperCase()
//     console.log(fChr);
// }

// )






























// let allNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// dividedBy3 = allNum.filter(num => { 
//     return num % 3 === 0
// })





// filter on string
let fruits = ["apple", "banana", "cherry", "grape", "orange"]
let talha = ["apple", "banana", "cherry"]
let uzair = [ "cherry", "grape", "orange"]

let bothLike = fruits.filter(fruit => talha.includes(fruit) && uzair.includes(fruit))




















// this 