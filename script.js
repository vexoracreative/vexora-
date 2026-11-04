
// VEXORA - Interactive Experience
document.addEventListener("DOMContentLoaded", () => {

  // Smooth navigation
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const target = document.querySelector(
        link.getAttribute("href")
      );

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Scroll reveal animation
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.12
  });

  sections.forEach(section => {
    observer.observe(section);
  });

  // Active navigation highlight
  const navLinks = document.querySelectorAll(".nav-links a");

  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + entry.target.id
          );
        });
      }
    });
  }, {
    threshold: 0.45
  });

  sections.forEach(section => {
    navObserver.observe(section);
  });

  // Automatic copyright year
  const footer = document.querySelector("footer");
  if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = footer.innerHTML.replace(
      /© \d{4}/,
      "© " + year
    );
  }

  console.log("VEXORA | Created by Raju Chauhan");
});


// FUTURISTIC PARTICLE BACKGROUND
const canvas = document.createElement("canvas");
canvas.id = "vexora-particles";

Object.assign(canvas.style, {
  position: "fixed",
  inset: "0",
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  zIndex: "-1"
});

document.body.prepend(canvas);

const ctx = canvas.getContext("2d");
let particles = [];
let animationFrame;

function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);

  canvas.width = window.innerWidth * ratio;
  canvas.height = window.innerHeight * ratio;

  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  const count = window.innerWidth < 600 ? 30 : 65;

  particles = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 2 + 0.6,
    speed: Math.random() * 0.45 + 0.12,
    opacity: Math.random() * 0.6 + 0.2
  }));
}

function animateParticles() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  particles.forEach(p => {
    p.y -= p.speed;

    if (p.y < 0) {
      p.y = window.innerHeight;
      p.x = Math.random() * window.innerWidth;
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

    ctx.fillStyle = `rgba(0, 205, 255, ${p.opacity})`;
    ctx.shadowBlur = 12;
    ctx.shadowColor = "#00aaff";
    ctx.fill();
  });

  animationFrame = requestAnimationFrame(animateParticles);
}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();
animateParticles();

// VEXORA TYPING ANIMATION

const typingElement = document.getElementById("typing-text");

const words = [
  "I'm a Student",
  "I'm a Dreamer",
  "I'm an Explorer",
  "I'm Building My Future"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  typingElement.textContent = currentWord.substring(0, charIndex);

  if (!deleting) {
    charIndex++;

    if (charIndex > currentWord.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    charIndex--;

    if (charIndex < 0) {
      deleting = false;
      charIndex = 0;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}

if (typingElement) {
  typeEffect();
}

if (typingElement) {
  const words = ["STUDENT", "DREAMER", "CREATOR", "EXPLORER"];
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];

    if (!deleting) {
      typingElement.textContent =
        currentWord.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentWord.length) {
        deleting = true;
        setTimeout(typeEffect, 1200);
        return;
      }
    } else {
      typingElement.textContent =
        currentWord.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    setTimeout(typeEffect, deleting ? 65 : 110);
  }

  typeEffect();
}
// VEXORA 3D PLANET INTERACTION

const planet = document.querySelector(".planet");
const container = document.querySelector(".planet-container");

if (planet && container) {
  container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    planet.style.transform =
      `translateY(-8px) rotateX(${-y * 25}deg) rotateY(${x * 25}deg)`;
  });

  container.addEventListener("mouseleave", () => {
    planet.style.transform = "";
  });
}
