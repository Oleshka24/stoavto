//  NAVIGATION

var burger = $(".nav__burger");
var nav = $(".header__nav");
var navLink = $(".nav__link");

burger.click(function() {
    if (nav.hasClass("header__nav--show")) {
        nav.addClass("header__nav--hide");
        nav.removeClass("header__nav--show");

        $(this).addClass("nav__burger--open");
        $(this).removeClass("nav__burger--close");
    }
    else {
        nav.addClass("header__nav--show");
        nav.removeClass("header__nav--hide");

        $(this).addClass("nav__burger--close");
        $(this).removeClass("nav__burger--open");
    }
});

navLink.click(function() {
    nav.addClass("header__nav--hide");
    nav.removeClass("header__nav--show");

    burger.addClass("nav__burger--open");
    burger.removeClass("nav__burger--close");
});

//  SCROLL ANIMATIONS

var isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (isScrolling == false) {
    window.requestAnimationFrame(function() {
        scrolling(e);
        isScrolling = false;
    });
    }
    isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

var listItems = document.querySelectorAll(".content > section");
var listNavItems = document.querySelectorAll(".nav__item");
var listItemsAnimation = document.querySelectorAll(".banner__top, .banner__title, .banner__networks, .why_are_we__item > *, .prices__title, .prices__subtitle, .table__img, .about__content, .contacts__container, .footer__link, .services__preview, .about__head, .prices__table, .services__content p:not(:last-child), .about__body, .about__description, .work__title, .why_are_we__title, .why_are_we__item .preview__img, .pattern__img, .about__title, .services__btn, .services__title");

function scrolling(e) {
    var i;
    var listItem;

    for (i = 0; i < listItems.length; i++) {
        listItem = listItems[i];

        if (isPartiallyVisible(listItem)) {
            listItem.classList.add("active");
        }
        else {
            listItem.classList.remove("active");
        }
    }

    for (i = 0; i < listItemsAnimation.length; i++) {
        listItem = listItemsAnimation[i];

        if (isPartiallyVisible(listItem)) {
            listItem.classList.add("show_animations");
        }
    }

    if ($(window).width() <= 1100)
        for (i = 0; i < listItems.length; i++) {
            listItem = listItems[i];

            if (listItem.classList.contains("active")) {
                for (var j = listNavItems.length - 1; j >= 0; j--)
                    if (listNavItems[j].children[0].getAttribute("href") == "#" + listItems[i].getAttribute("id")) {
                        $(".nav__item").removeClass("nav__item--active");
                        listNavItems[j].classList.add("nav__item--active");
                        break;
                    }
                break;
            }
        }

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $(".scroll_up__btn").css("opacity", "1");
    } else {
        $(".scroll_up__btn").css("opacity", "0");
    }
}

function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top - ($(window).width() >= 1100 ? 0 : 105);
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

//  Плавный переход к якорям

$('a[href^="#"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top - ($(window).width() >= 1100 ? 64 : 104) }, 800);
    return false;
});

//  To top

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//  Paralax
var bgImg = document.querySelector(".bg__img");
new simpleParallax(bgImg, {
    delay: 0.1,
	scale: 0.5,
    orientation: "up",
});