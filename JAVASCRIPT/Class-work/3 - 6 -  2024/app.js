// let student = {
//     userName: "uzair"
// } 
// let student2 = student
// student2.userName = "ali"






// let number = 1;
// let number2 = number;
// number2 = 2;

// let student;
// console.log(student);


// student = "ali";
// console.log(student);

















// let student = {
//     name : "uzair",
// }
// let student2 = {}
// let student3 = Object.assign(student2, student)
// student3.name = "talha"

// console.log(student,  student3);









// let student = {
//     name : "uzair",
// }
// let student2 = Object.assign({}, student)
// student2.name = "talha"

// console.log(student,  student2);




// let clind1 = {
//     name: 'uzair',
//     rollNum: 4578
// }

// let clind2 = {...clind1}
// clind2.name = "talha"

// console.log(clind2, clind1);



// let student1 ={
//     name: 'aslam',
//     rollNum: 3345
// }

// let student2 = {student1}

// student2.rollNum = 2343

// console.log(student1, student2);































let dost = new Promise (function (resolve, reject ) {
    let islunch = confirm("lunch laye ho kya ?")  
    if (islunch){
        resolve("tu mera dost he")
    }
    else {
        reject("tu kon he bhai")
    }
})

dost
    .then(function (ok) {
        console.log(ok);
    })
    .catch(function (chalBhaag) {
        console.log(chalBhaag);
    })