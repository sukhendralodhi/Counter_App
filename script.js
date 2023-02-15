const counter = document.querySelector("span");
const buttons = document.querySelector(".buttons");

const sub = document.getElementById("sub");
const res = document.getElementById("res");
const add = document.getElementById("add");

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("sub")) {
    counter.innerText--;
    setColor();
  }
  if (e.target.innerText === "Add") {
    counter.innerText++;
    setColor();
  }

  if (e.target.innerText === "Reset") {
    counter.innerText = 0;
    setColor();
  }
});

function setColor() {
  if (counter.innerText > 0) {
    counter.classList.toggle("text-yellow-900");
  } else if (counter.innerText < 0) {
    counter.classList.toggle("text-red-900");
  } else {
    counter.classList.toggle("text-white");
  }
}


// sub.addEventListener("click", () => {
//   counter.innerText--;
//   if (counter.innerText < 0) {
//     counter.classList.add("text-red-800");
//     counter.classList.remove("text-black");
//     counter.classList.remove("text-green-900");
//   }
// });

// res.addEventListener("click", () => {
//   counter.innerText = 0;
//   if (counter.innerText == 0) {
//     counter.classList.add("text-black");
//     counter.classList.remove("text-green-900");
//     counter.classList.remove("text-red-800");
//   }
// });

// add.addEventListener("click", () => {
//   counter.innerText++;
//   if (counter.innerText > 0) {
//     counter.classList.add("text-green-900");
//     counter.classList.remove("text-black");
//     counter.classList.remove("text-red-800");
//   }
// });
