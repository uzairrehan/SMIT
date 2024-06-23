// let user = {
//     name : "Uzair" ,
//     fathersName : "Rehan Zia",
//     rollNum :174691
// };






// destructuring of object
// function add(student) {
//     let fathersName = "rehan"
//     const {name, fathersName:fthName} = student;
//     console.log(`Im ${name} my father is ${fthName}.`);
//     // console.log(`Im ${name} my father is ${fathersName}.`);
// }

// add(user)
// console.log(user.fathersName);






// rest operator
// function add(student) {
//     const {name, fathersName, ...remaining} = student;
//     console.log(`Im ${name} my father is ${fathersName}.`, remaining);
// }
// add(user)




// spread operator
// let array = [1,23,445,535]
// let array2 = [...array]
// array2.pop()
// console.log(array2,array);




// let car = {
//     name: 'mehran',
//     model: "2005",
//     varient: "vxr",
//     isAutomatic: false,
//     features: {
//         fuelAverage: "Best",
//         easyToDhakka: true,
//         isSpearWheelAvailable: true,
//         isAirConditioned: true
//     }
// }


// const {name,model,varient,features} = car/

// const {fuelAverage,easyToDhakka,isAirConditioned} = features

// console.log(fuelAverage,easyToDhakka);

// console.log(name,model,varient,fuelAverage,easyToDhakka,isAirConditioned);

// const {
//     name,
//     model,
//     varient,
//     features: {fuelAverage,easyToDhakka}
// } = car

// console.log(fuelAverage,easyToDhakka,name);













// destructuring of array
// let fruits = ['Apple', 'mango', 'Grapes', 'watermellon', 'oranges']
// const [fruits1, , fruits2, , fruits3] = fruits
// console.log(fruits1,fruits2,fruits3);







// arrow functions and dont have this keyword
// this is used for callback
// setTimeout(() => {
//     console.log("Bado Badi");
// }, 1000);







// also you can name it
// const greet = () => {
//     console.log("Hello Greet");
// }
// greet()






// arrow agar aik line ka hai or kuch return bi ho raha he to is tarh likhenge .this is called implicit return
// const greet = () => prompt("hello");
// console.log(greet());








// agar aik parameter ho to is tarha function banate heen or return bhi karana ho to
// const makeGreeting = userName => `Welcome ${userName}`
// let user = makeGreeting('Talha');
// console.log(user);

















// forEach loop this is only for array
// let a = [1,2,3,4,5,6,7];
// a.forEach(function(el) {
//     console.log(el+2);
// })






// for In loop this is for object
// let obj = {
//     user :"Uzair",
//     rollNum: 174691,
//     fthName:"Rehan"
// }
// for(let key in obj){
//     console.log(key); //key is men aye gi
//     console.log(obj[key]); //value is men
// }




// do while loop jab kam az kam aik bar chalana ho
// let a = 12;
// do{
//     console.log("hello");
//     a++
// }
// while(a < 20)




//  imediately invoked function rxpression (IIFE)
// global scope ke pollutoion ko hatane keliyen use hota he aur forna baad call karne ke liyen

// khatam hone ke baad semicolon ";" zaroor lagana he end karne ke liyen



// named IIFE
(function code() {
    console.log("hello");
})();



// with arrow function 
((name) => {
    console.log("hello " + name);
})("uzair");