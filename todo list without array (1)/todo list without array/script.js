let myNodelist = document.querySelectorAll("LI");
let button = document.getElementsByClassName("button");
let editButton = document.getElementsByClassName("Edit");
let myDiv = document.getElementById("myDIV")
let editDiv = document.getElementById("editDiv")
let editValue = document.getElementById("editInput");
let submitBtn = document.getElementById("submitBtn");



function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Enter Something");
    } else {
        let val = document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    let span = document.createElement("span");
    let btn = document.createElement("button");
    let editBtn = document.createElement("button");
    btn.innerHTML = "Delete";
    editBtn.innerHTML = "Edit";
    editBtn.className = "Edit";
    btn.className = "button";
    span.appendChild(editBtn);
    span.appendChild(btn);
    li.appendChild(span);


    // delete btn
    for (i = 0; i < button.length; i++) {
        button[i].onclick = function () {
            let div = this.parentElement.parentElement;
            div.style.display = "none";
        }
    }

    // edit btn
    for (i = 0; i < editButton.length; i++) {
        editButton[i].onclick = function () {
            editDiv.style.display = "block"
            myDiv.style.display = "none"
            let div = this.parentElement.parentElement;
            console.log(div);
            let val = div.innerText.replace(/EditDelete/g, '')
            editValue.value = val;

            submitBtn.onclick = function () {
                editDiv.style.display = "none"
                myDiv.style.display = "block"
                console.log(div);
                div.innerText = editValue.value   
            }
        }
    }
}