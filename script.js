// MODAL
function openModal() {
  document.getElementById("modal").style.display = "flex";
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = 1;
      e.target.style.transform = "translateY(0)";
    }
  });
});

reveals.forEach(r => {
  r.style.opacity = 0;
  r.style.transform = "translateY(40px)";
  observer.observe(r);
});

// TABS
function switchTab(i) {
  const content = [
    "Highly available global infrastructure built for scale.",
    "CI/CD automation with zero manual effort.",
    "Zero-trust security & compliance."
  ];
  document.getElementById("tabContent").innerText = content[i];
}
