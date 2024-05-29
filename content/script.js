const navigation = document.querySelector("#navigation");
const backToTopButton = document.querySelector("#backToTopButton");

window.addEventListener("scroll", onScroll);
onScroll();

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 200) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
  }