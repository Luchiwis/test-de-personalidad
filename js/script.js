//constantes
const amplificacion = 5;

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

const respuestas = [r_mueble, r_color, r_animal, r_herramienta, r_instrumento, r_perro]

//variables


//funciones
function resultados(){
    // TODO
    for (r of respuestas){
        eje1.innerText = parseInt(eje1.style.width) + r[0]*amplificacion + "%"
        eje2.innerText = parseInt(eje2.style.width) + r[1]*amplificacion + "%"
        eje3.innerText = parseInt(eje3.style.width) + r[2]*amplificacion + "%"
        eje4.innerText = parseInt(eje4.style.width) + r[3]*amplificacion + "%"

        eje1.style.width = parseInt(eje1.style.width) + r[0]*amplificacion + "%"
        eje2.style.width = parseInt(eje2.style.width) + r[1]*amplificacion + "%"
        eje3.style.width = parseInt(eje3.style.width) + r[2]*amplificacion + "%"
        eje4.style.width = parseInt(eje4.style.width) + r[3]*amplificacion + "%"
    }
}


//eventos
window.addEventListener("load", () => {
    setTimeout(resultados,1000)
})


//ejecuciones
