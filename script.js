window.addEventListener("load", () =>
  document.querySelector(".preloader").classList.add("hidepreloader")
);

let totop = document.querySelector(".topicon");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    totop.classList.add("topicon-active");
  } else totop.classList.remove("topicon-active");
});
