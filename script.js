
// VEXORA - Interactive Website

document.addEventListener("DOMContentLoaded", () => {

  // Smooth navigation
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(event) {
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Reveal sections on scroll
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.15
  });

  sections.forEach(section => observer.observe(section));

  // Welcome message
  console.log("Welcome to VEXORA - Created by Raju Chauhan");

});

// VEXORA Animated Background Particles

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

function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = window.innerWidth * ratio;
  canvas.height = window.innerHeight * ratio;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  particles = Array.from({ length: 65 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 2 + 0.7,
    speed: Math.random() * 0.5 + 0.15
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
    ctx.fillStyle = "rgba(0, 190, 255, 0.8)";
    ctx.shadowBlur = 12;
    ctx.shadowColor = "#00aaff";
    ctx.fill();
  });

  requestAnimationFrame(animateParticles);
}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();
animateParticles();
