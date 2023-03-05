var h1 = document.querySelector(".titulo")
var input1 = document.querySelector("#calculo1")
var input2 = document.querySelector("#calculo2")
var boton = document.querySelector(".boton")
var resultado = document.querySelector("#resultado")
var form = document.querySelector("#formulario")

form.addEventListener('submit', clickdelBoton)

function clickdelBoton(event){
    console.log({event})
    event.preventDefault()
    resultado.innerText = input1.value + input2.value
}