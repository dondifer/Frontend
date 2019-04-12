
//DID:Función insertar/modificar
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

//------------------------------------------------------------------------------------------------------
//Insertar en el servidor remoto con ajax



    var ajax = new XMLHttpRequest();
    ajax.open("POST","http://192.168.1.63:8080/peliculas/",true);
    ajax.setRequestHeader(
        'Content-Type','application/json; charset=utf-8')
    ajax.onreadystatechange = function (){

        if(ajax.status == 200 && ajax.readyState == 4){
            datos = JSON.parse(ajax.response)
            console.log(datos);
        }
        console.log(ajax.readyState);

    }
    
   
    ajax.send(
        JSON.stringify({codId: codid,
    director: director,
    fecha: fecha,
    genero: genero,
    titulo: titulo,
    valoracion: " "}));





 
    

}
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------


//DID:Función actualizar

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
    ajax.open("GET","http://192.168.1.63:8080/peliculas");

    ajax.onreadystatechange = function(){
        if(ajax.status==200 && ajax.readyState == 4){
            var datos = JSON.parse(ajax.responseText);
            console.log(datos);

            for(let i=0;i<datos.length;i++){


                var titN=document.createTextNode(datos[i].titulo);
                var direN=document.createTextNode(datos[i].director);
                var codN=document.createTextNode(datos[i].codId);
                var fechN=document.createTextNode(datos[i].fecha);
                var generN = document.createTextNode(datos[i].genero);

                var titN2=document.createTextNode(titN.wholeText);
                var direN2=document.createTextNode(direN.wholeText);
                var codN2=document.createTextNode(codN.wholeText);
                var fechN2=document.createTextNode(fechN.wholeText);
                var generN2 = document.createTextNode(generN.wholeText);


                var pelicula = [codN.wholeText,titN.wholeText,direN.wholeText,fechN.wholeText,generN.wholeText];
        
               
                
                
                
        
                var row = document.createElement("tr");
                var column1 = document.createElement("td");
                var column2 = document.createElement("td");
                var column3 = document.createElement("td");
                var column4 = document.createElement("td");
                var column5 = document.createElement("td");
                

                column1.appendChild(codN2)
                column2.appendChild(titN2)
                column3.appendChild(direN2)
                column4.appendChild(fechN2)
                column5.appendChild(generN2)
                
                row.appendChild(column1);
                row.appendChild(column2);
                row.appendChild(column3);
                row.appendChild(column4);
                row.appendChild(column5);


                var tabl = document.getElementById("tabla");
                
                tabl.insertBefore(row,tabl.children[1]);
        


                

                if(localStorage){
                    if(localStorage.getItem(codN.wholeText)){
                        alert("La pelicula ya está almacenada : " + localStorage.getItem(codN.wholeText))
                    }else{
                        localStorage.setItem(codN.wholeText,pelicula);
                    }
                }





        
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

//DID:Función limpiar caché
function limpiar(){
    localStorage.clear();
}

//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------

//DID:Función borrar
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


//------------------------------------------------------------------------------------------------------
//Borrar en el servidor con ajax

    var ajax = new XMLHttpRequest();
    ajax.open("DELETE","http://192.168.1.63:8080/peliculas/"+codid);
    ajax.onreadystatechange = function (){

        if(ajax.status == 200 && ajax.readyState == 4){
            datos = JSON.parse(ajax.response)
            console.log(datos);
        }
        console.log(ajax.readyState);
    }
    
    ajax.send();












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

