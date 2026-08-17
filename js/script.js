const heroSlides = document.querySelectorAll('.hero-bg');

let currentSlide = 0;


function changeSlide() {

    heroSlides[currentSlide].classList.remove('active');


    currentSlide++;


    if(currentSlide >= heroSlides.length){

        currentSlide = 0;

    }


    heroSlides[currentSlide].classList.add('active');

}


if(heroSlides.length > 0){

    setInterval(changeSlide,10000);

}


// =========================
// BURGER MENU
// =========================

const burger = document.querySelector('.burger');
const nav = document.querySelector('.header-right nav');


if(burger){

    burger.addEventListener('click', () => {

        nav.classList.toggle('active');
        burger.classList.toggle('active');

    });

}


// =========================
// CLOSE MOBILE MENU AFTER LINK CLICK
// =========================

const navLinks = document.querySelectorAll('.header-right nav a');


navLinks.forEach(link => {

    link.addEventListener('click', function(){

        if(window.innerWidth <= 768){

            const parent = this.closest('.menu-item');


            // если есть подменю — оставляем меню открытым
            if(parent && parent.querySelector('.submenu')){

                return;

            }


            nav.classList.remove('active');

            burger.classList.remove('active');


            document.querySelectorAll('.menu-item').forEach(item => {

                item.classList.remove('active');

            });

        }

    });

});


// =========================
// CLOSE MENU OUTSIDE CLICK
// =========================

document.addEventListener('click', (e) => {

    if(
        burger &&
        !burger.contains(e.target) &&
        !nav.contains(e.target)
    ){

        nav.classList.remove('active');

        burger.classList.remove('active');


        document.querySelectorAll('.menu-item').forEach(item => {

            item.classList.remove('active');

        });

    }

});


// =========================
// BURGER SUBMENU
// =========================

const menuToggles = document.querySelectorAll('.menu-toggle');


menuToggles.forEach(toggle => {

    toggle.addEventListener('click', function(e){

        e.preventDefault();

        e.stopPropagation();


        const parent = this.closest('.menu-item');


        if(!parent){

            return;

        }


        // закрываем все остальные
        document.querySelectorAll('.menu-item').forEach(item => {

            if(item !== parent){

                item.classList.remove('active');

            }

        });


        // открываем / закрываем текущий
        parent.classList.toggle('active');

    });

});


// =========================
// SPECIALISTS
// =========================

document.querySelectorAll(".specialist-more").forEach(button => {

    button.addEventListener("click", () => {

        const currentCard = button.closest(".specialist-card");


        document.querySelectorAll(".specialist-card").forEach(card => {

            if (card !== currentCard) {

                card.classList.remove("active");

                const otherButton = card.querySelector(".specialist-more");

                if (otherButton) {

                    otherButton.textContent = "Подробнее";

                }

            }

        });


        currentCard.classList.toggle("active");


        if (currentCard.classList.contains("active")) {

            button.textContent = "Скрыть";

        } else {

            button.textContent = "Подробнее";

        }

    });

});


// =========================
// КОПИРОВАНИЕ РЕКВИЗИТОВ
// =========================

const copyButton = document.querySelector('.copy-requisites');


if(copyButton){

    copyButton.addEventListener('click', function(){

        const requisites = document.querySelector('.donation-requisites').innerText;


        navigator.clipboard.writeText(requisites)
        .then(()=>{

            copyButton.innerText = "Скопировано ✓";


            setTimeout(()=>{

                copyButton.innerText = "Скопировать реквизиты";

            },2000);

        });

    });

}