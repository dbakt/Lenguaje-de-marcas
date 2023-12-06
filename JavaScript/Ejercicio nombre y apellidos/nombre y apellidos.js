function mostrar(){
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let saludo = "Hola, " + nombre + " "+apellidos;
    document.getElementById("titulo").innerHTML = saludo;

}