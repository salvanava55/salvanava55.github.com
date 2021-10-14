console.log("Hola mundo");

//Buscar un elemento DOM


//Queryselector solo regresa un valor, QueryselectorAll todos los que coincidan con la busqueda
/*
let links=document.querySelectorAll("a"); //entre comillas se coloca el selector css

//recorrer el elemento links e imprimir su contenido
links.forEach(function(link){
    console.log(link);
});

console.log(links);
*/

/*
let celdas=document.querySelectorAll("td");
celdas.forEach(function(td){
td.addEventListener('click',function(){
    //console.log("Diste Click en un TD");
    console.log(this);
})
}) ;
*/

let links=document.querySelectorAll(".close");
links.forEach(function(link){
link.addEventListener("click",function(evento){
//console.log(":)");
evento.preventDefault(); //Evitar que el evento siga su comportamiento por defecto, si le doy clic a la X de la pagina sensei no se direcciona

//location.href="./"; //redirecciona a donde le indique

//ambas funciones permiten ejecutar una instruccion despues de un tiempo
//setTimeout //una sola vez
setTimeout(function (name) {
  location.href="./";  
},3000);

//setInterval //constantemente

return false;
});
});

//Quitar clases a las etiquetas
let iconos=document.querySelectorAll("i");
iconos.forEach(function(icono){
icono.classList.remove("fa-star");
icono.classList.add("fa-star-o");
});