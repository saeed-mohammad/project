$(document).ready(function () {
  // search button
  $(".search-form i").click(function () {
    $(".search-form .search").fadeToggle(400);
  });
  //   dorpdown
  $(".menu").click(function () {
    $(this).find("nav").slideToggle("fast");
    $(".open").toggle();
    $(".close").toggle();
  });
  // close event
  $(document).on("click", function (event) {
    let $trigger = $(".menu");
    let $search = $(".search-form .search");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
      // console.log($trigger !== event.target);
      console.log(!$trigger.has(event.target).length);
      $("nav").slideUp("fast");
      $(".close").hide();
      $(".open").show();
    }
  });
});
