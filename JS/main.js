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
    loading();
    try {
        let response = await fetch(`../HTML/${id}.html`);
        if (response.ok) {
            if (id === "home") {
                main.classList.add("centrar");
            } else {
                main.classList.remove("centrar");
            }
            let html = await response.text();
            main.innerHTML = html;
        } else {
            alert("Error al cargar el contenido");
        }
    } catch (error) {
        console.log(error);
        alert("Error de conexión");
    }
}

function loading() {
    main.classList.remove("centrar");
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
}
