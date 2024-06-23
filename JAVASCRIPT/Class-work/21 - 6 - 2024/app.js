// try catch 
// try {
//     console.lg("hello");
// } catch (error) {
//     console.log(error);
// }
// console.log("Salam");





// promise chain
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("hello im promise 1");
//     }, 3000);
// });
// let promise2 = Promise.resolve("im promise 2")

// Promise.all([promise1,promise2]).then((result)=>{
//     console.log(result);
// });


// callback hell   
// async await 
// how to use catch in async await
// fetch
// local storage




const promise1 = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        console.log("hello im promise 1");
        resolve()
    },1000)
})

promise1.then(()=>{
    console.log("promise1");
})