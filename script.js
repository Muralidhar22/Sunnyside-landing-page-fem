const menu = document.querySelector(".hamburger-menu__icon");
const navBar = document.querySelector(".nav-bar__mobile")
console.log(menu)
console.log(navBar.style.display === "none")
menu.addEventListener("click",displayMenu)
function displayMenu() {
    
    console.log(x)
    if (x.style.display !== "none") {
      x.classList.add("dsply-none")
    } else {
      x.classList.remove("dsply-none");
    }
  }