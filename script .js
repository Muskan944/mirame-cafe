// Mobile menu
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");

if (menuButton) {
    menuButton.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}


// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

            nav.classList.remove("active");
        }
    });
});


// Call button
const callButton = document.querySelector(".call-button");

if (callButton) {
    callButton.addEventListener("click", () => {
        window.location.href = "tel:+91XXXXXXXXXX";
    });
}


// Current year in footer
const year = document.querySelector(".copyright");

if (year) {
    year.innerHTML = `© ${new Date().getFullYear()} Miragema Cafe. All Rights Reserved.`;
}