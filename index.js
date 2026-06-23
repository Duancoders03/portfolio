/**
 * Trương Văn Duẩn Portfolio Script Controller
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initializations
  initMobileNav();
  initScrollHeader();
  initActiveNavLinks();
  initTypingAnimation();
  initParticleCanvas();
  initContactForm();
  initScrollReveal();
  initHeroVideo();
});

/**
 * Mobile Navigation Toggle Handler
 */
function initMobileNav() {
  const navToggle = document.querySelector(".mobile-nav-toggle");
  const nav = document.querySelector("#primary-navigation");
  const navLinks = document.querySelectorAll(".nav-link");
  const header = document.querySelector(".header");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", !expanded);
      nav.classList.toggle("open");
      navToggle.classList.toggle("active");
      if (header) {
        header.classList.toggle("nav-open");
      }
    });

    // Close nav when clicking a link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
        if (header) {
          header.classList.remove("nav-open");
        }
      });
    });
  }
}

/**
 * Header Scrolled Shadow/Style Effect
 */
function initScrollHeader() {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

/**
 * Scroll to Active Navigation Link Synchronization
 */
function initActiveNavLinks() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      // Subtract header height (~80px) for better threshold accuracy
      if (window.scrollY >= sectionTop - 120) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

/**
 * Hero Typing Text Effect
 */
function initTypingAnimation() {
  const targetElement = document.querySelector(".typing-text");
  if (!targetElement) return;

  const roles = ["Backend Developer", "Node.js Developer"];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      targetElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50; // Deleting is faster
    } else {
      targetElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 120; // Typing speed
    }

    // State machine logic
    if (!isDeleting && charIndex === currentRole.length) {
      // Finished typing, pause
      isDeleting = true;
      typingSpeed = 2000; // Pause at full string
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting, move to next role
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 500; // Small pause before next string
    }

    setTimeout(type, typingSpeed);
  }

  // Begin loop
  setTimeout(type, 1000);
}

/**
 * Constellation Particle Canvas Effect
 */
function initParticleCanvas() {
  const canvas = document.getElementById("particleCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  // Particle Array
  const particles = [];
  const maxParticles = Math.min(80, Math.floor((width * height) / 15000)); // Performance scale
  const connectionDistance = 120;

  // Mouse Object
  const mouse = {
    x: null,
    y: null,
    radius: 150,
  };

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Particle Constructor Class
  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      // Velocity - very slow and smooth
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 2 + 1;
      // Palette matches CSS variables (Indigo and Purple accents)
      this.color =
        Math.random() > 0.5
          ? "rgba(79, 70, 229, 0.7)"
          : "rgba(139, 92, 246, 0.7)";
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Bounce on boundaries
      if (this.x < 0 || this.x > width) this.vx = -this.vx;
      if (this.y < 0 || this.y > height) this.vy = -this.vy;

      // Interact with mouse cursor
      if (mouse.x !== null && mouse.y !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          // Push particles away slightly
          this.x += (dx / dist) * force * 1.2;
          this.y += (dy / dist) * force * 1.2;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 6;
      ctx.shadowColor =
        this.color === "rgba(79, 70, 229, 0.7)" ? "#4f46e5" : "#8b5cf6";
      ctx.fill();
      ctx.shadowBlur = 0; // Reset blur for lines
    }
  }

  // Populate particles
  for (let i = 0; i < maxParticles; i++) {
    particles.push(new Particle());
  }

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Update & draw particles
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < connectionDistance) {
          // Opacity fades out with distance
          const alpha = (1 - dist / connectionDistance) * 0.15;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          // Draw lines - Indigo connection lines
          ctx.strokeStyle = `rgba(79, 70, 229, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/**
 * Glassmorphic Contact Form Event Validation & Handler
 */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("formSuccess");

  if (form && successMsg) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Obtain values
      const name = document.getElementById("formName").value;
      const email = document.getElementById("formEmail").value;
      const message = document.getElementById("formMessage").value;

      // Form validation
      if (!name || !email || !message) {
        alert("Please fill in all contact information.");
        return;
      }

      // Simulate API Request
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.textContent = "Sending Message...";
      submitBtn.disabled = true;

      setTimeout(() => {
        // Fade out form and display success panel
        form.classList.add("hidden");
        successMsg.classList.remove("hidden");
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";

        // Clear fields
        form.reset();
      }, 1500);
    });
  }
}

/**
 * Scroll Reveal Animation Handler using Intersection Observer
 */
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal, .reveal-stagger");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // Animation runs once when element enters screen
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reveals.forEach((el) => {
    observer.observe(el);
  });
}

/**
 * Hero Background Video Autoplay Handler (Mobile & Low Power Mode optimization)
 */
function initHeroVideo() {
  const video = document.querySelector(".hero-video-bg");
  if (!video) return;

  // Ensure standard autoplay attributes are set programmatically as well
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;

  // Try playing immediately
  const playVideo = () => {
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Playback started successfully
          console.log("Hero video autoplay started successfully.");
        })
        .catch((error) => {
          console.warn("Autoplay was prevented by browser policies. Triggering fallback interaction listeners.", error);
          
          // Autoplay prevented (e.g., Low Power Mode). Setup one-time interaction listeners.
          const playOnInteraction = () => {
            video.play()
              .then(() => {
                // Remove listeners once playing successfully
                removeInteractionListeners();
              })
              .catch((err) => {
                console.error("Failed to play video even after interaction: ", err);
              });
          };

          const removeInteractionListeners = () => {
            document.removeEventListener("touchstart", playOnInteraction);
            document.removeEventListener("click", playOnInteraction);
            document.removeEventListener("scroll", playOnInteraction);
          };

          document.addEventListener("touchstart", playOnInteraction, { passive: true });
          document.addEventListener("click", playOnInteraction, { passive: true });
          document.addEventListener("scroll", playOnInteraction, { passive: true });
        });
    }
  };

  // Run play when loaded metadata or immediately if ready
  if (video.readyState >= 1) {
    playVideo();
  } else {
    video.addEventListener("loadedmetadata", playVideo);
  }
}
