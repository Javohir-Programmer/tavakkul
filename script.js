let sun = document.querySelector('#sun');
let moon = document.querySelector('#moon');
let body = document.querySelector('body');
let menuIcon = document.querySelector('#menu');
let menu_box = document.querySelector('.menu-box');
let x = document.querySelector('#x');

// dark mood

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

// nav bar

menuIcon.addEventListener("click", () => {
    menu_box.classList.add("left");
});

x.addEventListener("click", () => {
    menu_box.classList.remove("left");
});