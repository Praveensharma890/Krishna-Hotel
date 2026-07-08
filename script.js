const sections = document.querySelectorAll(".section");
const navs = document.querySelectorAll(".link");
const header = document.querySelector(".header");

window.addEventListener("scroll", (evt) => {
  //  for box shadow
  if (window.scrollY > 480) {
    console.log(window.scrollY);
    header.classList.add("header-shadow");
  } else {
    header.classList.remove("header-shadow");
  }

  // for nav links highlight
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.id;
    }
  });

  navs.forEach((link) => {
    link.classList.remove("open");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("open");
    }
  });
});
