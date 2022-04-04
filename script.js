

// Shows slides with timer
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  
  x[myIndex-1].style.display = "block"; 
  setTimeout(carousel, 3000); // Change image every 2 seconds
}


// DarkMode
var togBtn = document.getElementById("toggle");
var isDarkmode = false;

function toggleDarkmode() {
  var body = document.body;

  body.classList.toggle("darkMode");
  if (isDarkmode == false) {
    isDarkmode = true;
    alert("dark mode on");
    document.getElementById("table").style.color = "white";
  } else {
    alert("dark mode off");
    document.getElementById("table").style.color = "black";
    isDarkmode = false;
  }

}


// Mobile Sidebar
var nav = document.getElementById("sidebar");

function toggleNav() {
  if (nav.style.width != "250px") {
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