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

var listItems = document.querySelectorAll(".footer, .content section");
var firstBox = document.querySelector("#work");
var secondBox = document.querySelector("#services");

function scrolling(e) {
    for (var i = 0; i < listItems.length; i++) {
        var listItem = listItems[i];

        if (isPartiallyVisible(listItem)) {
            listItem.classList.add("show_animations");
        }
    }
}

function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}