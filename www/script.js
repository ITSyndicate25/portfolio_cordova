import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCuhaU-8ZUeZyl1Ez8-J6bWrZLCyKZPDbw",
  authDomain: "cordova-midterm25.firebaseapp.com",
  databaseURL: "https://cordova-midterm25-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "cordova-midterm25",
  storageBucket: "cordova-midterm25.appspot.com",
  messagingSenderId: "834632998338",
  appId: "1:834632998338:web:b6532bc8a6be47641c4a5b",
  measurementId: "G-KZE9HVTRF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Add event listener to the form
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const name = event.target.name.value;
  const email = event.target.email.value;
  const messageContent = event.target.message.value;

  // Save the data to Firebase Realtime Database under 'contact' node
  const contactRef = ref(database, 'contact');
  const newContactRef = push(contactRef);
  push(newContactRef, {
    email: email,
    message: messageContent, // 'message' now contains the actual message content
    name: name
  }).then(() => {
    // Show success alert
    alert('Message Successfully Sent');
    // Optionally, reset the form
    event.target.reset();
  }).catch((error) => {
    // Handle errors here
    console.error("Error writing document: ", error);
  });
});


/* Nav bar menu */
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

/* Scroll Reveal */
ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration: 1800,
  delay: 180
});

/* Nav bar menu */
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

/* Scroll Reveal */
ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration: 1800,
  delay: 180
});