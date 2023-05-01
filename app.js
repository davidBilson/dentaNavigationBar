window.onscroll = function(){scrollFunction()};
const navBar = document.querySelector("#navbar")
const hamburger = document.querySelector(".hamburger");
const closeHamburger = document.querySelector(".close-hamburger");
const navList = document.querySelector(".nav-list");

function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        navBar.style.height = "80px";
        navList.style.top = "80px";
        navBar.style.background = "white";
    } else {
        navBar.style.height = "120px";
        navList.style.top = "120px";
        navList.style.transition = "none";
        navBar.style.background = "white";
    }
}

hamburger.addEventListener("click", function() {
    const displayMenu = () => {
        navList.style.display = "flex";
        hamburger.style.display = "none";
        closeHamburger.style.display = "block";
    };
    displayMenu();
});

closeHamburger.addEventListener("click", function() {
    const hideMenu = () => {
        navList.style.display = "none";
        hamburger.style.display = "block";
        closeHamburger.style.display = "none";
    }
    hideMenu();
});