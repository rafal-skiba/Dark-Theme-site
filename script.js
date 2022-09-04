const button = document.querySelector("header button");
const body = document.querySelector("body");

console.log(button);

button.addEventListener("click", () => {
    body.classList.toggle("dark");
})