// Load from Hero Section on Refresh

// Smooth scroll to hero section on reload
window.onload = function () {
  document.getElementById("#profile").scrollIntoView({ behavior: "smooth", block: "start" });
};


// Hemburger Menu

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// TypeWriter Effect

const texts = [
  "Aspiring Data Analyst",
  "Software Developer",
  "Python Enthusiast!"
];
const typingElement = document.getElementById("typing");

let textIndex = 0; // Index of the current text in the array
let charIndex = 0; // Current character position in the text
let isDeleting = false;

function typeText() {
  const currentText = texts[textIndex];
  
  if (!isDeleting) {
      typingElement.innerHTML = currentText.substring(0, charIndex);
      charIndex++;

      if (charIndex > currentText.length) {
          isDeleting = true; // Start deleting after full text is typed
          setTimeout(typeText, 1000); // Pause before deleting
          return;
      }
  } else {
      typingElement.innerHTML = currentText.substring(0, charIndex);
      charIndex--;

      if (charIndex < 0) {
          isDeleting = false; // Move to the next text
          textIndex = (textIndex + 1) % texts.length; // Loop back to first text
      }
  }

  const speed = isDeleting ? 50 : 150;
  setTimeout(typeText, speed);
}
window.onload = typeText;



// Dark / light mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
}

btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });
}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });
}
