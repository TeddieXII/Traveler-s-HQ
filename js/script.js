// header
const header = document.querySelector("header")

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 60)
});

// randomised tips
const tips = [
      "Wear shoes with good grip.",
      "Stay hydrated during outdoor activities.",
      "Use reef-safe sunscreen.",
      "Always follow your guide.",
      "Double-check your gear.",
      "Start early to avoid the heat.",
      "Pack light but smart.",
      "Protect your electronics from water.",
      "Don't venture off marked paths.",
      "Respect nature and wildlife.",
      "Bring insect repellent.",
      "Listen to local safety advice.",
      "Avoid strong currents.",
      "Take breaks when needed.",
      "Know your limits."
];

const tipText = document.getElementById("tip-text");
const randomIndex = Math.floor(Math.random() * tips.length);
tipText.textContent = tips[randomIndex];

//toggle faqs
const buttons = document.querySelectorAll('.accordion button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        
        // Close all other accordions
        buttons.forEach(btn => {
            btn.setAttribute('aria-expanded', 'false');
            btn.nextElementSibling.style.maxHeight = null;
        });

        if (!expanded) {
            button.setAttribute('aria-expanded', 'true');
            const content = button.nextElementSibling;
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

//hamburger menu
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".nav-links");

menu.onclick = () => {
    menu.classList.toggle('bx-menu');
    navbar.classList.toggle("open");
};

//form validation
function validateForm(event) {
  const name = document.forms["contactForm"]["name"];
  const email = document.forms["contactForm"]["email"];
  const subject = document.forms["contactForm"]["subject"];
  const message = document.forms["contactForm"]["message"];

  if (!name || !email || !subject || !message) {
    alert("Please fill out all fields.");
    event.preventDefault();
    return false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    event.preventDefault();
    return false;
  }

  return true;
};