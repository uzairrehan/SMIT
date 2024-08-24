// let graduate = confirm("are you graduate?")
// if(graduate){
//     let faculty = prompt ("which faculty you chose")
//     if (faculty === "medical"){
//         document.write("you are appointed as doctor!")
//     } 
//     else if (faculty === "enginering"){
//         document.write("you are appointed as enginer!")
//     } 
//     else if (faculty === "commerce"){
//         let interest = prompt("are you interested in hr or accounts")
//         if (interest === "hr"){
//             document.write("you are appointed as hr")
//         }
//         else if (interest === "accounts"){
//             document.write("you are appointed as accountant")
//         }
//     } 
// }




// concept of Array


// let students = ["uzair", "abdullah", "ali"];
// document.write(students[2])

// let cars = ["picanto", "yaris", "corolla", "ferrari", "bugatti","lamborghini"];
// document.write(cars[3])


// let students = [];
// students[0] = "Haider"
// console.log(students)

// students[1] = "Uzair"
// console.log(students)

// students[3] = "Ali"
// console.log(students)

// document.write(students[2])



// let vowels = ["a","e","i","o","u"]
// let character = prompt("enter a character")
// if (vowels.indexOf(character) !== -1){
//     document.write("this is a vowel")
// }
// else{ 
//     document.write("this is not a vowel")
// }



let vowels = ["a","e","i","o","u"]
let character = prompt("enter a character")
if (vowels.includes(character)){
    document.write("this is a vowel")
}
else{ 
    document.write("this is not a vowel")
}