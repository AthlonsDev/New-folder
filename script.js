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
  document.getElementById("table").style.color = "white";
}


// Mobile Sidebar
var nav =  document.getElementById("sidebar");


function toggleNav() {
  if(nav.style.width != "250px") {
    nav.style.width = "250px";
    document.getElementById("content").style.marginRight = "250px";
    document.getElementById("content").style.marginLeft = "-250px";
  } else {
    nav.style.width = "0px";
    document.getElementById("content").style.marginRight = "0px";
    document.getElementById("content").style.marginLeft = "0px";
  }
}


var bookBtn = document.getElementById("bookBtn");
var cities = document.getElementById("cities");

if (cities.nodeValue == "Alghero") {
  bookBtn.action = "cities/Alghero.html"
}

// Validate Form 
function validateForm(form) {

  if (form.name.value == "") {
    alert("Invalid Name");
    // document.getElementById("name").style.border = 1;
    // document.getElementById("name").style.borderColor = "Red";

  }

  if (form.Lname.value == "") {
    alert("Invalid Last Name");

  }

  if (form.Email.value == "") {
    alert("Invalid Email");

  }

  if (form.message.value == "") {
    alert("Invalid Message");

  }
  
  
}