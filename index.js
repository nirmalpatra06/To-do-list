const inputfield = document.getElementById("input-field");
const listBox = document.getElementById("list-box");
const li = document.querySelectorAll(".li");

function addTask() {
  if (inputfield.value === "") {
    alert("You must Write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputfield.value;
    listBox.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "❌";
    li.appendChild(span);
  }
  inputfield.value = "";
  updateStorage();
}

listBox.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      updateStorage();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      updateStorage();
    }
  },
  false
);

//This func will store the data in the localStorage
function updateStorage() {
  localStorage.setItem("data", listBox.innerHTML);
}

//This func will display the saved data in the UI
function showTask() {
  listBox.innerHTML = localStorage.getItem("data");
}

showTask();
