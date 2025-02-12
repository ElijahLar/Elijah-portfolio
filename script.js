document.addEventListener("DOMContentLoaded", function () {
    const text = document.querySelector(".wave-text");
    text.innerHTML = text.textContent
        .split("")
        .map((char, i) => `<span style="--i:${i}">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join("");

    const header = document.querySelector(".header");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav ul");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
});
