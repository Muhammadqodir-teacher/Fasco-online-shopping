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
            document.querySelector(".nav__collect .nav__item.activePage").classList.remove("activePage");
            tab_switcher.classList.add("activePage");
            changePage(page_id);
        });
    }
}
function changePage(page_id) {
    const current_page = document.querySelector(".pages .page.activePage");
    current_page.classList.remove("activePage");

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
    next_page.classList.add("activePage")
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


const shopCardBtn = document.querySelector(".products__quantity__item");
const shopCardContainer = document.querySelector(".shopping__container");
const shopCardClose = document.getElementById("shopping--close");
const shopCard = document.querySelector(".shopping__card");

shopCardBtn.addEventListener('click', () => {
    shopCard.style.right = "0px"
    shopCardContainer.style.display = "block"
});

shopCardClose.addEventListener('click', () => {
    shopCard.style.right = "-600px"
    shopCardContainer.style.display = "none"
});







const instaSlider = document.getElementById("followUS__container");

for (let i = 0; i < 3; i++) {
    instaSlider.innerHTML += instaSlider.innerHTML;
}

let scrollAmout = 0;
const sped = 1;

function autoScroll() {
    scrollAmout += sped;
    instaSlider.scrollLeft = scrollAmout;


    if (scrollAmout >= instaSlider.scrollWidth / 2) {
        scrollAmout = 0;
    }

    requestAnimationFrame(autoScroll);
}
autoScroll();




let slideIndex = 0;

function currentSlide(dir) {
    const slides = document.querySelectorAll(".customer__slide");

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slideIndex += dir;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    slides[slideIndex].classList.add("active");

}
