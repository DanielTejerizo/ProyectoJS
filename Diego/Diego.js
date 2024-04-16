window.onload = function () {
    imagen();
    conseguirDatos();


    // generarSelector();

}

function imagen() {
    const imagen = document.getElementById('imagen');
    imagen.src = 'mapa-provincias-castilla-y-leon.png';
}

function conseguirDatos() {
    fetch("Datos.json") //fetch solo funciona con https
        .then(response => response.json())
        .then(datos => {
            generarSelect(datos);
        })
}


function obtenerProvincias(centros) {
    let provincias = [];

    centros.forEach(objeto => {
        if (!provincias.includes(objeto.Provincia)) {
            provincias.push(objeto.Provincia);
        }
    })
    return provincias
}

function generarSelect(datos) {
    const selectElement = document.getElementById('SelectProvincia');
    const provincias = obtenerProvincias(datos.Centros);

    selectElement.innerHTML = '';
    selectElement[0]=new Option("", "");

    provincias.forEach((provincia,i) => {
       selectElement[i+1]=new Option(provincia, provincia);
    });
    selectElement.addEventListener("change",(e)=>{tratarDatos(e,datos)})
}



function elegirprovincia() {
    let boton = document.createElement("button")
    document.getElementById("input").after(boton)
    boton.addEventListener("click", conseguirDatos)
    boton.append("Enviar")

}

function tratarDatos(e,datos) {
    let tabla = document.getElementById("TablaProvincia")
    //let provincia = document.getElementById("SelectProvincia").value
    let provincia=e.target.value
    tabla.innerHTML = ""
    let theader = document.createElement("thead"); //creamos el thead
    let head = document.createElement("tr"); //creamos la fila
    let celdah1 = document.createElement("th"); //creamos las celdas
    let celdah2 = document.createElement("th");
    let celdah3 = document.createElement("th");

    celdah1.append("Nombre"); //metemos lo que queremos que saque
    celdah2.append("Provincia");
    celdah3.append("Ver");

    head.append(celdah1); //metemos las celdas en la fila
    head.append(celdah2);
    head.append(celdah3);

    theader.append(head); //metemos la fila en el theader
    tabla.append(theader); //metemos el theader en la tabla
    
    datos.Centros.forEach(centro => {
        if (centro.Provincia == provincia) {
            let fila = document.createElement("tr")
            let celda1 = document.createElement("td")
            celda1.append(centro.Nombre)
            let celda2 = document.createElement("td")
            celda2.append(centro.Provincia)
            console.log(centro.Provincia)
            let celda3 = document.createElement("button")
            fila.append(celda1)
            fila.append(celda2)

            tabla.append(fila)
        }

    })

}