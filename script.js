document.addEventListener("DOMContentLoaded", () => {
// Select elements
const toggleBtn = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

// 1. Toggle menu
toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// 2. Close menu when clicking any link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    toggleBtn.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

const links = document.querySelectorAll(".nav-menu a");

// Get current page file name
const currentPage = window.location.pathname.split("/").pop();

links.forEach((link) => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

  // 4. Reveal Animation Logic (for all sections)
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Apply reveal to sections
  document.querySelectorAll("section").forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease-out";
    observer.observe(section);
  });
});
