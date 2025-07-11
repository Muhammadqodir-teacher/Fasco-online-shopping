const bars = document.getElementById("bars");
const menu = document.getElementById("menu")
const cancel = document.getElementById("nav__cancel");

bars.addEventListener('click', () => {
    menu.style.right = "0px"
});

cancel.addEventListener('click', () => {
    menu.style.right = "-250px"
});