let sun = document.querySelector('#sun');
let moon = document.querySelector('#moon');
let body = document.querySelector('body');

sun.addEventListener("click", () => {
    body.classList.add("darkLight");
    moon.classList.add("block");
    sun.classList.add("none");
})
moon.addEventListener("click", () => {
    body.classList.remove("darkLight");
    moon.classList.remove("block");
    sun.classList.remove("none");
});