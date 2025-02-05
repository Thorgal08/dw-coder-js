// sumar dos numero 

/*async function sumar(){

const {value: num1} = await Swal.fire({
    title: 'Ingresa el primer número',
    input: 'number',
    inputPlaceholder: 'Escribe un número',
    showCancelButton: true,
    confirmButtonText: 'Siguiente',
    cancelButtonText: 'Cancelar'

})


if (num1 === null || num1 === ''){
Swal.fire ('no ingresasnte nada')
return

}

const {value: num2} = await Swal.fire({
    title: 'segundo',
    input: 'number',
    inputPlaceholder: 'Escribe un número',
    showCancelButton: true,
    confirmButtonText: 'Siguiente',
    cancelButtonText: 'Cancelar'

})

if (num1 === null || num1 === ''){
    Swal.fire ('no ingresasnte nada')
    return



}

const suma = parseFloat(num1) + parseFloat (num2)

swal.fire (`'la suma es', ${suma}`)


}

sumar() */

/*async function parimpar (){
    const result = await Swal.fire ({



        title: 'Ingresa el primer número',
        input: 'number',
        inputPlaceholder: 'Escribe un número',
        showCancelButton: true,
        confirmButtonText: 'Siguiente',
        cancelButtonText: 'Cancelar'



    } )

    resultado = result.value %2 === 0 ? "par" : "impar"

    swal.fire (`'la suma es', ${resultado}`)



}
parimpar()*/

/*class Personal {

    constructor(nombre, cumpleanos, cargo){

this.nombre = nombre
this.cumpleanos = cumpleanos
this.cargo = cargo

    }
}

const perfiles = [

    new Personal("tomas","22de junio","operador"),
    new Personal("Tomas", "22 de junio", "Operador"),
    new Personal("Ana", "5 de diciembre", "Gerente"),
    new Personal("Luis", "18 de marzo", "Desarrollador")

]
let mensaje
perfiles.forEach (persona => {

    mensaje += `Nombre: ${persona.nombre}<br>Fecha de Nacimiento: ${persona.cumpleanos}<br>Cargo: ${persona.cargo}<br><br>`;

})

Swal.fire({
    title: 'Ficha de Empleados',
    html: mensaje,
    icon: 'info'
});*/




const valorIngresado = prompt ("ingrese un numero")
const verificarNumero = (valorIngresado) => {
    return new Promise ((reject, resolve) => {
if (valorIngresado && !isNaN(valorIngresado)){

resolve ('cumplido')

}else{

    reject ('no cumplido')

}

})

}

verificarNumero (valorIngresado)

    .then ((mensaje) => {
        console.log (mensaje)



    })


    .catch ((mensaje) => {
        console.log (mensaje)



    })