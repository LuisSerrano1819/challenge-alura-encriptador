var munieco = document.querySelector(".contenedormunieco");
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

function cifrarTexto(){
    ocultarAdelante();
    //obteniendo el valor del primer input
    let textoInicial = document.getElementById('cdt1').value;

    //cambiamos el valor de las vocales e, i, a, o, u por otras palabras
    let texto1 = textoInicial.replace(/e/g,'enter');
    let texto2 = texto1.replace(/i/g, 'imes');
    let texto3 = texto2.replace(/a/g, 'ai');
    let texto4 = texto3.replace(/o/g, 'ober');
    let textocifrado = texto4.replace("u/g", 'ufat');

    //mostramos el resultado en el otro input
    resultado.textContent = textocifrado;
    limpiezaCampo();
}

function descifrarTexto(){
    ocultarAdelante();
    let textoInicial = document.getElementById('cdt1').value;

    //cambiamos el valor de las palabras, por las vocales
    let texto1 = textoInicial.replace(/enter/g,'e');
    let texto2 = texto1.replace(/imes/g, 'i');
    let texto3 = texto2.replace(/ai/g, 'a');
    let texto4 = texto3.replace(/ober/g, 'o');
    let textocifrado = texto4.replace(/ufat/g, 'u');

    //mostramos el resultado en el otro input
    resultado.textContent = textocifrado;
    limpiezaCampo();
}

//limpia y vacia el primer input
function limpiezaCampo(){
    document.getElementById('cdt1').value = "";
}

//copia el resultado del input 
function copiar()
{
    try {
    let copiarTexto = resultado.textContent;
    navigator.clipboard.writeText(copiarTexto);
    resultado.textContent = "";
    alert("El texto fue copiado en el portapapeles");
    } catch (error) {
        console.log("¡UPS! algo salio mal" + error);
    }
    
}

function ocultarAdelante(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}