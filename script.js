const header = document.querySelector("header");
const main = document.querySelector("main");

function updateHeaderSpacing() {
    main.style.paddingTop = `${header.offsetHeight}px`;
}

updateHeaderSpacing();
window.addEventListener("resize", updateHeaderSpacing);

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        header.classList.add("header-hidden");
    } else {
        header.classList.remove("header-hidden");
    }

    lastScrollY = currentScrollY;
});