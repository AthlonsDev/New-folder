
function showMoreText() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var showBtn = document.getElementById("show");

    if (dots.style.display === "none") {

        dots.style.display = "block";
        showBtn.innerHTML = "Read More";
        more.style.display = "none";

    }
    else {
        dots.style.display = "none";
        showBtn.innerHTML = "Read less";
        more.style.display = "block";
    }
}
