function criptografar() {
    let textoEntrada = document.getElementsByClassName("entrada")[0];
    let textoSaida = document.getElementsByClassName("saida")[0];
    
    let novoTexto = textoEntrada.value
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    textoSaida.value = novoTexto;
}
let buttonCripto = document.getElementById("button-cripto");
buttonCripto.onclick = function () {
    criptografar();
    exibirSaidaMensagem();
};

function descriptografar() {
    let textoEntrada = document.getElementsByClassName("entrada")[0];
    let textoSaida = document.getElementsByClassName("saida")[0];
    
    let novoTexto = textoEntrada.value
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    textoSaida.value = novoTexto;
}
let buttonDescripto = document.getElementById("button-descripto");
buttonDescripto.onclick = function () {
    descriptografar();
    exibirSaidaMensagem();
};

function copiarParaAreadeTransferencia() {
    let textoSaida = document.getElementsByClassName("saida")[0];
    let standBy = textoSaida.value;
    
    navigator.clipboard.writeText(standBy)
}
let buttonCopy = document.getElementById("button-copy");
buttonCopy.onclick = copiarParaAreadeTransferencia;

function exibirSaidaMensagem() {
    let buttonCopy = document.getElementById("button-copy");
    buttonCopy.style.display = "block";
    let textoSaida = document.getElementsByClassName("saida")[0];
    textoSaida.style.display = "block";
    let telaInicial = document.getElementsByClassName("tela-inicial")[0];
    telaInicial.style.display = "none";
}