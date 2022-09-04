const button = document.querySelector("header button");
const body = document.querySelector("body");
let theme = localStorage.getItem("theme"); //light

if (theme === "dark") {
    body.classList.add("dark")
};

button.addEventListener("click", () => {
   
    if (theme === "dark") {
        body.classList.remove("dark");
        theme = "";
    } else {
        body.classList.add("dark");
        theme = "dark"
    }
    localStorage.setItem("theme", theme);
});








