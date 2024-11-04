const heroSwiper = new Swiper(".swiper--hero", {
  // Optional parameters
  effect: "cube",
  direction: "vertical",
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  speed: 1000,
  effect: "cube",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// swiper testimonial

const testimonialSwiper = new Swiper(".swiper--testimonial", {
  // Optional parameters
  effect: "slider",
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1000,
  effect: "slider",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
