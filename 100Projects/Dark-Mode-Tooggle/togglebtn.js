const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");

// Load the initial state from localStorage
const savedMode = JSON.parse(localStorage.getItem("mode"));
inputEl.checked = savedMode !== null ? savedMode : false;
updateBody();

function updateBody(){
  if(inputEl.checked){
    bodyEl.style.background = "black";
  } else {
    bodyEl.style.background = "white";
  }
}

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage(){
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
