//Primero creamos función para mostrar modal
function mostrarModalResultado() { //Con el id del div del modal para que aparezca en modal
    document.getElementById("miresultado").style.display = "block"; //style para cambiar el estilo CSS display-block
}

function cerrarModal() { //para hacerlo desaparecer
    document.getElementById("miresultado").style.display = "none";
}

//Función para copiar el resultado que aparece en el modal
function copiarModalResultado() { //se activa con el boton en el modal
    var resultado = document.getElementById("miResultado");
    resultado.select();
    document.execCommand("copy");
    alert("¡Resultado copiado al portapapeles!");
}

//Función para hacer aparecer el resultado en el modal, usando la primera función
function mostrarResultadoEnModal(resultado) { //Con el id del div del modal para que aparezca el resultado en el modal
    document.getElementById("miResultado").value = resultado;
    mostrarModalResultado(); //LLamo la función de mostrar el modal, ahora saldrá con el resultado
}

function cifrar() {
    var mensaje = document.getElementById("mensaje").value;
    var offset = parseInt(document.getElementById("clave").value);
    var textoCifrado = "";

    for (let c of mensaje) {
        // Mayúsculas
        if (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90) {
            let codigo = c.charCodeAt(0);
            codigo -= 65;
            codigo = (codigo + offset) % 26;
            codigo += 65;
            textoCifrado += String.fromCharCode(codigo);
        }
        // Minúsculas
        else if (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122) {
            let codigo = c.charCodeAt(0);
            codigo -= 97;
            codigo = (codigo + offset) % 26;
            codigo += 97;
            textoCifrado += String.fromCharCode(codigo);
        }
        // Números
        else if (!isNaN(parseInt(c))) {
            let codigo = c.charCodeAt(0);
            codigo -= 48;
            codigo = (codigo + offset) % 10;
            codigo += 48;
            textoCifrado += String.fromCharCode(codigo);
        }
        // Espacios 
        else if (c == " ") {
            textoCifrado += " ";
        }
        
    }

    mostrarResultadoEnModal(textoCifrado);
}

function descifrar() {
    var mensajeCifrado = document.getElementById("mensaje").value;
    var offset = parseInt(document.getElementById("clave").value);
    var textoDescifrado = "";

    for (let c of mensajeCifrado) {
        // Mayúsculas
        if (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90) {
            let codigo = c.charCodeAt(0);
            codigo -= 65;
            codigo = (codigo - offset + 26) % 26;
            codigo += 65;
            textoDescifrado += String.fromCharCode(codigo);
        }
        // Minúsculas
        else if (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122) {
            let codigo = c.charCodeAt(0);
            codigo -= 97;
            codigo = (codigo - offset + 26) % 26;
            codigo += 97;
            textoDescifrado += String.fromCharCode(codigo);
        }
        // Números
        else if (!isNaN(parseInt(c))) {
            let codigo = c.charCodeAt(0);
            codigo -= 48;
            codigo = (codigo - offset + 10) % 10;
            codigo += 48;
            textoDescifrado += String.fromCharCode(codigo);
        }
        // Espacios 
        else if (c == " ") {
            textoDescifrado += " ";
        }
        
    }

    mostrarResultadoEnModal(textoDescifrado);
}
