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

