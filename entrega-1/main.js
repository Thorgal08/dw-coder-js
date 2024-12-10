
function veriEdad() {     /* verficacion de edad para mayores de 18*/
        let edad = prompt ("Ingresa tu edad")
        if (edad >= 18){
            calculadora()
        }else{
      alert ("no puedes sumar estas muy chico")
        }}
function veriEdad() {     /*funcion de calculador*/
 


    let numero1 = parseFloat(prompt ("ingrese numero 1")) /*ingreso por pantalla para las operaciones*/
 
    let numero2 = parseFloat(prompt ("ingrese numero 2"))
    let operacion = prompt("ingrese operador")
    

    do{                  /*ciclo que se cumple siempre y cuando hayan parametros*/
 

    if (operacion === "+"){  /*evalua el operador si coincide procedera hacer la operacion referida si no pasara a la siguiente hasta que encuentre el operador correcto*/
 
    resultado = numero1 + numero2
    alert("el resultado es " + resultado)

    }else if(operacion === "-"){
    
        resultado = numero1 - numero2
        parseFloat(alert("el resultado es " + resultado))
        return
        
    
    }else if(operacion === "*"){
    
        resultado = numero1 * numero2
        alert("el resultado es " + resultado)
        return
    
    
    }else if(operacion === "/"){
    
        resultado = numero1 / numero2
        alert("el resultado es " + resultado)
        return
    
    
    }

} while (numero1 && numero2 && operacion) /*si falta uno de los datos el programa no continua dando la alerta*/
 
        alert("debe ingresar todos los datos")
    

            

}

veriEdad() /*llama a la funcion */
 



