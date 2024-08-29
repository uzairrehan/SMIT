const msgDiv = document.getElementById("messages");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const messagesArray = [];
const lclStr = JSON.parse(localStorage.getItem("items"));
const clearBtn = document.getElementById("clear");






function printFromLS() {
  lclStr.map((msg ,val) => {
    msgDiv.innerHTML +=  `  <div class="user${msg[1]}">
        <h4>User ${msg[1]}</h4>
        <p class="user-message">
            ${msg[0]}
        </p>  
        <button class="delete button" onclick="deleteFnc(${val})" >Delete</button>
    </div>`;
  });

  for (let i = 0; i < lclStr.length; i++) {
    messagesArray.push(lclStr[i]);
  }
}
printFromLS();

function send1() {
  if (input1.value === "") {
    return;
  } else {
      printFromLS()

    messagesArray.push([input1.value, 1]);
    localStorage.setItem("items", JSON.stringify(messagesArray));
    input1.value = "";
  }
}

function send2() {
  if (input2.value === "") {
    return;
  } else {
    msgDiv.innerHTML += `
    <div class="user2">
        <h4>User 2</h4>
        <p class="user-message">
            ${input2.value}
        </p>  
       
        <button class="delete button">Delete</button>
    </div>
`;

    messagesArray.push([input2.value, 2]);

    localStorage.setItem("items", JSON.stringify(messagesArray));

    input2.value = "";
  }
}

function clearAll() {
  msgDiv.innerHTML = "";
  localStorage.clear();
}

clearBtn.addEventListener("click", () => clearAll());




function deleteFnc(item) {
  lclStr.splice(item,1)
  printFromLS();
}

// this is from chat gpt for auto scroll to botm

// const container = document.getElementById("messages");

// const observer = new MutationObserver(() => {
//   container.scrollTop = container.scrollHeight;
// });

// observer.observe(container, { childList: true });
