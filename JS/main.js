"use strict";

let btnNav = document.querySelector("#btn-nav");
let navbar = document.querySelector("#menu");
btnNav.addEventListener("click", () => {
    navbar.classList.toggle("ocultar");
    btnNav.classList.toggle("bi-x-circle");
});

let main = document.querySelector("#main");
let mainCenter = document.querySelector("#main-center");
let links = document.querySelectorAll(".links");
for (let link of links) {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        let id = link.dataset.link;
        console.log(id);
        loadContent(id);
        switch (id) {
            case "home":
                console.log("home");
                break;
            case "catalogo":
                console.log("catalogo");
                break;
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadContent("home");
});

async function loadContent(id) {
    loading(1);
    let responseHome = await fetch(`../HTML/${id}.html`);
    if (responseHome.ok) {
        let homeHtml = await responseHome.text();
        mainCenter.innerHTML = homeHtml;
    }
}

function loading(main) {
    switch (main) {
        case 1:
            mainCenter.innerHTML = `
                <h5 class="card-title placeholder-glow">
                    <span class="placeholder col-6"></span>
                </h5>
            <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
            </p>
            <h5 class="card-title placeholder-glow">
                    <span class="placeholder col-6"></span>
                </h5>
            <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
                </p>`;
            break;
        case 2:
            main.innerHTML = `
                    <h5 class="card-title placeholder-glow">
                        <span class="placeholder col-6"></span>
                    </h5>
                <p class="card-text placeholder-glow">
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-6"></span>
                    <span class="placeholder col-8"></span>
                </p>
                <h5 class="card-title placeholder-glow">
                        <span class="placeholder col-6"></span>
                    </h5>
                <p class="card-text placeholder-glow">
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-6"></span>
                    <span class="placeholder col-8"></span>
                </p>`;
            break;
    }
}
