// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Simple fade-in animation on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".card, .grid span, section").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

// Contact Form Alert (optional)
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", () => {
    alert("Thank you! Your message has been sent.");
  });
}

// Optional: Back to Top Button
const backToTop = document.createElement("button");
backToTop.innerText = "↑";
backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.left = "20px";
backToTop.style.padding = "10px";
backToTop.style.borderRadius = "50%";
backToTop.style.border = "none";
backToTop.style.background = "#333";
backToTop.style.color = "#fff";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 400 ? "block" : "none";
});

backToTop.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
