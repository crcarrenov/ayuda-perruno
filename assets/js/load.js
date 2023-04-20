function loadData() {
    const url = "https://mindicador.cl/api";
    /* INVOCACIÓN DATA JSON */
    const resp = fetch(url)
        .then((response) => {
            /* VALIDACIÓN RESPUESTA RECURSO */
            if (response.ok) {
                console.log("response.text: ", response.text);
                return response.text();
            } else {
                console.log("response.status: ", response.status);
                throw new Error(response.status);
            }
        })
        .then((data) => {
            /* LECTURA DE LA DATA JSON*/
            console.log("Datos: ", data);
            const objJson = JSON.parse(data);
            var cards = '';
            for (i = 0; i < objJson.length; i++) {
                console.log("________________________");
                console.log("codigo: ", objJson[i].codigo);
                console.log("titulo: ", objJson[i].titulo);
                console.log("imagen: ", objJson[i].imagen);
                console.log("titulo: ", objJson[i].descripcion);

                cards = `   ${cards}
                            <div class="col-sm">
                                <div id="card-${objJson[i].codigo}" class="card my-4" style="width: 18rem">
                                    <img src="${objJson[i].imagen}" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">${objJson[i].titulo}</h5>
                                        <p class="card-text">
                                            ${objJson[i].descripcion}
                                        </p>
                                        <a href="#" class="btn btn-primary">ADD</a>
                                    </div>
                                </div>
                            </div>                                 
                        `;
            }
            // OBTENCIÓN DE LA ETIQUETA MEDIANTE JAVASCRIPT
            var cardsHTML = document.getElementById("cards");
            // SOBREESCRIBIR TAG CARDS. CON INFORMACIÓN GENERADA
            // EN EL CICLO FOR, MEDIANTE LA LECTURA DE UN DATA.JSON.
            cardsHTML.innerHTML = cards;
        })
        .catch((err) => {
            /* CAPTURA DE ERRORES */
            console.error("ERROR: ", err.message);
        });
}

loadData();
