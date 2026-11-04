
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
