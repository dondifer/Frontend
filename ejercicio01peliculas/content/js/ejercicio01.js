function insertar(){
    var titulo=document.getElementById('titulo').value;
    var director=document.getElementById('director').value;
    var codid=document.getElementById('codid').value;
    var fecha=document.getElementById('fecha').value;
    var genero = document.getElementById('Genero').value;

    var tituloN=document.createTextNode(titulo);
    var directorN=document.createTextNode(director);
    var codidN=document.createTextNode(codid);
    var fechaN=document.createTextNode(fecha);
    var generoN = document.createTextNode(genero);




    var tabla =document.getElementById("tabla");

    var tablerow = document.createElement("tr");
    var tablecolumn1 = document.createElement("td");
    var tablecolumn2 = document.createElement("td");
    var tablecolumn3 = document.createElement("td");
    var tablecolumn4 = document.createElement("td");
    var tablecolumn5 = document.createElement("td");

    tablecolumn1.appendChild(codidN)
    tablecolumn2.appendChild(tituloN)
    tablecolumn3.appendChild(directorN)
    tablecolumn4.appendChild(fechaN)
    tablecolumn5.appendChild(generoN)

    tablerow.appendChild(tablecolumn1);
    tablerow.appendChild(tablecolumn2);
    tablerow.appendChild(tablecolumn3);
    tablerow.appendChild(tablecolumn4);
    tablerow.appendChild(tablecolumn5);
    

 
    
  
    for(let i=1;i<(tabla.children.length);i++){
        if(tabla.children[i].children[0].innerText===codid){
            
            tabla.removeChild(tabla.children[i]);
            
        }
    }
            
    
            tabla.insertBefore(tablerow,tabla.children[1]); 
//------------------------------------------------------------------------------------------------------
//Insertar en el storage local
    var pelicula = [codid,titulo,director,fecha,genero];

    if(localStorage){
        if(localStorage.getItem(codid)){
            alert("La pelicula ya está almacenada : " + localStorage.getItem(codid))
        }else{
            localStorage.setItem(codid,pelicula);
        }
    }


 
    

}
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------


//TODO:Función actualizar

function actualizar(){

    if(localStorage){

        for(let i=0; i<localStorage.length; i++) {
         
        if(localStorage.getItem(localStorage.key(i))){

            var pelicula = localStorage.getItem(localStorage.key(i));

            var divpeli = pelicula.split([","]);




            var tituloN=document.createTextNode(divpeli[1]);
            var directorN=document.createTextNode(divpeli[2]);
            var codidN=document.createTextNode(divpeli[0]);
            var fechaN=document.createTextNode(divpeli[3]);
            var generoN = document.createTextNode(divpeli[4]);
        
        
        
        
            var tabla=document.getElementById("tabla");
        
            var tablerow = document.createElement("tr");
            var tablecolumn1 = document.createElement("td");
            var tablecolumn2 = document.createElement("td");
            var tablecolumn3 = document.createElement("td");
            var tablecolumn4 = document.createElement("td");
            var tablecolumn5 = document.createElement("td");
        
            tablecolumn1.appendChild(codidN)
            tablecolumn2.appendChild(tituloN)
            tablecolumn3.appendChild(directorN)
            tablecolumn4.appendChild(fechaN)
            tablecolumn5.appendChild(generoN)
        
            tablerow.appendChild(tablecolumn1);
            tablerow.appendChild(tablecolumn2);
            tablerow.appendChild(tablecolumn3);
            tablerow.appendChild(tablecolumn4);
            tablerow.appendChild(tablecolumn5);

            
            tabla.insertBefore(tablerow,tabla.children[1]);

        }
    }
}

//-----------------------------------------------------------------------------------------------------------
//TODO:Esta parte de la funcion actualizar coge los datos del json y los inserta



if(localStorage.length==0){
    var ajax = new XMLHttpRequest();
    ajax.open("GET","data.json");

    ajax.onreadystatechange = function(){
        if(ajax.status==200 && ajax.readyState == 4){
            var datos = JSON.parse(ajax.responseText);
            console.log(datos);

            for(let i=0;i<datos.length;i++){


                var titN=document.createTextNode(datos[i].titulo.value);
                var direN=document.createTextNode(datos[i].director.value);
                var codN=document.createTextNode(datos[i].codid.value);
                var fechN=document.createTextNode(datos[i].fecha.value);
                var generN = document.createTextNode(datos[i].genero.value);
        
        
        
        
                var tabl =document.getElementById("tabla");
        
                var row = document.createElement("tr");
                var column1 = document.createElement("td");
                var column2 = document.createElement("td");
                var column3 = document.createElement("td");
                var column4 = document.createElement("td");
                var column5 = document.createElement("td");
        
                column1.appendChild(codN)
                column2.appendChild(titN)
                column3.appendChild(direN)
                column4.appendChild(fechN)
                column5.appendChild(generN)
        
                row.appendChild(tablecolumn1);
                row.appendChild(tablecolumn2);
                row.appendChild(tablecolumn3);
                row.appendChild(tablecolumn4);
                row.appendChild(tablecolumn5);
                tabl.insertBefore(row,tabla.children[1]);
        
        
            }
               

        }
    }
   
    ajax.send();





    


   


}









}

//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------

function limpiar(){
    localStorage.clear();
}

//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------


function borrar(){
    var titulo=document.getElementById('titulo').value;
    var director=document.getElementById('director').value;
    var codid=document.getElementById('codid').value;
    var fecha=document.getElementById('fecha').value;
    var genero = document.getElementById('Genero').value;

    var tituloN=document.createTextNode(titulo);
    var directorN=document.createTextNode(director);
    var codidN=document.createTextNode(codid);
    var fechaN=document.createTextNode(fecha);
    var generoN = document.createTextNode(genero);

    var tablecolumn1 = document.createElement("td");
    tablecolumn1.appendChild(codidN)


    var tabla =document.getElementById("tabla");

    for(let i=1;i<(tabla.children.length);i++){
        if(tabla.children[i].children[0].innerText===codid){
            
            tabla.removeChild(tabla.children[i]);
            
        }


    }




//------------------------------------------------------------------------------------------------------
//Borrar en el storage local


    var pelicula = [codid,titulo,director,fecha,genero];

    if(localStorage){
        if(localStorage.getItem(codid)){
            alert("Se borra la peícula : " + localStorage.getItem(codid))
            localStorage.removeItem(codid,pelicula);

        }
           
        
    }






}




//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------




/*function modificar(){
    var titulo=document.getElementById('titulo').value;
    var director=document.getElementById('director').value;
    var codid=document.getElementById('codid').value;
    var fecha=document.getElementById('fecha').value;
    var genero = document.getElementById('Genero').value;

    var tituloN=document.createTextNode(titulo);
    var directorN=document.createTextNode(director);
    var codidN=document.createTextNode(codid);
    var fechaN=document.createTextNode(fecha);
    var generoN = document.createTextNode(genero);

    var tablecolumn1 = document.createElement("td");


    var tabla =document.getElementById("tabla");


    var tablerow = document.createElement("tr");
    var tablecolumn1 = document.createElement("td");
    var tablecolumn2 = document.createElement("td");
    var tablecolumn3 = document.createElement("td");
    var tablecolumn4 = document.createElement("td");
    var tablecolumn5 = document.createElement("td");

    tablecolumn1.appendChild(codidN)
    tablecolumn2.appendChild(tituloN)
    tablecolumn3.appendChild(directorN)
    tablecolumn4.appendChild(fechaN)
    tablecolumn5.appendChild(generoN)

    tablerow.appendChild(tablecolumn1);
    tablerow.appendChild(tablecolumn2);
    tablerow.appendChild(tablecolumn3);
    tablerow.appendChild(tablecolumn4);
    tablerow.appendChild(tablecolumn5);


   




    for(let i=1;i<(tabla.children.length);i++){
        if(tabla.children[i].children[0].innerText===codid){
            tabla.replaceChild(tablerow,tabla.children[i]); 
        }


    }


}
*/

//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------

