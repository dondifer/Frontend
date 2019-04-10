
console.log("Mi calculadora ")
var result = 0;
var contador=0;

console.log(sumar(1));
console.log(sumar(1));
console.log(sumar(2));

console.log(restar(1));
console.log(restar(1));
console.log(restar(2));

console.log(multiplicar(1));
console.log(multiplicar(1));
console.log(multiplicar(2));

console.log(dividir(1));
console.log(dividir(1));
console.log(dividir(2));


function Calculadora(){
    this.result=0;
}

Calculadora.prototype.operar = function(operador,valor){
    this.__result=eval(this.result + " " + operador + " "+ valor);
    
}

Calculadora.prototype.display = function(){
    return this.__result;
}

var calculadora = new Calculadora();

console.log("Pulso 1 y luego + ");
calculadora.operar("+",1);
console.log(calculadora.display());



function sumar (primero){
    
    result = result + primero;
    console.log("Sumo " +primero)
    contador=contador+1;

    return result;
   
    
}

function restar (primero){
result= result - primero;
console.log("Resto "+primero)
contador=contador+1;
return result
}


function multiplicar (primero){
    if(result==0&&contador==0){
        result=1;
    }
    console.log("Multiplico " +primero)
    result= result * primero;
    contador=contador+1;
return result
}


function dividir (primero){
    if(result==0&&contador==0){
        result=1;
    }
    console.log("Divido " +primero)
    result= result / primero;
    contador=contador+1;
    return result
}