function numA(){
    return prompt("Tu número A elegido es..."); //porque si lo hago con variable, no la podré usar fuera de esta función y a la vez, si usase esta función en otra función no saldría nada porque no devolvería nada
}
function numB(){
    return prompt("Tu número B elegido es...");
}
function mayor(){
    let valorA = numA();
    let valorB = numB();

    let num1 = parseInt(valorA);//no puedo meter la funcion sin antes habérsela asignado a una variable. Tampoco puedo darle numA como nombre a esta variable porque se lía
    let num2 = parseInt(valorB);

    let mayorA = num1 > num2; 
    let mayorB = num2 > num1;

    if (mayorA){
        document.getElementById("mayor").innerHTML = "NumA es mayor que NumB";

    } else if(mayorB){
        document.getElementById("mayor").innerHTML = "NumB es mayor que NumA";
    
    } else {
        document.getElementById("mayor").innerHTML = "NumA y NumB son iguales";
    }
}