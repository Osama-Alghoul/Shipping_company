let navMenuIcon = document.querySelector("header .hamburger-menu");
let navMenu = document.querySelector("header .topnav")

navMenuIcon.onclick = function () {
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "flex";
    }
};