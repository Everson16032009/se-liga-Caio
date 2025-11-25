document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formNoticia");
    const lista = document.getElementById("listaNoticias");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let titulo = document.getElementById("titulo").value;
        let categoria = document.getElementById("categoria").value;
        let texto = document.getElementById("texto").value;

        let box = document.createElement("div");
        box.innerHTML = `
            <h3>${titulo}</h3>
            <small>${categoria}</small>
            <p>${texto}</p>
            <hr>
        `;

        lista.appendChild(box);

        form.reset();
    });
});
