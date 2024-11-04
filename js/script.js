// Script for back to top button
let topButton = document.getElementById("back-to-top");

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        topButton.style.display = "block";
        topButton.style.transition = "1.25s"
    } else {
        topButton.style.display = "none";
    }
}
function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Script for hamburger menu
let mobileNav = document.getElementById("mobileNav");
let mobileNavIcon = document.getElementById("mobileNavIcon");

mobileNavIcon.onclick = function() {
    mobileNav.classList.toggle("open-menu");

    if(mobileNav.classList.contains("open-menu")){
        mobileNavIcon.src = "images/TM_mobileNavIcon-close.png";
        mobileNavIcon.style.position = "fixed";
    }
    else {
        mobileNavIcon.src = "images/TM_mobileNavIcon.png";
    }
}