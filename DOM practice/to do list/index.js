const input = document.querySelector(".input");
const button = document.querySelector(".button");
const list = document.querySelector(".list");

button.addEventListener("click", function () {
  //   input.value
  const newItem = document.createElement("li");
  newItem.innerHTML = input.value;
  list.appendChild(newItem);
});
