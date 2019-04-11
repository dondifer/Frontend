function inicializar(){
    if(localStorage){
        if(localStorage.getItem("color")){
            alert("El color almacenado : " + localStorage.getItem("color"))
        }else{
            localStorage.setItem("color","Mi color");
        }

        if(localStorage.getItem("ovejas")){
            alert("El ovejo almacenado : " + localStorage.getItem("ovejas"))
        }else{
            localStorage['ovejas'] = "merinas";
        }

        if(localStorage.getItem("coche")){
            alert("El coche almacenado : " + localStorage.coche);
        }else{
            localStorage.coche = "aspon martino";
        }

    }
}