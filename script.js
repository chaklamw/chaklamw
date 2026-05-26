const header = document.querySelector("header");
const main = document.querySelector("main");

function updateHeaderSpacing() {
    main.style.paddingTop = `${header.offsetHeight}px`;
}

updateHeaderSpacing();
window.addEventListener("resize", updateHeaderSpacing);