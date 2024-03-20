window.onload = function () {  //Hasta que no haga toda la pagina
    elegiranio()
}

function elegiranio(){
    let boton=document.createElement("button")
    boton.append("Enviar")
    document.getElementById("libros").before(boton)
    boton.addEventListener("click", conseguirDatos)
}

function conseguirDatos(){
    fetch("/json/libros.json") //fetch solo funciona con https
    .then(response=>response.json())
    .then(datos=>{
        tratarDatos(datos)
    })
}

function tratarDatos(datos){
    let anio=document.getElementById("anio").value
    let tabla=document.getElementById("libros")
    tabla.innerHTML="" //escribe lo que le digas en el html
    datos.libros.forEach(libro =>{
        if(libro.anio_publicacion<=parseInt(anio)){
            //creo celdas
            let fila=document.createElement("tr")
            let celda1=document.createElement("td")
            celda1.append(libro.titulo)//en la celda 1 poner el titulo del libro
            //celda1.textContent=libro.titulo
            let celda2=document.createElement("td")
            celda2.append(libro.autor)//en la celda 2 poner el autor del libro
            //añadir
            fila.append(celda1)
            fila.append(celda2)

            tabla.append(fila)
        }
        

    })
}