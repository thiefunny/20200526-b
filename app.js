const divEl = document.querySelector("div");
const buttonEl = document.querySelector("button");

for (i of divEl.children) {
    i.style.color = "#f00";
    console.log(i)
}

for (let x = 0; x < 4; x++) {
    divEl.children[x].style.width = (x + 1) * 100 + "px";
}