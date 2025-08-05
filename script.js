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

window.onload = function (event) {
    event.preventDefault();
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
            <button  class="arrivals__card__footerSold" onclick="addToCard(${i})">Almost Sold Out</button>
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









// shop
let shopArr = [
    {
        image: "./images/shop-page-img-1.png",
        name: "Rounded Red Hat",
        price: 8.00,
        colorone: "#FFD700",
        colortwo: "#000000"
    },
    {
        image: "./images/shop-page-img-2.png",
        name: "Long-sleeve Coat",
        price: 106.00,
        colorone: "#8DB4D2",
        colortwo: "#FFD1DC"
    },
    {
        image: "./images/shop-page-img-3.png",
        name: "Boxy Denim Hat",
        price: 25.00,
        colorone: "#EBE6DB",
        colortwo: "#C1E1C1"
    },
    {
        image: "./images/shop-page-img-4.png",
        name: "Linen Plain Top",
        price: 25.00,
        colorone: "#B1C5D4",
        colortwo: "#063E66"
    },
    {
        image: "./images/shop-page-img-5.png",
        name: "Oversized T-shirt",
        price: 11.00,
        colorone: "#C1E1C1",
        colortwo: "#000000"
    },
    {
        image: "./images/shop-page-img-6.png",
        name: "Polarised Sunglasses",
        price: 18.00,
        colorone: "#FFD1DC",
        colortwo: "#C6AEC7"
    },
    {
        image: "./images/shop-page-img-7.png",
        name: "Rockstar Jacket",
        price: 22.00,
        colorone: "#000000",
        colortwo: "#836953"
    },
    {
        image: "./images/shop-page-img-8.png",
        name: "Dotted Black Dress",
        price: 20.00,
        colorone: "#C6AEC7",
        colortwo: "#BEDCE3"
    },
    {
        image: "./images/shop-page-img-9.png",
        name: "Rounded Red Hat",
        price: 8.00,
        colorone: "#063E66",
        colortwo: "#000000"
    }
]

const shopDiv = document.getElementById("shopContainer");
for (let i = 0; i < shopArr.length; i++) {
    const shopIndex = shopArr[i];
    shopDiv.innerHTML += `
     <div class="selling__body__box" data-switcher data-tab="3" onclick="openProduct(${i})">
     <div class="selling__body__img">
     <img src="${shopIndex.image}" alt="img">
     </div>
     <p class="selling__box__title">${shopIndex.name}</p>
     <p class="selling__box__money">$${shopIndex.price}.00</p>
     <div class="selling__color">
     <button class="selling__color__box active">
     <div style="background: ${shopIndex.colorone};"></div>
     </button>
     <button class="selling__color__box ">
     <div style="background: ${shopIndex.colortwo};"></div>
     </button>
     </div>
     </div>
     `
}


let productArr = []

const productDiv = document.getElementById("productContainer");

let goProduct = () => {
    productDiv.innerHTML = ""
    for (let i = 0; i < productArr.length; i++) {
        let shopIndex = productArr[i];

        productDiv.innerHTML += `
     <div class="products__imges">
                            <div class="products__img__collect">
                                <div class="products__item" data-img data-tab="1">
                                <img src="${shopIndex.image}" alt="img" width="58" height="78"> 
                                </div>
                                <div class="products__item imgActive" data-img data-tab="2">
                                <img src="${shopIndex.image}" alt="img" width="58" height="78"> 
                                </div>
                                <div class="products__item" data-img data-tab="3">
                                <img src="${shopIndex.image}" alt="img" width="58" height="78"> 
                                </div>
                                <div class="products__item" data-img data-tab="4">
                                <img src="${shopIndex.image}" alt="img" width="58" height="78"> 
                                </div>
                                <div class="products__item" data-img data-tab="5">
                                <img src="${shopIndex.image}" alt="img" width="58" height="78"> 
                                </div>
                                <div class="products__item" data-img data-tab="6">
                                <img src="${shopIndex.image}" alt="img" width="58" height="78"> 
                                </div>
                                <div class="products__item" data-img data-tab="7">
                                <img src="${shopIndex.image}" alt="img" width="58" height="78"> 
                                </div>
                            </div>
                            <div class="products__img__main">
                                <img class="imgPage " src="${shopIndex.image}" data-filter="1">
                                <img class="imgPage imgActive" src="${shopIndex.image}" alt="img" data-filter="2">
                                <img class="imgPage" src="${shopIndex.image}" data-filter="3">
                                <img class="imgPage" src="${shopIndex.image}" alt="img" data-filter="4">
                                <img class="imgPage" src="${shopIndex.image}" alt="img" data-filter="5">
                                <img class="imgPage" src="${shopIndex.image}" data-filter="6">
                                <img class="imgPage" src="${shopIndex.image}" data-filter="7">
                            </div>
                        </div>
                        <div class="products__data">
                            <div class="products__data__logo">Fasco</div>
                            <div class="products__evaluate">
                                <h1 class="products__evaluate__text">${shopIndex.name}</h1>
                                <div class="products__evaluate__star">
                                <i class="ri-star-line"></i>
                                </div>
                            </div>
                            <div class="productss__star">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-line"></i>
                                <p class="products__star__number">(3)</p>
                            </div>
                            <div class="products__money">
                                <p class="products__money__text">$${shopIndex.price}.00</p>
                                <p class="products__money__subtext">$${shopIndex.price}.00</p>
                                <button class="products__money__btn">Save <span>33%</span></button>
                            </div>
                            <div class="products__view">
                                <i class="ri-eye-line"></i>
                                <p class="products__view__text">24 people are viewing this right now</p>
                            </div>
                            <div class="products__discount">
                                <p class="products__discount__text">Hurry up! Sale ends in:</p>
                                <p class="products__discount__time"></p>
                            </div>
                            <div class="products__stock">
                                <div class="products__stock__text">Only 9 item(s) left in stock!</div>
                                <div class="products__stock__item">
                                    <div class="products__stock__itemBox"></div>
                                </div>
                            </div>
                            <div class="products__sizing">
                                <p class="products__sizing__text">Size: M</p>

                                <div class="products__sizing__main">
                                <button class="products__sizing__btn active">M</button>
                                <button class="products__sizing__btn">L</button>
                                <button class="products__sizing__btn">XL</button>
                                <button class="products__sizing__btn">XXL</button>
                                </div>
                            </div>
                            <div class="products__colors">
                                <p class="products__color__text">Color: Blue</p>

                                <div class="products__colors__main">
                                <button class="products__colors__box active" data-color="blue"></button>
                                <button class="products__colors__box" data-color="black"></button>
                                <button class="products__colors__box" data-color="pink"></button>
                                </div>
                            </div>
                            <div class="products__quantity">
                                <p class="products__quantity__text">Quantity</p>

                                <div class="products__quantity__main">
                                <div class="products__quantity__box">
                                        <button id="minus">-</button>
                                        <p id="number">1</p>
                                        <button id="plus">+</button>
                                </div>
                                <button class="products__quantity__item">Add to cart</button>
                                </div>
                            </div>
                            <div class="products__tools">
                                <div class="products__tools__item">
                                <i class="ri-arrow-up-down-line"></i>
                                <p>Compare</p>

                                </div>
                                <div class="products__tools__item">
                                <i class="ri-question-line"></i>
                                <p>Ask a question</p>
                                </div>
                                <div class="products__tools__item">
                                <i class="ri-stackshare-line"></i>
                                <p>Share</p>
                                </div>
                            </div>
                            <div class="products__info">
                                <div class="products__info__item">
                                <img src="./images/produckts-delivery.png" alt="icon">
                                <p>Estimated Delivery:</p>
                                <span>Jul 30 - Aug 03</span>
                                </div>
                                <div class="products__info__item">
                                <img src="./images/produckts-free-shopping.png" alt="icon">
                                <p>Free Shipping & Returns:</p>
                                <span>On all orders over $75</span>
                                </div>
                            </div>
                            <div class="products__company">
                                <img src="./images/products-company-img.png" alt="img">
                                <p class="products__company__text">Guarantee safe & secure checkout</p>
                            </div>
                        </div>
    `
    }
}


function openProduct(index) {
    const shopIndex = shopArr[index]
    productArr.push(shopIndex);
    goProduct()
}