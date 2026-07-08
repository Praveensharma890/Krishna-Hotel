const sections = document.querySelectorAll(".section");
const navs = document.querySelectorAll(".link");

window.addEventListener("scroll", (evt) => {
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
