const menu = document.querySelector(".ham");
const list = document.querySelector(".menu ul");
const body = document.querySelector("body");

menu.addEventListener("click", function () {
  list.classList.toggle("active");
  //   console.log("sd");
});

$(document).ready(function () {
  $(document).on("click", function (e) {
    let $trigger = $(".ham");
    if ($trigger !== e.target && !$trigger.has(e.target).length) {
      $(".menu ul").removeClass("active");
    }
  });
});
