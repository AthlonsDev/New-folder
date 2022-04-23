
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDaJhDweieYNTTIr6-Vx_tbhgGNVTL0-iQ",
//   authDomain: "sardiniastaycation.firebaseapp.com",
//   projectId: "sardiniastaycation",
//   storageBucket: "sardiniastaycation.appspot.com",
//   messagingSenderId: "431408442648",
//   appId: "1:431408442648:web:185728753da7b1d37f826d",
//   measurementId: "G-P189DZ3VR4"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

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
  // x[i].style.opacity = 1;  
  // document.style.classList.fade();

  setTimeout(carousel, 3000); // Change image every 2 seconds
}


// Booking Bar to disappear when bottom of page is reached

document.onscroll = function() {
  if (window.innerHeight + window.scrollY + 400 >= document.body.clientHeight) {
    document.getElementById("bookingBar").style.display = "none";
  } else {
    document.getElementById("bookingBar").style.display = "block";
  }
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