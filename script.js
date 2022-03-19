const menu = document.querySelector(".hamburger-menu__icon");

menu.addEventListener('click',myFunction)
function myFunction() {
    const x = document.querySelector(".nav-bar__mobile")
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }