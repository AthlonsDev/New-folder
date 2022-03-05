window.onscroll = function() {scrolling()};
const nav = document.getElementById("nav")


function scrolling() {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
       nav.style.padding = "2px 2%";
    } 
    else{
        nav.style.padding = "10px 2%";
    }
}