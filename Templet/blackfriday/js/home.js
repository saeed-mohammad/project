$(function () {
  // ===================
  //Nav
  // ===================
  let $categories = $(".categories");
  let $catList = $(".categories").find(".cat-list");
  let $catList_i = $(".categories").find(".cat-i i");

  $categories.click(function () {
    $catList.slideToggle();
    $(this).toggleClass("rotate");
  });
  // search...
  let searchImg = $(".search-toggle");
  let searchbtn = $(".search-toggle-form");
  searchImg.on("click", function () {
    searchbtn.addClass("open");
    $(this).css("display", "none");
    searchbtn.css("display", "block");
  });
});
