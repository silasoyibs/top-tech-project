"use strict";
// Sticky Header
class Home {
  constructor() {
    this.init();
  }
  init() {
    this.stickyHeader();
    this.menuToggler();
    this.activeMenuLink();
    this.toggleFaq();
  }

  stickyHeader() {
    const header = document.querySelector("header");
    const scrollThreshold = 100;

    window.addEventListener("scroll", () => {
      window.scrollY > scrollThreshold
        ? header.classList.add("sticky")
        : header.classList.remove("sticky");
    });
  }

  // mobile menu toggler
  menuToggler() {
    const navToggler = document.querySelector(".navbar-toggler");

    const navMenu = document.querySelector(".header.mobile");
    navToggler.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  // active link on scroll
  activeMenuLink() {
    const navLinks = document.querySelectorAll(".nav-link");
    const section = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
      let currentSection = "";
      // current section
      section.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY;
        if (scrollPosition >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        // remove activeLink state from all links
        link.classList.remove("active");
        // only add activeLink if any of the link mactches the id of the current section in view
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
        }
      });
    });
  }
  //

  // Toggle Faq
  toggleFaq() {
    const faqItem = document.querySelectorAll(".faq-item");
    const icon = document.querySelectorAll(".faq-item i");

    faqItem.forEach((item) => {
      item.classList.remove("open");
    });

    faqItem.forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.toggle("open");
        const icon = item.querySelector("i");
        if (item.classList.contains("open")) {
          icon.classList.remove("fa-plus");
          icon.classList.add("fa-minus");
        } else {
          icon.classList.remove("fa-minus");
          icon.classList.add("fa-plus");
        }
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const home = new Home();
});
