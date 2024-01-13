const drum = document.querySelectorAll(".drum");

for (let i = 0; i < drum.length; i++) {
  drum[i].addEventListener("click", function () {
    playSound(this.innerHTML);
    changeColor(this.innerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  playSound(event.key);
  changeColor(event.key);
});

function playSound(key) {
  switch (key) {
    case "w":
      new Audio("/sounds/crash.mp3").play();
      break;
    case "a":
      new Audio("/sounds/kick-bass.mp3").play();
      break;
    case "s":
      new Audio("/sounds/snare.mp3").play();
      break;
    case "d":
      new Audio("/sounds/tom-1.mp3").play();
      break;
    case "j":
      new Audio("/sounds/tom-2.mp3").play();
      break;
    case "k":
      new Audio("/sounds/tom-3.mp3").play();
      break;
    case "l":
      new Audio("/sounds/tom-4.mp3").play();
      break;

    default:
      console.log("hey");
      break;
  }
}

function changeColor(key) {
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(() => {
    document.querySelector("." + key).classList.remove("pressed");
  }, 100);
}
