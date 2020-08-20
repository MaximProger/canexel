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
});
