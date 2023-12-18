function frase(){
    let frase = document.getElementById("frase").value;
    let numero = document.getElementById("numero").value;
    document.getElementById("nuevaFrase").innerHTML = "<h" + numero + "> " + frase + "</h" + numero + ">";
}