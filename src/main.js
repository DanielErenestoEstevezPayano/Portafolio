const menuOpen = document.getElementById("menuOpen")
const menuClose = document.getElementById("menuClose")

menuOpen.addEventListener("click", () => {
    navbar.classList.add("active")
});
menuClose.addEventListener("click", () => {
    navbar.classList.remove("active")
});