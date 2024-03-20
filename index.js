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

  celdah1.append("Título"); //metemos lo que queremos que saque
  celdah2.append("Autor");
  celdah3.append("Año publicacion");
  celdah4.append("Género");

  head.append(celdah1); //metemos las celdas en la fila
  head.append(celdah2);
  head.append(celdah3);
  head.append(celdah4);

  theader.append(head); //metemos la fila en el theader
  tabla.append(theader);//metemos el theader en la tabla
  let tbody = document.createElement("tbody");//creamos el tbody
  tbody.id = "tbody"; //ponemos el id al tbody
  tabla.append(tbody);//metemos el tbody en la tabla
}

function elegiranio() {
  let label = document.getElementById("label");//crear label
  label.append("Escribe un numero"); //contenido label
  let boton = document.createElement("button");//crear boton
  boton.append("Enviar");//contenido boton
  document.getElementById("libros").before(boton);//crear el boton antes de la tabla
  boton.addEventListener("click", conseguirDatos);//evento para que al hacer click
}

function conseguirDatos() {
  fetch("libros.json") //fetch solo funciona con https
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
      celda1.append(libro.titulo); //en la celda 1 poner el titulo del libro
      celda2.append(libro.autor); //en la celda 2 poner el autor del libro
      celda3.append(libro.anio_publicacion); //en la celda 3 poner el año de publicacion del libro
      celda4.append(libro.genero); //en la celda 4 poner el genero del libro
      fila.append(celda1); //añadir celdas a las filas
      fila.append(celda2);
      fila.append(celda3);
      fila.append(celda4);

      tbody.append(fila); //añadir fila al tbody
    }
  });
}
