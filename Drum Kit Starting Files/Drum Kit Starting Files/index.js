var targetSet = document.querySelectorAll(".drum");

for (var i = 0; i < targetSet.length; i++) {
  // capturing mouse clicks and producing corresponding sounds

  targetSet[i].addEventListener("click", function () {
    musicLetter = this.innerHTML;
    buttonAnimation(musicLetter);
    makeSound(musicLetter);
  });
}

// capturing keyboard keys and producing corresponding sounds.

document.addEventListener("keydown", function (event) {
  buttonAnimation(event.key);
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var ws = new Audio("sounds/crash.mp3");
      ws.play();
      break;

    case "a":
      var as = new Audio("sounds/kick-bass.mp3");
      as.play();
      break;

    case "s":
      var ss = new Audio("sounds/snare.mp3");
      ss.play();
      break;

    case "d":
      var ds = new Audio("sounds/tom-1.mp3");
      ds.play();
      break;

    case "j":
      var js = new Audio("sounds/tom-2.mp3");
      js.play();
      break;

    case "k":
      var ks = new Audio("sounds/tom-3.mp3");
      ks.play();
      break;

    case "l":
      var ls = new Audio("sounds/tom-4.mp3");
      ls.play();
      break;

    default:
      console.log(targetDrum);
      break;
  }
}

function buttonAnimation(currentButton) {
  var activeButton = document.querySelector("." + currentButton);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
