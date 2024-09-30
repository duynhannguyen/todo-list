// const itemList = document.querySelectorAll(".item");
const button = document.querySelector("#submit");
const parentList = document.querySelector("#list");
const nameInput = document.querySelector(".nameInput");
const hello = document.querySelector(".hello");
button.addEventListener("click", addItem);
// parentList.addEventListener("click", function () {
//   parentList.classList.toggle("fade");
// });
function addItem(e) {
  e.preventDefault();
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.innerHTML = nameInput.value;
  parentList.appendChild(newItem);
  newItem.addEventListener("click", removeItem);
  nameInput.value = "";
}
function removeItem(e) {
  e.stopPropagation();
  e.target.remove();
}
