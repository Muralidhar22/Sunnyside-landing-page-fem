const menu = document.querySelector(".hamburger-menu__icon");
const navMenu = document.querySelector(".nav-bar__mobile")

menu.addEventListener("click",displayMenu)


function displayMenu() {
  let navbar = getComputedStyle(navMenu)
  if(navbar.display === "none"){
    navMenu.classList.remove("dsply-none")
  }
  else{
    navMenu.classList.add("dsply-none")
  }
}