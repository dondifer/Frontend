console.log("La mierda que me de la gana")
variablesGlobales = "variableGlobal";
var irAlBarEstoTambienEsUnaVG = "otra Variable Global";
miFincionConVar()
miFincionConLet()

function miFincionConVar(){
    var variableLocal="variablelocal";
    for (var i=0; i<10;i++){
        console.log("Muestra i " + i);
    }
    console.log("El valor final de i "+ i);

}

    function miFincionConLet(){
        var variableLocal="variablelocal";
        for (let i=0; i<10;i++){
            console.log("Muestra i " + i);
        }
        //Esto no funciona porque la i solo se crea dentro del for
        //console.log("El valor final de i "+ i);
    }

console.log("Evaluado tipos de datos")
var tipoDeDatoNumerico = 7;
var tipoDeDatoCadena = "Cadena de oro"
var fechaDeEstreno = new Date();
var otraFechaDeEstreno= fechaDeEstreno;
cambiaFecha(fechaDeEstreno);
console.log("Fecha final "+ fechaDeEstreno.getFullYear());
console.log("Fecha final "+ otraFechaDeEstreno.getFullYear());

otraFechaDeEstreno.setFullYear(1999);
function cambiaFecha(fecha){
    fecha.setFullYear(1990)
    console.log("Fecha definida " + fecha.getFullYear());
}

console.log("Resultado de typeof numerico : " + typeof tipoDeDatoNumerico);

console.log("Resultado de typeof cadena : " + typeof tipoDeDatoCadena);

console.log("Resultado de typeof fecha : " + typeof fechaDeEstreno);

pruebaNumerico("numer");
function pruebaNumerico(){
    let numero=new Number(3.74121)
    console.log("Valor almacenado "+ numero.valueOf());
    console.log("Valor almacenado "+ numero.toFixed());
    console.log("Valor almacenado "+ numero.toFixed(4));
}

vamosALosMetodos(1,2);
vamosALosMetodos(1);
vamosALosMetodos(1,2,3,4,5,5,5,5,5,55,5);
function vamosALosMetodos(campo1,campo2){
    console.log(arguments.length);

    console.log("Argumentos esperados "+ arguments.callee.length);


}

misMierdasConArrays();

function misMierdasConArrays(){
    let mi_array = new Array(); //[]
    mi_array[0]=7;
    mi_array[1]="putamierda"
    mi_array[mi_array.length-1];
    let otroArrayDeMierda= [1,2,"Otro", new Date()];
    let mi_array_asociativo = new Array();
    mi_array_asociativo['unaClave']="Un valor";
    let persona = new Array();
    persona.nombre ="Ruben";
    persona.apellido1 = "Gomez";
    persona.argumentos = vamosALosMetodos;
    persona.argumentos(1,2,3,2,1,2,1);
    console.log("Datos personales : "+
    "nombre "+ persona.nombre + " Primer Apellido "+ persona.apellido1);

}



MiClase.prototype.concatena = function(){
    return this.clave1 + this.clave2;
}


var miObjeto = new MiClase("pri","seggg");

console.log(miObjeto.concatena());




