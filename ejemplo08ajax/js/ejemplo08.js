function dameDataJson(){
    var ajax = new XMLHttpRequest();
    ajax.open("GET","data.json");
    ajax.onreadystatechange = function (){

        if(ajax.status == 200 && ajax.readyState == 4){
            datos = JSON.parse(ajax.response)
            console.log(datos);
        }
        console.log(ajax.readyState);
    }
    
    ajax.send();
}
function dameTodos(){
    var ajax = new XMLHttpRequest();
    ajax.open("GET","http://localhost:8080/peliculas");
    ajax.onreadystatechange = function (){

        if(ajax.status == 200 && ajax.readyState == 4){
            datos = JSON.parse(ajax.response)
            console.log(datos);
        }
        console.log(ajax.readyState);
    }
    
    ajax.send();
}

function dameUno(){
    var ajax = new XMLHttpRequest();
    ajax.open("GET","http://localhost:8080/peliculas/AAA-11111-AA");
    ajax.onreadystatechange = function (){

        if(ajax.status == 200 && ajax.readyState == 4){
            datos = JSON.parse(ajax.response)
            console.log(datos);
        }
        console.log(ajax.readyState);
    }
    
    ajax.send();
}
function guardaUno(){
    var ajax = new XMLHttpRequest();
    ajax.open("POST","http://localhost:8080/peliculas/",true);
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
        JSON.stringify({codId: "AAA-11111-AZ",
    director: "DIRECTOR",
    fecha: "2019-04-11T14:30:35.467+0000",
    genero: "GENERO",
    titulo: "TITULO",
    valoracion: 3}));
}
function actualizaUno(){
    var ajax = new XMLHttpRequest();
    ajax.open("POST","http://localhost:8080/peliculas/AAA-11111-AZ",true);
    ajax.setRequestHeader('Content-type','application/json; charset=utf-8')
    ajax.onreadystatechange = function (){

        if(ajax.status == 200 && ajax.readyState == 4){
            datos = JSON.parse(ajax.response)
            console.log(datos);
        }
        console.log(ajax.readyState);

    }
    
    ajax.send(JSON.stringify({codId: "AAA-11111-AZ",
    director: "DIRECTOR",
    fecha: "2019-04-11T14:30:35.467+0000",
    genero: "GENERO",
    titulo: "TITULO",
    valoracion: 3}));
}
function borraUno(){
    var ajax = new XMLHttpRequest();
    ajax.open("DELETE","http://localhost:8080/peliculas/AAA-11111-AA");
    ajax.onreadystatechange = function (){

        if(ajax.status == 200 && ajax.readyState == 4){
            datos = JSON.parse(ajax.response)
            console.log(datos);
        }
        console.log(ajax.readyState);
    }
    
    ajax.send();
}