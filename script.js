
function register() {
  // const auth = getAuth();
  
  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;

  alert("email " + email);
  //   Add validation for both


  // create user
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
    alert("User: " + user.userCredential);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    alert(errorMessage);
  });

}

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

  setTimeout(carousel, 3000); // Change image every 3 seconds
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


// Profile View
var pro = document.getElementById("profileSide");
function toggleProfile() {
  if (pro.style.width != "250px") {
    pro.style.width = "250px";
    document.getElementById("content").style.marginRight = "250px";
    document.getElementById("content").style.marginLeft = "-250px";
  } else {
    pro.style.width = "0px";
    document.getElementById("content").style.marginRight = "0px";
    document.getElementById("content").style.marginLeft = "0px";
  }
}

function openRegistration() {
  // alert("register clicked");
  var register = document.getElementById("registerInput");
  if (register.style.display == "none") {
    register.style.display = "block";
  } else {
    register.style.display = "none";
  }
}
function openLogin() {
  var login = document.getElementById("loginInput");
  if (login.style.display == "none") {
    login.style.display = "block";
  } else {
    login.style.display = "none";
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