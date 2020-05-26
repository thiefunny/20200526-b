// const przycisk = document.querySelector(".przycisk");
// const przycisk2 = document.querySelector(".przycisk2");
// const trzyEl = document.querySelector(".trzy");
// const brawo = document.querySelector(".brawo");

// przycisk.onclick = function() {
//     przycisk2.classList.toggle("none");
// }

// przycisk2.onclick = function() {
//     przycisk.classList.toggle("none");

// }

// trzyEl.onmouseover = function() {
//     brawo.classList.remove("none");
// }

const button = document.querySelector("button");

// button.style.color = "#f00";

button.setAttribute("onclick", "function() {}");

console.log(button.getAttribute("style"));