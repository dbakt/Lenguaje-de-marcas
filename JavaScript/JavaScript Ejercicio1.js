function cambiarColorTabla(color){
    let tabla = document.getElementById("tabla");
    tabla.style.backgroundColor = color;
}
function cambiarColorFila1(color){
    let fila1 = document.getElementById("fila1");
    fila1.style.backgroundColor = color;
}
function cambiarColorFila2(color){
    let fila2 = document.getElementById("fila2");
    fila2.style.backgroundColor = color;
}
function cambiarColorFila3(color){
    let fila3 = document.getElementById("fila3");
    fila3.style.backgroundColor = color;
}
function reset(){
    tabla.style.backgroundColor= "transparent";
    fila1.style.backgroundColor= "transparent";
    fila2.style.backgroundColor= "transparent";
    fila3.style.backgroundColor= "transparent";
}