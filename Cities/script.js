var cover = document.getElementById("cover");
var pageTitle = document.getElementById("title");
var bookBtn = document.getElementById("book");
var historyImg = document.getElementById("historyImg");

if (document.title == "Cagliari") {

    cover.style.backgroundImage = "url('../images/Cagliari_2.jpg')";

}
if (document.title == "Alghero") {

    cover.style.backgroundImage = "url('../images/Alghero_2.jpg')";

}
if (document.title == "Nuoro") {

    cover.style.backgroundImage = "url('../images/Nuoro_1.jpg')";
    historyImg.style.marginTop = "-30%";
    bookBtn.style.marginLeft = "44%";


}
if (document.title == "Maddalena") {

    cover.style.backgroundImage = "url('../images/Maddalena_1.jpg')";
    title.style.marginLeft = "30%";
    bookBtn.style.marginLeft = "40%";

}




function showMoreText() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var showBtn = document.getElementById("show");

    if (dots.style.display === "none") {

        dots.style.display = "block";
        showBtn.innerHTML = "Read More";
        more.style.display = "none";

    } else {
        dots.style.display = "none";
        showBtn.innerHTML = "Read less";
        more.style.display = "block";
    }
}