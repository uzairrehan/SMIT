function Student(name, rollNo, isFeePaid) {
  this.name = name;
  this.rollNo = rollNo;
  this.isFeePaid = isFeePaid;
}

let student1 = new Student("usman", 2567, true);
let student2 = new Student("uzair", 2587, false);

student1.quota = true;

Student.prototype.subject = "HTMl";

delete student1.isFeePaid;
// console.log(student1, student2);

allStudents = [student1, student2];

for (let i = 0; i < allStudents.length; i++) {
  let student = allStudents[i];
  if ("isFeePaid" in student) {
    if (student.isFeePaid) {
      console.log("Thanks for fee");
    } else {
      console.log("plz submit your fee");
    }
  } else if ("quota" in student){
    console.log("dil lgaa ke perh");
  }
}



let allValues = Object.values(student2);
console.log(allValues.includes("uzair"));




let currentUrl = location;
console.log(currentUrl.host);


let newUrl = prompt("enter a new url");
location = newUrl;