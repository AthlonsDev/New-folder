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

var togBtn = document.getElementById("toggle");
var isDarkmode = false;

function toggleDarkmode() {
  var body = document.body;
  var items = document.getElementsByClassName("grid-item");

  body.classList.toggle("darkMode");
  if (isDarkmode == false) {

    isDarkmode = true;
    alert("dark mode on");
    for (let i = 0; i < items.length; i++) {
      items[i].style.backgroundColor = "#330000";
    }

  } else {

    alert("dark mode off");
    for (let i = 0; i < items.length; i++) {
      items[i].style.backgroundColor = "#ffcccc";
    }
    isDarkmode = false;
  }

}