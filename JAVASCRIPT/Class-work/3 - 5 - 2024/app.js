// let student = {
//     name : prompt("enter yout name") ,
//     fees :  prompt("enter yout fees") ,
//     rollNumber :  prompt("enter yout roll number")     
// };
// console.log(student)











function createBook(bookName , author, pages, topic) {
    let book1 = {
        bookName : "rich dad",
        author: "uzair", 
        pages: 200, 
        topic :"finance"
    };
    let book2 = {
        bookName : "poor dad",
        author: "uzair", 
        pages: 300, 
        topic :"finance"
        
    };
    let book3 = {
        
        bookName : "gareeboo",
        author: "shahid", 
        pages: 400, 
        topic :"finance"
    };
    return [book1 ,book2, book3 ];

}
createBook()











function createBook(bookName , author, pages, topic) {
    let book = {
        bookName,
        author, 
        pages, 
        topic
    };
    return book;

}
console.log( createBook(3456,2345,345,345))