window.onload = function () {
  //Hasta que no haga toda la pagina
  crearCabecera();
  elegiranio();
};
function crearCabecera() {
  let tabla = document.getElementById("libros");
  tabla.hidden = true;//esconder la tabla
  let theader = document.createElement("thead"); //creamos el thead
  let head = document.createElement("tr"); //creamos la fila
  let celdah1 = document.createElement("th"); //creamos las celdas
  let celdah2 = document.createElement("th");
  let celdah3 = document.createElement("th");
  let celdah4 = document.createElement("th");
  let celdah5 = document.createElement("th");

  celdah1.append("Título"); //metemos lo que queremos que saque
  celdah2.append("Autor");
  celdah3.append("Año publicacion");
  celdah4.append("Género");
  celdah5.append("Ver");

  head.append(celdah1); //metemos las celdas en la fila
  head.append(celdah2);
  head.append(celdah3);
  head.append(celdah4);
  head.append(celdah5);

  theader.append(head); //metemos la fila en el theader
  tabla.append(theader);//metemos el theader en la tabla
  let tbody = document.createElement("tbody");//creamos el tbody
  tbody.id = "tbody"; //ponemos el id al tbody
  tabla.append(tbody);//metemos el tbody en la tabla
}

function elegiranio() {
  let label = document.createElement("label");//crear label
  label.append("Escribe un numero"); //contenido label
  document.getElementById("h1").after(label);
  let boton = document.createElement("button");//crear boton
  boton.append("Enviar");//contenido boton
  document.getElementById("libros").before(boton);//crear el boton antes de la tabla
  boton.addEventListener("click", conseguirDatos);//evento para que al hacer click
}

function conseguirDatos() {
  fetch("json/libros.json") //fetch solo funciona con https
    .then((response) => response.json())
    .then((datos) => {
      tratarDatos(datos);
    });
}

function tratarDatos(datos) {
  let anio = document.getElementById("anio").value;//valor del input
  let tabla = document.getElementById("libros");//tabla
  tabla.hidden = false; //mostrar tabla
  let tbody = document.getElementById("tbody"); //seleccionar el tbody
  tbody.innerHTML = ""; //limpiar

  datos.libros.forEach((libro) => { //forEach
    if (libro.anio_publicacion <= parseInt(anio)) {
      //creo celdas
      let fila = document.createElement("tr");
      let celda1 = document.createElement("td");
      let celda2 = document.createElement("td");
      let celda3 = document.createElement("td");
      let celda4 = document.createElement("td");
      let celda5=document.createElement("td")
      let boton=document.createElement("button")
      boton.id="boton"
      boton.append("Ver")
      boton.addEventListener("click", function(){
        crearImagen(libro); //imagen del libro
      });
      celda5.append(boton)
    
      celda1.append(libro.titulo); //en la celda 1 poner el titulo del libro
      celda2.append(libro.autor); //en la celda 2 poner el autor del libro
      celda3.append(libro.anio_publicacion); //en la celda 3 poner el año de publicacion del libro
      celda4.append(libro.genero); //en la celda 4 poner el genero del libro
      fila.append(celda1); //añadir celdas a las filas
      fila.append(celda2);
      fila.append(celda3);
      fila.append(celda4);
      fila.append(celda5);

      tbody.append(fila); //añadir fila al tbody
    }
  });
}

function crearImagen(libro){ //Funcion para sacar imagen debajo
  let divImagen=document.createElement("div") //Crear el div de la imagen
  divImagen.id="divImagen" //id
  
  // Limpiar
  divImagen.innerHTML = "";
  
  let imagen=document.createElement("img") //Crear elemento imagen
  imagen.id="imagen" //id

  //array
  let imagenesLibros = [
    {titulo: "Cien años de soledad", imagenSrc: "Img/100anios.png", imagenAlt: "100 años de soledad"},
    {titulo: "To Kill a Mockingbird", imagenSrc: "Img/ToKillAMockinbird.png", imagenAlt: "To Kill A Mockinbird"},
    {titulo: "1984", imagenSrc: "Img/1984.png", imagenAlt: "1984"},
    {titulo: "The Great Gatsby", imagenSrc: "Img/The Great Gatsby.png", imagenAlt: "The Great Gatsby"},
    {titulo: "The Catcher in the Rye", imagenSrc: "Img/The Catcher in the Rye.png", imagenAlt: "The Catcher in the Rye"},
    {titulo: "Brave New World", imagenSrc: "Img/Brave New World.png", imagenAlt: "Brave New World"},
    {titulo: "The Hobbit", imagenSrc: "Img/The Hobbit.png", imagenAlt: "The Hobbit"},
    {titulo: "The Lord of the Rings", imagenSrc: "Img/The Lord of the Rings.png", imagenAlt: "The Lord of the Rings"},
    {titulo: "One Hundred Years of Solitude", imagenSrc: "Img/One Hundred Years of Solitude.png", imagenAlt: "One Hundred Years of Solitude"},
    {titulo: "Pride and Prejudice", imagenSrc: "Img/Pride and Prejudice.png", imagenAlt: "Pride and Prejudice"},
    {titulo: "The Odyssey", imagenSrc: "Img/The Odyssey.png", imagenAlt: "The Odyssey"}
  ]

  let buscarImagen=imagenesLibros.find(item=>item.titulo===libro.titulo)

  if(buscarImagen){
    imagen.src=buscarImagen.imagenSrc
    imagen.alt=buscarImagen.imagenAlt
    divImagen.append(imagen)
  }else{
    let texto=document.createElement("p")
    texto.append("Imagen no encontrada")
    divImagen.append(texto)
  }

  let contenedor=document.getElementById("libros")
  contenedor.parentNode.insertBefore(divImagen, contenedor.nextSibling);
}

