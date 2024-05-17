

const form= document.querySelector(".formulario-fale-conosco")
const mascara= document.querySelector(".marcara-formulario")


function mostrarform (){
 
    form.style.left="50%"
    form.style.transform="translatex(-50%)"
    mascara.style.visibility= "visible"

}

function esconderform(){

    form.style.left="-368px"
    form.style.transform="translatex(0)"
    mascara.style.visibility= "hidden"

}