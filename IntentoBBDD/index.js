window.onload=function(){
    crearCabecera()
}

function crearCabecera(){
    let enlace1=document.createElement("a")
    let enlace2=document.createElement("a")
    let enlace3=document.createElement("a")
    let enlace4=document.createElement("a")

    enlace1.id="insertar"
    enlace1.href="#"
    enlace1.append("Insertar")

    enlace2.id="borrar"
    enlace2.href="#"
    enlace2.append("Borrar")

    enlace3.id="Modificar"
    enlace3.href="#"
    enlace3.append("Modificar")

    enlace4.id="Consultar"
    enlace4.href="Cosas/Consultas.html"
    enlace4.append("Consultar")

    let div=document.getElementById("inicio")

    div.style.display="flex"
    div.style.flexDirection="column"
    div.style.justifyContent="center"
    div.style.alignItems="center"


    div.append(enlace1)
    div.append(enlace2)
    div.append(enlace3)
    div.append(enlace4) 
}