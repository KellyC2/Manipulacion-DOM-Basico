const h1=document.querySelector("h1");
const p=document.querySelector("p");
const parrafito=document.querySelector(".parrafito");
const pid=document.querySelector("#pid")
const input=document.querySelector("input");

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
})
//--------------------------------------MANIPULACIÓN DE TEXTOS O CONTENIDO DE MI ELEMENTO DESDE JS.

//Para modificar un elemnto html usamos las etiquetas "innerHtml" o "innerText"

//innerHTML: Nos permite insertar etiquetas HTML a nuestro elemento seleccionado.
h1.innerHTML="Patito <br> Feo";

//innerText: nos permite insertar texto a nuestro elemento seleccionado.
h1.innerText= "Patito <br> Feo";

//----------------------------MANIPULACIÓN DE DE CLASE DE UN ELEMENTO DESDE JS.


//getAttribute:Nos permite leer los atributos que tiene nuestro elemento.

h1.getAttribute("pantalla");
console.log(h1.getAttribute("pantalla"));

//setAttribute:Esta función nos permite modificar nuestros atributos. Para ellos vamos a añadir dos argumentos en nuestra función setAttribute en el cual el primero es el nombre del atricbuto a modificar y el segundo es el valor del nombre del atributo.
h1.setAttribute("pantalla", "rojo");
//Si observamos en nuestro inspector notaremos que el valor de mi atributo ha sido cambiado aunque dentro del codigo html no se visualice el cambio. 

//Asimismo podemos añadir y remover clases a nuestro elemento para ellos vamos a usar la función "classList".
//classList.add: permite añadir clases a mi elemento seleccionado.
h1.classList.add("verde");
h1.classList.add("amarillo");
h1.classList.add("pure");
//classList.remove:permite eliminar classes de mi elemto. 
h1.classList.remove("pure");
//classList.toggle:Usando cuando trabajamos con eventos, sirve no solo para agregar o quitar clases sino que cada vez que ejecutemos un codigo añada o quite la clase.
h1.classList.add("verde");
//classList.contains:Es una especie de condicional y nos devuelve true o false dependiendo si nuestro elemento tiene la clase que le estamos preguntando.
h1.classList.contains("verde");

//------------------------------MODIFICACIÓN DEL "VALUE" DE NUESTRO INPUT DESDE JS.
//input.value: Nos permite modificar desde js el valor de "value". Ejemplo:
input.value="456"

//-----------------------------------CREACIÓN DE ELEMENTOS DESDE CERO-----------
//document.createElement():Nos permite crear el elemento HTML que nosotros queramos. Ejemplo:
console.log(document.createElement("img"));
console.log(document.createElement("span"));
//Vamos a introdicir una imagen a mi html.
const imagen=document.createElement("img");
imagen.setAttribute("src", "https://images.pexels.com/photos/6286598/pexels-photo-6286598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
console.log(imagen);
pid.append(imagen);




