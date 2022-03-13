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
// var sliderIndex = 0;
// showSlides();



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
//     slides[sliderIndex - 1].style.display = "block"
//     setTimeout(showSlides, 3000);
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
