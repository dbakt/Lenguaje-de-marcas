function area_perim (){
    let radio = prompt ("Dime el radio de tu circunferencia");
    const PI = 3.1416;

    if (radio != null){
        let area = PI * radio ** 2;
        let perimetro = 2 * PI * radio;
        document.getElementById("area_perim").innerHTML = "Tu área es:  " +area+ "<br> <br> Tu perímetro es:  " +perimetro;
    }
}
