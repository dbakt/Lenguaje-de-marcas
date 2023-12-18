function variable (){
    return prompt ("Introduce el tipo de variable que quieras")
}

function resultado(){
    let variableElegida = variable();

    if (variableElegida == "JS"){
        document.getElementById("texto").innerHTML = "<h3>Tipos de variables:</h3><ol><li>Automática</li><li>var</li><li>let</li><li>const</li>"
    } else{
        document.getElementById("texto").innerHTML = "<h3>El tipo de variable no existe</h3>"
    }
}