const menu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-bar")

menu.addEventListener("click",displayMenu)


function displayMenu() {
  console.log(`clicked`)
  let navbar = getComputedStyle(navMenu)
  if(navbar.display === "none"){
    navMenu.classList.remove("dsply-none")
    console.log(`display was none`)
  }
  else{
    navMenu.classList.add("dsply-none")
    console.log(`display is set to none`)
  }
}