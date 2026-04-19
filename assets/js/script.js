// Script de base pour le site
console.log('JS chargé avec succès !');

// Sélection des éléments
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const topBar = document.querySelector(".top-bar");
const scrollProgress = document.getElementById("scrollProgress");

let lastScrollTop = 0;

// Click hamburger
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Scroll detection pour cacher le top-bar
window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 50) {
        topBar.classList.add("hidden");
    } else {
        topBar.classList.remove("hidden");
    }
});

// ===== HERO SLIDER =====

const slides = document.querySelector(".slides");
let slideIndex = 0;

function showSlides() {
  slideIndex++;
  if (slideIndex > 1) {
    slideIndex = 0;
  }
  slides.style.transform = "translateX(-" + (slideIndex * 100) + "%)";
}

// Fonction pour passer au slide suivant
function nextSlide() {
  slideIndex++;
  if (slideIndex > 1) {
    slideIndex = 0;
  }
  slides.style.transform = "translateX(-" + (slideIndex * 100) + "%)";
}

// Fonction pour passer au slide précédent
function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = 1;
  }
  slides.style.transform = "translateX(-" + (slideIndex * 100) + "%)";
}

// Défilement automatique toutes les 7 secondes
setInterval(showSlides, 7000);
