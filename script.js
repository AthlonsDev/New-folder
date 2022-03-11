// Navigation Bar Animation
window.onscroll = function () {
    scrolling()
};
const nav = document.getElementById("nav")
const logo = document.getElementById("logo")


function scrolling() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        nav.style.padding = "2px 2%";

    } else {
        nav.style.padding = "10px 2%";
    }
}

// Slideshow Controller
// Shows slides with timer
var sliderIndex = 0;
showSlides();



// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("slides");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none"; 
//     }
//     sliderIndex++;
//     if (sliderIndex > slides.length) {
//         sliderIndex = 1
//     }
//     slides[sliderIndex-1].style.display = "block"
//     setTimeout(showSlides, 3000);
// }

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    sliderIndex++;
    if (sliderIndex > slides.length) {
        sliderIndex = 1
    }
    slides[sliderIndex - 1].style.display = "block"
    setTimeout(showSlides, 3000);
}
/*
// Slideshow user controlled
// var slideIndex = 1;

// showSlides(slideIndex);

// // Next and Previous Controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// // Thumbnail Image COntrols
// function currentSilde(n) {
//     showSlides(slideIndex += n)
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("slides");
//     var dots = document.getElementsByClassName("dots");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
//   }
