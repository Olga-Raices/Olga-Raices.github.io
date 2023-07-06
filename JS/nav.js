let btnNav = document.querySelector("#btn-nav");
let navbar = document.querySelector("#menu");
btnNav.addEventListener("click", () => {
    navbar.classList.toggle("ocultar");
    btnNav.classList.toggle("bi-x-circle");
});
