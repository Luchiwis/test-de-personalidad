//constantes
const urlParams = new URLSearchParams(window.location.search);
const r_mueble = JSON.parse(urlParams.get('mueble'));
const r_color = JSON.parse(urlParams.get('color'));
const r_animal = JSON.parse(urlParams.get('animal'));
const r_herramienta = JSON.parse(urlParams.get('herramienta'));
const r_instrumento = JSON.parse(urlParams.get('instrumento'));
const r_perro = JSON.parse(urlParams.get('perro'));

const eje1 = document.querySelector("#eje1")
const eje2 = document.querySelector("#eje2")
const eje3 = document.querySelector("#eje3")
const eje4 = document.querySelector("#eje4")

//variables


//funciones
function resultados(){
    // TODO
    eje1.style.width = "90%"
    eje2.style.width = "18%"
    eje3.style.width = "64%"
    eje4.style.width = "2%"
    
}


//eventos
window.addEventListener("load", () => {
    setTimeout(resultados,1000)
})


//ejecuciones