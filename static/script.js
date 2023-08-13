const menuIcon = document.getElementById("menu-icon");
const navigateList = document.querySelector(".navigateList");

menuIcon.addEventListener("click", () => {
  navigateList.classList.toggle("open");
});

const backToTopButton = document.querySelector(".back-to-top");

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTopButton.classList.add("active");
  } else {
    backToTopButton.classList.remove("active");
  }
});
