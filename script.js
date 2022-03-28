// Navigation Bar Animation
// window.onscroll = function () {
//     scrolling()
// };

// var booking = document.getElementById("book");
// const logo = document.getElementById("logo");


// function scrolling() {
//     if (document.body.scrollTop > 900) {
//         booking.style.top = 2000;

//     } else {
//       booking.style.top = 900;
//     }
// }



//Slideshow user controlled
const buttons = document.querySelectorAll("[dataButton]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[dataContainer]")
      .querySelector("[dataSlides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})


// DarkMode
var togBtn = document.getElementById("toggle");


function toggleDarkmode() {
  var body = document.body;
  body.classList.toggle("darkMode");
}


var bookBtn = document.getElementById("bookBtn");
var cities = document.getElementById("cities");

if (cities.nodeValue == "Alghero") {
  bookBtn.action = "cities/Alghero.html"
}

// Validate Form 
function validateForm(form) {

  if (form.name.value == "") {
    alert("Invalid Entry");
    document.getElementById("name").style.border = "1";
    document.getElementById("name").style.borderColor = "Red";

  }
  
  
}