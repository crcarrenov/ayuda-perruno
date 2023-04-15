function loadData() {
    const url = "http://127.0.0.1:5501/assets/data.json";
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
            for (i = 0; i < objJson.length; i++) {
                console.log("________________________");
                console.log("codigo: ", objJson[i].codigo);
                console.log("titulo: ", objJson[i].titulo);
                console.log("imagen: ", objJson[i].imagen);
                console.log("titulo: ", objJson[i].descripcion);
            }
        })
        .catch((err) => {
            /* CAPTURA DE ERRORES */
            console.error("ERROR: ", err.message);
        });
}

loadData();
