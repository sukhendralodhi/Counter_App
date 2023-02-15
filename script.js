const counter = document.querySelector("span");

const sub = document.getElementById("sub");
const res = document.getElementById("res");
const add = document.getElementById("add");

sub.addEventListener("click", () => {
  counter.innerText--;
  if (counter.innerText < 0) {
    counter.classList.add("text-red-800");
    counter.classList.remove("text-black");
    counter.classList.remove("text-green-900");
  }
});

res.addEventListener("click", () => {
  counter.innerText = 0;
  if (counter.innerText == 0) {
    counter.classList.add("text-black");
    counter.classList.remove("text-green-900");
    counter.classList.remove("text-red-800");
  }
});

add.addEventListener("click", () => {
  counter.innerText++;
  if (counter.innerText > 0) {
    counter.classList.add("text-green-900");
    counter.classList.remove("text-black");
    counter.classList.remove("text-red-800");
  }
});
