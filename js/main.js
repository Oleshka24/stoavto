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