let btnNavEl = document.querySelector(".btn-mobile-nav");
let headerEl = document.querySelector("#header-nav");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

let navLinks = document.querySelectorAll(".main-nav-link");
let headerNav = document.getElementById("header-nav");
function closeModal() {
  headerNav.classList.remove("nav-open");
}
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    closeModal();
  })
}

let heroSection = document.querySelector(".section-homepage");
let header = document.getElementById("header-nav");


let heroSectionHeight = heroSection.getBoundingClientRect().height;
console.log(heroSectionHeight);

function stickyheader() {
    if (window.scrollY > heroSectionHeight) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}
window.addEventListener('scroll', stickyheader);
