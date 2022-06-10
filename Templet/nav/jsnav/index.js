// const hamburger = document.querySelector(".hamburger");
// function myfunction() {
//   let x = document.querySelector(".nav-link");
//   if (x.style.cssText == "transform:translateX(100%); overflow:hidden") {
//     x.style.cssText = "transform:translateX(0); overflow:visible";
//   } else {
//     x.style.cssText = "transform:translateX(100%); overflow:hidden";
//   }
// }
// hamburger.addEventListener("click", myfunction);
// =============================================
// hamburger
// =============================================
const mobile_nav = document.querySelector(".hamburger");
const nav_header = document.querySelector(".header");
function hamb() {
  nav_header.classList.toggle("active");
}
mobile_nav.addEventListener("click", hamb);
// =============================================
// Search...
// =============================================
const Search = document.querySelector(".search");
const input = document.getElementById("search");
const btn = document.querySelector(".btn");
function search_menu() {
  Search.classList.toggle("click_active");
}
btn.addEventListener("click", search_menu);
// =============================================
// IMAGE SLIDER....
// =============================================

const slider_container = document.querySelector(".slider-container");
const slider_image = document.querySelectorAll(".slider-container img");
// button...
const prevbtn = document.querySelector(".prev-btn");
const nextbtn = document.querySelector(".next-btn");

// counter...
let counter = 1;
let size = slider_image[0].clientWidth;
slider_container.style.transform = "translateX(" + -size * counter + "px)";

function next() {
  if (counter >= slider_image.length - 1) return;
  slider_container.style.transition = "transform 0.3s ease-in-out";
  counter++;
  slider_container.style.transform = "translateX(" + -size * counter + "px)";
}
nextbtn.addEventListener("click", next);

function previous() {
  if (counter <= 0) return;
  slider_container.style.transition = "transform 0.3s ease-in-out";
  counter--;
  slider_container.style.transform = "translateX(" + -size * counter + "px)";
}
prevbtn.addEventListener("click", previous);

function end() {
  if (slider_image[counter].id === "last-clone") {
    slider_container.style.transition = "none";
    console.log(slider_image.length);
    counter = slider_image.length - 2;
    slider_container.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (slider_image[counter].id === "first-clone") {
    slider_container.style.transition = "none";
    counter = slider_image.length - counter;
    slider_container.style.transform = "translateX(" + -size * counter + "px)";
  }
}
slider_container.addEventListener("transitionend", end);

//=========================================
// slider image 1.......
// ========================================

const carousalslide = document.querySelector(".carousal-slide");
const carousalimage = document.querySelectorAll(".carousal-slide img");

// button...
const bck = document.querySelector(".bck-btn");
const nxt = document.querySelector(".nxt-btn");

// index...
let index = 1;
let width = carousalimage[0].clientWidth;
carousalslide.style.transform = "translateX(" + -width * index + "px)";

function forward() {
  if (index >= carousalimage.length - 1) return;
  carousalslide.style.transition = "transform 0.5s linear";
  index++;
  carousalslide.style.transform = "translateX(" + -width * index + "px)";
}
nxt.addEventListener("click", forward);

function backward() {
  if (index <= 0) return;
  carousalslide.style.transition = "transform 0.5s linear";
  index--;
  carousalslide.style.transform = "translateX(" + -width * index + "px)";
}
bck.addEventListener("click", backward);

function end_tran() {
  if (carousalimage[index].id === "L_clone") {
    carousalslide.style.transition = "none";
    index = carousalimage.length - 2;
    carousalslide.style.transform = "translateX(" + -width * index + "px)";
  }
  if (carousalimage[index].id === "F_clone") {
    carousalslide.style.transition = "none";
    index = carousalimage.length - index;
    carousalslide.style.transform = "translateX(" + -width * index + "px)";
  }
}
carousalslide.addEventListener("transitionend", end_tran);

//=========================================
// CART.......
// ========================================

const alink1 = document.querySelector(".ahome");
const alink2 = document.querySelector(".book");
const alink3 = document.querySelector(".a-info");

const tabs = document.querySelectorAll(".cart-content");

alink1.addEventListener("click", function (e) {
  tabs[0].style.display = "block";
  tabs[1].style.display = "none";
  tabs[2].style.display = "none";

  alink1.classList.add("link-active");
  alink2.classList.remove("link-active");
  alink3.classList.remove("link-active");
  e.preventDefault();
});

alink2.addEventListener("click", function (e) {
  tabs[0].style.display = "none";
  tabs[1].style.display = "block";
  tabs[2].style.display = "none";

  alink1.classList.remove("link-active");
  alink2.classList.add("link-active");
  alink3.classList.remove("link-active");
  e.preventDefault();
});

alink3.addEventListener("click", function (e) {
  tabs[0].style.display = "none";
  tabs[1].style.display = "none";
  tabs[2].style.display = "block";

  alink1.classList.remove("link-active");
  alink2.classList.remove("link-active");
  alink3.classList.add("link-active");
  e.preventDefault();
});
