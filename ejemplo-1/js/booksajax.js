var solicitudAsinc;
solicitudAsinc = new XMLHttpRequest();

function registrarManejadores() {
    const imgCss = document.getElementById("csstecprof");

    if (imgCss.addEventListener) {
        imgCss.addEventListener("mouseover", () => {
            obtenerContenido("1");
        }, false);
        imgCss.addEventListener("mouseout", () => {
            borrarContenido();
        }, false);
    }

    const imgJava = document.getElementById("java8");
    if (imgJava.addEventListener) {
        imgJava.addEventListener("mouseover", () => {
            obtenerContenido("2"); // Cambiar el ID si es diferente
        }, false);
        imgJava.addEventListener("mouseout", () => {
            borrarContenido();
        }, false);
    }

    const imgNinja = document.getElementById("jsninja");
    if (imgNinja.addEventListener) {
        imgNinja.addEventListener("mouseover", () => {
            obtenerContenido("3"); // Cambiar el ID si es diferente
        }, false);
        imgNinja.addEventListener("mouseout", () => {
            borrarContenido();
        }, false);
    }

    const imgNode = document.getElementById("nodejs");
    if (imgNode.addEventListener) {
        imgNode.addEventListener("mouseover", () => {
            obtenerContenido("4"); // Cambiar el ID si es diferente
        }, false);
        imgNode.addEventListener("mouseout", () => {
            borrarContenido();
        }, false);
    }
}

// Uso de XMLHttpRequest
function obtenerContenido(id) {
    const URL = "https://65419f70f0b8287df1fe8eb0.mockapi.io/api/example/books/" + id;

    try {
        if (solicitudAsinc.addEventListener) {
            solicitudAsinc.addEventListener("readystatechange", cambiarEstado);
            solicitudAsinc.open("GET", URL, true);
            solicitudAsinc.send();
        }
    } catch (error) {
        alert("No se puede procesar la petición AJAX a la API: " + error);
    }
}

function borrarContenido() {
    document.getElementById("descriptions").innerHTML = "";
}

function cambiarEstado() {
    if (solicitudAsinc.readyState == 4 && solicitudAsinc.status == 200) {
        const jsonDescription = solicitudAsinc.responseText;
        document.getElementById("descriptions").innerHTML = JSON.parse(jsonDescription).description;
    }
}

window.addEventListener("load", registrarManejadores, false);
