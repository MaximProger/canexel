$(document).ready(function () {
  var header = $("#header");
  var introH = $("#intro").innerHeight();
  var scrollOffset = $(window).scrollTop();

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
  });

  /* Smooth scroll */

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    $(".nav").removeClass("active");

    var $this = $(this),
      blockId = $this.data("scroll"),
      blockOffset = $(blockId).offset().top;

    $("html, body").animate(
      {
        scrollTop: blockOffset,
      },
      500
    );
  });

  // Burger menu
  $(".header__burger").on("click", function () {
    $(".nav").addClass("active");
  });

  $(".nav__burger").on("click", function () {
    $(".nav").removeClass("active");
  });

  // Gallery
  $(".houses__img").on("click", function () {
    $(".gallery__mask").addClass("active");
    $(".gallery__mask__img").attr("src", $(this).attr("src"));
  });

  $(".gallery__mask__close").on("click", function () {
    $(".gallery__mask").removeClass("active");
  });

  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      $(".gallery__mask").removeClass("active");
    }
  });

  // Cuurrent year in a footer
  $(".footer__year").text(new Date().getFullYear());
});

$(document).mouseup(function (e) {
  let modalctr = $(".gallery__mask");
  let modal = $(".gallery__mask__image__wrapper");
  if (!modal.is(e.target) && modal.has(e.target).length === 0) {
    modalctr.removeClass("active");
  }
});
