const textos = document.querySelectorAll(".texto");
const secciones = document.querySelectorAll(".seccion");
const papelera = document.querySelector("button");
const hola = "saludo";

textos.forEach(texto => {
    texto.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando el texto: " + texto.innerText);
        texto.classList.add("dragging");
        event.dataTransfer.setData("id", texto.id);
        console.log("dragstart", texto.innerText);
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })
    texto.addEventListener("dragend", () => {
         texto.classList.remove("dragging");
         console.log("dragend");
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy"
        console.log("dragover");
    })
    seccion.addEventListener("drop", event => {
        const id_texto = event.dataTransfer.getData("id");
        const texto = document.getElementById(id_texto);
        seccion.appendChild(texto);
        console.log("drop");
    })

papelera.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
})

papelera.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
})
