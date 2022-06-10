$(function () {
  // ===================
  //Nav
  // ===================

  $(".categories").click(function () {
    $(".cat-list").slideToggle();
    $(this).toggleClass("rotate");
  });
  $(document).click(function (e) {
    if (!$(e.target).is(".cat-list")) {
      $(this).sildeDown();
    }
  });
  // search...
  let searchImg = $(".search-toggle");
  let searchbtn = $(".search-toggle-form");
  searchImg.on("click", function () {
    searchbtn.addClass("open");
    $(this).css("display", "none");
    searchbtn.css("display", "block");
  });

  // ===================
  // Populer product
  // ===================
  $(".catlist-E").click(function (e) {
    $(".tab-content").css("display", "none");
    $("#tab-1").css("display", "block");
    e.preventDefault();
  });
  $(".catlist-FA").click(function (e) {
    $(".tab-content").css("display", "none");
    $("#tab-2").css("display", "block");
    e.preventDefault();
  });
  $(".catlist-HA").click(function (e) {
    $(".tab-content").css("display", "none");
    $("#tab-3").css("display", "block");
    e.preventDefault();
  });
  $(".catlist-BN").click(function (e) {
    $(".tab-content").css("display", "none");
    $("#tab-4").css("display", "block");
    e.preventDefault();
  });
  $(".catlist-JW").click(function (e) {
    $(".tab-content").css("display", "none");
    $("#tab-5").css("display", "block");
    e.preventDefault();
  });

  // ===================
  // slider..
  // ===================
  $(".side-banner").slick({
    nextArrow:
      '<span class="b-rightbtn"><i class="fa-solid fa-angle-right"></i></span>',
    prevArrow:
      '<span class="b-leftbtn"><i class="fa-solid fa-angle-left"></i></span>',
  });
  $(".slide-tab").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow:
      '<button class="btn-left"><img src="image/cta-slider.png" alt="" /></button>',
    prevArrow:
      '<button class="btn-right"><img src="image/cta-slider.png" alt="" /></button>',
  });
});
