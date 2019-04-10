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

 
    for(let i=0;i<(tabla.children.length);i++){      
           
        if(tabla.children[i].children[0].innerText!=codid){
            
            tabla.insertBefore(tablerow,tabla.children[1]); 
        }else{
            console.log("Esa pelicula ya esta en la lista");
        }
    }
    

}


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
        if(tabla.children[i].children[0].innerText==codid){
            //TODO: función borrar
            tabla.removeChild(tabla.children[i]);
            
        }


    }




}


function modificar(){
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
        if(tabla.children[i].children[0].innerText==codid){
            tabla.replaceChild(tablerow,tabla.children[i]); 
        }


    }


}