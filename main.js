const menu = document.getElementById("menu");
const navBar = document.querySelector("nav");
const closeMenu = document.getElementById("menu-close")

menu.addEventListener("click", () => {
    navBar.classList.add("open");
});

closeMenu.addEventListener("click", () => {
    navBar.classList.remove("open");
})