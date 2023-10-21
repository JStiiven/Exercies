let altura = parseFloat(prompt("Ingrese su altura en metros:"));
let peso = parseInt(prompt("Ingrese su peso en kilogramos:"));
let operacion = altura * altura
let a = (peso / operacion).toFixed(1)
let estatico = "\n" + "Estatura: " + altura +"0" + " metros" + "\n" + "Peso: " + peso + " kilogramos"
if (a < 18.5){
    alert("Se encuentra dentro del rango de Bajo peso" + estatico)
} else if (a >= 18.5 && a <= 24.9) {
    alert("Se encuentra dentro del rango de Peso saludable" + estatico)
}else if (a >= 25.0 && a <= 29.9){
    alert("Se encuentra dentro del rango de Sobre peso" + estatico)
}else if(a >= 30.0){
    alert("Se encuentra dentro del rango de Obesidad" + estatico)
}else{
    alert("¡Error ingrese lo indicado!")
}