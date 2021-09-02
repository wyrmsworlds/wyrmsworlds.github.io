$(document).ready(function () {

    $(window).on("resize", function (e) {
        checkScreenSize();
    });



    function navig() {
        const nav = document.querySelector(`.nav`);
        const navs = document.querySelector(`.navs`)
        const navList = document.querySelectorAll(`.navList`);
        const menus = document.querySelectorAll(`.menu`);

        let h = nav.clientHeight;
        let bg = document.querySelector(".bg");

        checkScreenSize();
        function checkScreenSize() {
            var newWindowWidth = $(window).width();
            if (newWindowWidth < 481) {
                nav.style.fontSize = `${h / 24}px`;
                window.addEventListener(`resize`, () => {
                    let h = nav.clientHeight;
                    nav.style.fontSize = `${h / 24}px`;
                });
            }
            else {
                nav.style.fontSize = `${h / 8}px`;
                window.addEventListener(`resize`, () => {
                    let h = nav.clientHeight;
                    nav.style.fontSize = `${h / 8}px`;
                });
            }
        }


        menus.forEach((menu) => {
            const list = menu.getAttribute("data-nav");
            let images = document.getElementById(list);

            menu.addEventListener(`click`, () => {
                navs.classList.remove(`navsActivated`);
                bg.classList.remove(`bgActivated`);
                images.classList.remove(`imagesActivated`);
                nav.classList.remove(`navActivated`);
            });
        });

        navList.forEach((navL) => {
            const list = navL.getAttribute("data-nav");
            let images = document.getElementById(list);

            navL.addEventListener(`mouseover`, () => {
                $('html, body').animate({
                    scrollTop: $(`#${list}`).offset().top
                }, 350);
            });

            navL.addEventListener(`click`, () => {
                navs.classList.add(`navsActivated`);
                bg.classList.add(`bgActivated`);
                images.classList.add(`imagesActivated`);
                nav.classList.add(`navActivated`);
            });
        });
    }

    navig();

});
