document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formNoticia");
    const lista = document.getElementById("listaNoticias");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let titulo = document.getElementById("titulo").value;
        let categoria = document.getElementById("categoria").value;
        let texto = document.getElementById("texto").value;

        let item = document.createElement("div");
        item.classList.add("card-noticia");
        item.innerHTML = `
            <h3>${titulo}</h3>
            <small>${categoria}</small>
            <p>${texto}</p>
        `;

        lista.appendChild(item);
        form.reset();
    });
});
