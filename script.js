const bars = document.getElementById("bars");
const menu = document.getElementById("menu")
const cancel = document.getElementById("nav__cancel");
const day = document.getElementById("day");
const hours = document.getElementById("hours");
const minut = document.getElementById("minut");
const second = document.getElementById("second");
const discoundTime = document.querySelector(".products__discount__time");


// ======= bars ==============

bars.addEventListener('click', () => {
    menu.style.right = "0px"
});

cancel.addEventListener('click', () => {
    menu.style.right = "-250px"
});

// ========= time function ==========

function time() {
    let data = new Date();
    let dayTime = (data.getDay());
    let hoursTime = (data.getHours());
    let minutTime = (data.getMinutes());
    let secondTime = (data.getSeconds());

    day.textContent = `${dayTime}`;
    hours.textContent = `${hoursTime}`;
    minut.textContent = `${minutTime}`;
    second.textContent = `${secondTime}`;

    let localTime = new Date();
    let localDay = (localTime.getDay());
    let localHours = (localTime.getHours());
    let localMinut = (localTime.getMinutes());
    let localSekond = (localTime.getSeconds());

    discoundTime.textContent = `${localDay} : ${localHours} : ${localMinut} : ${localSekond}`
}
setInterval(time, 1000)


// ========== sign up  ================
const firstName = document.getElementById("signinNme");
const lastName = document.getElementById("signinLastName");
const email = document.getElementById("signinEmail");
const telNumber = document.getElementById("signinNumber");
const password = document.getElementById("signinPasword");
const confirPassword = document.getElementById("signinConfirPasword");
const signUpSubmit = document.getElementById("signupBtn");
const navIcons = document.getElementById("nav__icons");
const signin = document.getElementById("signin");
const signup = document.getElementById("signup");
const menuSignin = document.getElementById("menuSignin");
const menuSignup = document.getElementById("menuSignup");
const menuIcons = document.getElementById("menuIcons");

signUpSubmit.addEventListener('click', () => {

    const pass = document.getElementById("signinPasword").value;
    const Confirpass = document.getElementById("signinConfirPasword").value;

    let obj = [
        {
            regFirstaName: firstName.value,
            regLastName: lastName.value,
            regEmail: email.value,
            regTel: telNumber.value,
            regPassword: password.value,
            regConfigPas: confirPassword.value
        }
    ]




    if (
        firstName.value === "" ||
        lastName.value === "" ||
        email.value === "" ||
        telNumber.value === "" ||
        pass === "" ||
        Confirpass === ""
    ) {
        alert("Malumot kiriting !")
    } else {
        localStorage.setItem('firsName', obj[0].regFirstaName);
        localStorage.setItem('lastName', obj[0].regLastName);
        localStorage.setItem('email', obj[0].regEmail);
        localStorage.setItem('tel', obj[0].regTel);
        localStorage.setItem('password', obj[0].regPassword);
        localStorage.setItem('configPassword', obj[0].regConfigPas);
        navIcons.style.display = "flex";
        signin.style.display = "none";
        signup.style.display = "none";
        menuSignin.style.display = "none";
        menuSignup.style.display = "none";



        alert(`Saytga hush kelibsiz ! ${lastName.value}  ${firstName.value}`);
        location.reload();
    }


});


// ============ data switcher ============

window.onload = function () {
    const tab_switchers = document.querySelectorAll('[data-switcher]');
    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab

        tab_switcher.addEventListener('click', () => {
            const currentActive = document.querySelector(".nav__collect .nav__item.activePage");
            if (currentActive) {
                currentActive.classList.remove("activePage");
            }

            tab_switcher.classList.add("activePage");
            changePage(page_id);
        });


    }

    const tab_switcherTwos = document.querySelectorAll('[data-switcherTwo]');
    for (let i = 0; i < tab_switcherTwos.length; i++) {
        const tab_switcherTwo = tab_switcherTwos[i];
        const fashion_id = tab_switcherTwo.dataset.tab;

        tab_switcherTwo.addEventListener('click', () => {
            tab_switcherTwos.forEach(btn => btn.classList.remove("activeFashion"));

            tab_switcherTwo.classList.add("activeFashion");

            changeFashion(fashion_id);
        });
    }


    const tab_imgs = document.querySelectorAll('[data-img]');
    for (let i = 0; i < tab_imgs.length; i++) {
        const tab_img = tab_imgs[i];
        const img_id = tab_img.dataset.tab;

        tab_img.addEventListener('click', () => {
            const imgActive = document.querySelector(".products__img__collect .products__item.imgActive")
            if (imgActive) {
                imgActive.classList.remove("imgActive");
            }
            tab_img.classList.add("imgActive");
            changeImg(img_id);
        });
    }

    // ============== local stroge ================
    const savedNameF = localStorage.getItem('firsName');
    const savedNameL = localStorage.getItem('lastName');
    const savedEmail = localStorage.getItem('email');
    const savedTel = localStorage.getItem('tel');
    const savedPassword = localStorage.getItem('password');
    const savedPasswordC = localStorage.getItem('configPassword');

    if (savedNameF && savedNameL && savedEmail && savedTel && savedPassword && savedPasswordC) {
        navIcons.style.display = "flex";
        signin.style.display = "none";
        signup.style.display = "none";
        menuSignin.style.display = "none";
        menuSignup.style.display = "none";
    }

}
function changePage(page_id) {
    const current_page = document.querySelector(".pages .page.activePage");
    current_page.classList.remove("activePage");

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
    next_page.classList.add("activePage")
}
function changeFashion(fashion_id) {
    const current_fashion = document.querySelector(".arrivals__collect .fashion.activeFashion");
    if (current_fashion) {
        current_fashion.classList.remove("activeFashion");
    }

    const next_fashion = document.querySelector(`.arrivals__collect .fashion[data-pageTwo="${fashion_id}"]`);
    if (next_fashion) {
        next_fashion.classList.add("activeFashion");
    }
}

function changeImg(img_id) {
    const current_img = document.querySelector(".products__img__main .imgPage.imgActive");
    current_img.classList.remove("imgActive");

    const next_img = document.querySelector(`.products__img__main .imgPage[data-filter="${img_id}"]`);
    next_img.classList.add("imgActive");
}



// =============== size ===========================
const size = document.querySelector(".products__sizing__text");
const sizeBtn = document.querySelectorAll(".products__sizing__btn");

sizeBtn.forEach((button) => {
    button.addEventListener('click', () => {
        size.textContent = "Size :" + button.textContent;

        sizeBtn.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");
    })
});

// ================ color =======================
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

});

minusBtn.addEventListener('click', () => {
    let count = parseInt(number.textContent);
    if (count > 0) {
        count--;
        number.textContent = count;
    }
});


const shopCardContainer = document.querySelector(".shopping__container");
const shopCardClose = document.getElementById("shopping--close");
const shopCard = document.querySelector(".shopping__card");


function timeCard() {
    shopCardContainer.style.display = "block";
}

shopCardClose.addEventListener('click', () => {
    shopCardContainer.style.display = "none"
});
setInterval(timeCard, 990000)








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


// ============= check out dropdown ==========

const deliverOpen = document.getElementById("checkout__delivery__open");
const deliverCon = document.querySelector(".checkout__delivery__body__data");
const paymentOpen = document.getElementById("checkout__payment__open");
const paymentCon = document.querySelector(".checkout__payment__data");

let isOpen = false;


deliverOpen.addEventListener('click', () => {
    if (!isOpen) {
        deliverCon.style.display = "block"
        deliverOpen.style.transform = "rotate(0deg)"
        isOpen = true;
    } else {
        deliverCon.style.display = "none"
        deliverOpen.style.transform = "rotate(180deg)"
        isOpen = false;
    }
});


let payOpen = false;


paymentOpen.addEventListener('click', () => {
    if (!payOpen) {
        paymentCon.style.display = "block"
        paymentOpen.style.transform = "rotate(0deg)"
        payOpen = true;
    } else {
        paymentCon.style.display = "none"
        paymentOpen.style.transform = "rotate(180deg)"
        payOpen = false;
    }
});

// ================== log out =================
const logOutBtn = document.getElementById("logOut__btn");
const logOutCon = document.querySelector(".logOut");
const logYes = document.getElementById("yesOut");
const logNo = document.getElementById("noOut");

logOutCon.style.display = "none"

logOutBtn.addEventListener('click', () => {
    logOutCon.style.display = "flex"
});

logNo.addEventListener('click', () => {
    logOutCon.style.display = "none"
});

logYes.addEventListener('click', () => {
    logOutCon.style.display = "none"
    localStorage.clear();
    location.reload();
});



document.addEventListener("click", function (e) {
    const switcher = e.target.closest("[data-switcher]");
    if (switcher) {
        const targetTab = switcher.getAttribute("data-tab");
        const pages = document.querySelectorAll(".page");

        pages.forEach((page) => {
            page.classList.remove("activePage");
        });

        const targetPage = document.querySelector(`.page[data-page="${targetTab}"]`);
        if (targetPage) {
            targetPage.classList.add("activePage");
        }
    }
});




const mens = [
    {
        Image: "./images/means-img-1.png",
        name: "Brunello Cucinelli",
        price: "$95.50"
    },
    {
        Image: "./images/means-img-2.png",
        name: "Long Dress",
        price: "$95.50"
    },
    {
        Image: "./images/means-img-3.png",
        name: "Full Sweater",
        price: "$95.50"
    },
    {
        Image: "./images/means-img-4.png",
        name: "Casablanca",
        price: "$95.50"
    },
    {
        Image: "./images/means-img-5.png",
        name: "Colorful Dress",
        price: "$95.50"
    },
    {
        Image: "./images/means-img-6.png",
        name: "White Shirt",
        price: "$95.50"
    },
]

let products = [
    {
        imgage: "./images/arrivals-card-img-1.png",
        name: "Shiny Dress",
        price: "$95.50"
    },
    {
        imgage: "./images/arrivals-card-img-2.png",
        name: "Long Dress",
        price: "$95.50"
    },
    {
        imgage: "./images/arrivals-card-img-3.png",
        name: "Full Sweater",
        price: "$95.50"
    },
    {
        imgage: "./images/arrivals-card-img-4.png",
        name: "White Dress",
        price: "$95.50"
    },
    {
        imgage: "./images/arrivals-card-img-5.png",
        name: "Colorful Dress",
        price: "$95.50"
    },
    {
        imgage: "./images/arrivals-card-img-6.png",
        name: "White Shirt",
        price: "$95.50"
    },
]

const womens = [
    {
        image: "./images/woman-img-1.png",
        name: "Dolce & Gabbana",
        price: "$95.50"
    },
    {
        image: "./images/woman-img-2.png",
        name: "Altuzarra",
        price: "$95.50"
    },
    {
        image: "./images/woman-img-3.png",
        name: "Bottega Veneta",
        price: "$95.50"
    },
    {
        image: "./images/woman-img-4.png",
        name: "Miu Miu",
        price: "$95.50"
    },
    {
        image: "./images/woman-img-5.png",
        name: "Prada",
        price: "$95.50"
    },
    {
        image: "./images/woman-img-6.png",
        name: "Rowen Rose",
        price: "$95.50"
    },
]

const productsDiv = document.getElementById("product");
const mensDiv = document.getElementById("mens");
const womanDiv = document.getElementById("woman");

for (let i = 0; i < mens.length; i++) {
    const men = mens[i];
    mensDiv.innerHTML += `
     <div class="arrivals__collect__card">
        <div class="arrivals__card__header">
            <img src="${men.Image}" alt="" height="352">
        </div>
        <div class="arrivals__card__body">
            <div class="arrivals__card__bodyBox">
                <p>${men.name}</p>
                <div class="arrivals__card__star">
                    <img src="./images/star.svg" alt="img">
                    <img src="./images/star.svg" alt="img">
                    <img src="./images/star.svg" alt="img">
                    <img src="./images/star.svg" alt="img">
                    <img src="./images/star.svg" alt="img">
                </div>
            </div>
            <p class="arrivals__card__auther">Al Karam</p>

            <p class="arrivals__card__costumer">(4.1k) Customer Reviews</p>
        </div>
        <div class="arrivals__card__footer">
            <p class="arrivals__card__footerText">${men.price}</p>
            <p class="arrivals__card__footerSold">Almost Sold Out</p>
        </div>
    
    `
}

for (let i = 0; i < products.length; i++) {
    const product = products[i];
    productsDiv.innerHTML += `
     <div class="arrivals__collect__card">
        <div class="arrivals__card__header">
            <img src="${product.imgage}" alt="">
        </div>
        <div class="arrivals__card__body">
            <div class="arrivals__card__bodyBox">
                <p>${product.name}</p>
                <div class="arrivals__card__star">
                    <img src="./images/star.svg" alt="img">
                    <img src="./images/star.svg" alt="img">
                    <img src="./images/star.svg" alt="img">
                    <img src="./images/star.svg" alt="img">
                    <img src="./images/star.svg" alt="img">
                </div>
            </div>
            <p class="arrivals__card__auther">Al Karam</p>

            <p class="arrivals__card__costumer">(4.1k) Customer Reviews</p>
        </div>
        <div class="arrivals__card__footer">
            <p class="arrivals__card__footerText">${product.price}</p>
            <button  class="arrivals__card__footerSold" onclick="addToCard(${i})">buy</button>
        </div>
    </div>

    `
}

for (let i = 0; i < womens.length; i++) {
    const women = womens[i];
    womanDiv.innerHTML += `
     <div class="arrivals__collect__card" >
                                    <div class="arrivals__card__header">
                                        <img src="${women.image}" alt="">
                                    </div>
                                    <div class="arrivals__card__body">
                                        <div class="arrivals__card__bodyBox">
                                            <p>${women.name}</p>
                                            <div class="arrivals__card__star">
                                                <img src="./images/star.svg" alt="img">
                                                <img src="./images/star.svg" alt="img">
                                                <img src="./images/star.svg" alt="img">
                                                <img src="./images/star.svg" alt="img">
                                                <img src="./images/star.svg" alt="img">
                                            </div>
                                        </div>
                                        <p class="arrivals__card__auther">Al Karam</p>

                                        <p class="arrivals__card__costumer">(4.1k) Customer Reviews</p>
                                    </div>
                                    <div class="arrivals__card__footer">
                                        <p class="arrivals__card__footerText">${women.price}</p>
                                        <p class="arrivals__card__footerSold">Almost Sold Out</p>
                                    </div>
                                </div>
    `
}

const cardDiv = document.getElementById("card");

let cards = [

];

let restard = () => {

    cardDiv.innerHTML = ``;

    for (let i = 0; i < cards.length; i++) {

        const product = cards[i];

        cardDiv.innerHTML += `
        <div class="shopCard__box">
                            <div class="shopCard__box__header">
                                <p class="shopCard__header__text">Product</p>
                                <p class="shopCard__header__text">Price</p>
                                <p class="shopCard__header__text">Quantity</p>
                                <p class="shopCard__header__text">Total</p>
                            </div>

                            <div class="shopCard__box__body">
                                <div class="shopCard__body__prod">
                                    <div>
                                        <img src="${product.imgage}" alt="" width="170">
                                    </div>
                                    <div class="shopCard__body__prodText">
                                        <h5>${product.name}</h5>
                                        <p>Color : Red</p>
                                        <p id="CardRemove" onclick="remove(${i})">Remove</p>
                                    </div>
                                </div>
                                <p class="shopCard__body__price" id="cardMon">${product.price}</p>
                                <div class="shopCard__body__Quantity">
                                    <div class="products__quantity__main">
                                        <div class="products__quantity__box">
                                            <button id="btnMinus">-</button>
                                            <p id="textNumber">1</p>
                                            <button id="btnPlus">+</button>
                                        </div>
                                    </div>
                                </div>
                                <p class="shopCard__body__total" id="">${product.price}</p>
                            </div>

                            <div class="shopCard__box__footer">

                                <div class="shopCard__box__footer__box">
                                    <div class="shopping__body">
                                        <div>
                                            <input type="checkbox" class="shopping__checkbox">
                                        </div>
                                        <p class="shopping__text">For <b>$10.00</b> please wrap the product</p>
                                    </div>
                                    <div class="shopping__footer">
                                        <div class="shopping__footer__top">
                                            <p>Subtotal</p>
                                            <p>$100.00</p>
                                        </div>
                                        <button class="shopping__checkoutbtn" data-switcher
                                            data-tab="9">Checkout</button>
                                        <a href="#" class="shopping__href">View Cart</a>
                                    </div>
                                </div>

                            </div>
                        </div>
        `
    }


}
function addToCard(index) {
    const product = products[index];
    cards.push(product);
    alert("Mahsulot savatga qoshildi !");
    restard();
}


function remove(index) {
    cards.splice(index, 1);
    restard();
}






