// Slideshow Controller
// Shows slides with timer
var sliderIndex = 0;
showSlides();



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
    slides[sliderIndex-1].style.display = "block"
    setTimeout(showSlides, 3000);
}