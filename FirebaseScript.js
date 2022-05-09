// register User
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();


function register() {
    alert("Registering");
    var email = document.getElementById("email").nodeValue;
    var password = document.getElementById("password").nodeValue;

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
    });

}