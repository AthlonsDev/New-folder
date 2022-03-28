var cover = document.getElementById("cover");
var pageTitle = document.getElementById("title");
var bookBtn = document.getElementById("book");

if (document.title == "Beaches") {

    cover.style.backgroundImage = "url('../images/Maddalena_1.jpg')";

}
if (document.title == "Hiking") {

    cover.style.backgroundImage = "url('../images/Hiking_1.jpg')";

}
if (document.title == "Culture") {

    cover.style.backgroundImage = "url('../images/Murales_2.jpg')";
    historyImg.style.marginTop = "-30%";
    bookBtn.style.marginLeft = "44%";


}
if (document.title == "Events") {

    cover.style.backgroundImage = "url('../images/Events_2.jpg')";
    title.style.marginLeft = "30%";
    bookBtn.style.marginLeft = "40%";

}

// DarkMode
var togBtn = document.getElementById("toggle");


function toggleDarkmode() {
  var body = document.body;
  body.classList.toggle("darkMode");
}


