// CRUD // create read update delete
let input = document.querySelectorAll("input");
let output = document.querySelectorAll(".output");
let outputValue = [];

function add() {
  let value = input[0].value;
  outputValue.push(value);
  print();
  input[0].value = "";
}

function print() {
    outputValue[0].innerHTML= ""
  for (let i = 0; i < outputValue.length; i++) {
    output[0].innerHTML += `<p id="para${i}"> ${outputValue}</p> <button onClick = "edit()">edit</button><button onClick = "deleted()">delete</button> `;
  }
}
function edit() {
    console.log("edited");
}
function deleted() {
    console.log("deleted");
}












