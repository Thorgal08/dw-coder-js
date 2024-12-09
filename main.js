
function veriEdad() {
        let edad = prompt ("ingresa tu edad")
        if (edad >= 18){
            calculadora()
        }else{
      alert ("no puedes sumar estas muy chico")
        }}

function calculadora() {


    let numero1 = parseFloat(prompt ("ingrese numero 1"))
    let numero2 = parseFloat(prompt ("ingrese numero 2"))
    let operacion = prompt("ingrese operador")
    

    do{ 

    if (operacion === "+"){
    resultado = numero1 + numero2
    alert("el resultado es " + resultado)
    contador++
    
    }else if(operacion === "-"){
    
        resultado = numero1 / numero2
        alert("el resultado es " + resultado)
        return
        
    
    }else if(operacion === "*"){
    
        resultado = numero1 * numero2
        alert("el resultado es " + resultado)
        return
    
    
    }else if(operacion === "/"){
    
        resultado = numero1 - numero2
        alert("el resultado es " + resultado)
        return
    
    
    }
   
} while (numero1 && numero2 && operacion) 
        alert("debe ingresar todos los datos")
    

            

}

veriEdad()



