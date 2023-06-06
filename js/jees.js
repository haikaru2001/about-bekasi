const burger = document.querySelector(".burger");
const sidebar = document.querySelector(".sidebar");
const bgSidebar = document.querySelector(".bg-sidebar");

burger.addEventListener("click", function () {
  this.classList.toggle("change");
  sidebar.classList.toggle("change");
  bgSidebar.classList.toggle("change");
});

bgSidebar.addEventListener("click", function () {
  this.classList.remove("change");
  sidebar.classList.remove("change");
  burger.classList.remove("change");
});

// Slider
var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var index = 0;

function prevSlide(n) {
  index += n;
  changeSlide();
}

function nextSlide(n) {
  index += n;
  changeSlide();
}

function setSlide(n) {
  index = n;
  changeSlide();
}

changeSlide();

function changeSlide() {
  if (index > slides.length - 1) index = 0;

  if (index < 0) index = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

    dots[i].classList.remove("active");
  }

  slides[index].style.display = "block";
  dots[index].classList.add("active");
}
