$(document).ready(function () {
  //   Dropdown
  $(".menuIcon").click(function () {
    $(".dropDown").slideToggle();
    $(".menuLog").toggle();
    $(".menuLogCancel").toggle();
  });
  //   close dropdown on document click
  $(document).click(function (event) {
    if (
      $(".menuIcon") !== event.target &&
      !$(".menuIcon").has(event.target).length &&
      $(".searchImage") !== event.target &&
      !$(".searchImage").has(event.target).length
    ) {
      $(".dropDown").slideUp("fast");
      $(".menuLog").show();
      $(".menuLogCancel").hide();
      // search
      $(".searchImage").show();
      $(".searchForm").hide();
    }
  });
  //   search
  $(".searchImage").click(function () {
    $(this).hide();
    $(".searchForm").show();
  });
  //   Form
  $("#form").submit(function (event) {
    $(".reply").append("Thanks for subscribe");
    event.preventDefault();
  });
  //   slider for banner
  $(".slider").slick({
    autoplay: true,
    autoplayspeed: 3000,
    fade: true,
    speed: 1000,
    // dots: true,
  });

  if ($(".allCategories").width() < 769) {
    $(".categories").slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  }
});
