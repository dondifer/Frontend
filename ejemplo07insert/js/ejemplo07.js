function inicializar(){
   var liste = document.getElementById("lista");
   var listeItem2 = document.createElement("li");
   var textListItem2 = document.createTextNode(2);

   listeItem2.appendChild(textListItem2);
   liste.insertBefore(listeItem2,liste.children[1]);

   var listeItem4 = document.createElement("li");
   var textListItem4 = document.createTextNode(4);
   listeItem4.appendChild(textListItem4);
   liste.replaceChild(listeItem4,liste.children[3]);
}