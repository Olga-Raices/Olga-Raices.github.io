"use strict";

let btnNav = document.querySelector("#btn-nav");
let navbar = document.querySelector("#menu");
btnNav.addEventListener("click", () => {
    navbar.classList.toggle("ocultar");
    btnNav.classList.toggle("bi-x-circle");
});

let main = document.querySelector("#main");
let links = document.querySelectorAll(".links");
for (let link of links) {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        let id = link.dataset.link;
        console.log(id);
        switch (id) {
            case "home":
                loadHome();
                break;
        }
    });
}

document.addEventListener("DOMContentLoaded", loadHome);
async function loadHome() {
    let responseHome = await fetch("../HTML/home.html");
    if (responseHome.ok) {
        let homeHtml = await responseHome.text();
        console.log(homeHtml);
    }
}
