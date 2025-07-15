const bars = document.getElementById("bars");
const menu = document.getElementById("menu")
const cancel = document.getElementById("nav__cancel");

bars.addEventListener('click', () => {
    menu.style.right = "0px"
});

cancel.addEventListener('click', () => {
    menu.style.right = "-250px"
});


const day = document.getElementById("day");
const hours = document.getElementById("hours");
const minut = document.getElementById("minut");
const second = document.getElementById("second");

let data = new Date();
let dayTime = (data.getDay());
let hoursTime = (data.getHours());
let minutTime = (data.getMinutes());
let secondTime = (data.getSeconds());

day.textContent = `${dayTime}`;
hours.textContent = `${hoursTime}`;
minut.textContent = `${minutTime}`;
second.textContent = `${secondTime}`;


const discoundTime = document.querySelector(".products__discount__time");

let localTime = new Date();
let localDay = (localTime.getDay());
let localHours = (localTime.getHours());
let localMinut = (localTime.getMinutes());
let localSekond = (localTime.getSeconds());

discoundTime.textContent = `${localDay} : ${localHours} : ${localMinut} : ${localSekond}`

window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');
    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab

        tab_switcher.addEventListener('click', () => {
            document.querySelector(".products__img__collect .products__item.imgActive").classList.remove("imgActive");
            tab_switcher.classList.add("imgActive");
            changePage(page_id);
        });
    }
}
function changePage(page_id) {
    const current_page = document.querySelector(".products__img__main .page.imgActive");
    current_page.classList.remove("imgActive");

    const next_page = document.querySelector(`.products__img__main .page[data-page="${page_id}"]`);
    next_page.classList.add("imgActive")
}



const size = document.querySelector(".products__sizing__text");
const sizeBtn = document.querySelectorAll(".products__sizing__btn");

sizeBtn.forEach((button) => {
    button.addEventListener('click', () => {
        size.textContent = "Size :" + button.textContent;

        sizeBtn.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");
    })
});


const color = document.querySelector(".products__color__text");
const colorBtn = document.querySelectorAll(".products__colors__box");

colorBtn.forEach((button) => {
    button.addEventListener('click', () => {
        const checkColor = button.getAttribute("data-color");
        color.textContent = "Color :" + checkColor;

        colorBtn.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active")
    });
});


const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const number = document.getElementById("number");

let count = parseInt(number.textContent)
if (isNaN(count)) {
    count = 1;
    number.textContent = count;
};

plusBtn.addEventListener('click', () => {
    let count = parseInt(number.textContent);
    count++;
    number.textContent = count;
})

minusBtn.addEventListener('click', () => {
    let count = parseInt(number.textContent);
    if (count > 0) {
        count--;
        number.textContent = count;
    }
});