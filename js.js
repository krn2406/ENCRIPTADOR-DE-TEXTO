const botonEncriptar = document.querySelector (".boton-encriptar");
const textoEncriptar = document.querySelector (".encriptar");
const aviso = document.querySelector (".texto-aviso");
const respuesta = document.querySelector (".evaluar");
const contenido= document.querySelector (".tarjeta-contenedor");
const botonCopiar= document.querySelector (".boton-copiar");
const botonDesencriptar = document.querySelector (".boton-desencriptar");

botonEncriptar.addEventListener("click", e=> {
    e.preventDefault();
    let texto = textoEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if(texto ==""){
        aviso.style.background =" #0A3871";
        aviso.style.color = "#FFF";
        aviso.style.fontWeight ="800";
        aviso.textContent ="El campo de texto no debe estar vacío";

        setTimeout (()=>{
            aviso.removeAttribute ("style");
        },1500);
    }

    else if (texto !== txt){
        aviso.style.background =" #0A3871";
        aviso.style.color = "#FFF";
        aviso.style.fontWeight ="800";
        aviso.textContent ="No debe tener acentos y carácteres especiales";

        setTimeout (()=>{
            aviso.removeAttribute ("style");
        },1500);
    }

    else if (texto !== texto.toLowerCase()){
        aviso.style.background =" #0A3871";
        aviso.style.color = "#FFF";
        aviso.style.fontWeight ="800";
        aviso.textContent ="El texto debe ser todo en minúsculas";

        setTimeout (()=>{
            aviso.removeAttribute ("style");
        },1500);
    }
    
    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        botonCopiar.style.visibility= "inherit";
        contenido.remove()
        
    }
});



//* BOTON DESINCRIPTAR *//

botonDesencriptar.addEventListener("click", e=> {
    e.preventDefault();
    let texto = textoEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if(texto ==""){
        aviso.style.background =" #0A3871";
        aviso.style.color = "#FFF";
        aviso.style.fontWeight ="800";
        aviso.textContent ="El campo de texto no debe estar vacío";

        setTimeout (()=>{
            aviso.removeAttribute ("style");
        },1500);
    }

    else if (texto !== txt){
        aviso.style.background =" #0A3871";
        aviso.style.color = "#FFF";
        aviso.style.fontWeight ="800";
        aviso.textContent ="No debe tener acentos y carácteres especiales";

        setTimeout (()=>{
            aviso.removeAttribute ("style");
        },1500);
    }

    else if (texto !== texto.toLowerCase()){
        aviso.style.background =" #0A3871";
        aviso.style.color = "#FFF";
        aviso.style.fontWeight ="800";
        aviso.textContent ="El texto debe ser todo en minúsculas";

        setTimeout (()=>{
            aviso.removeAttribute ("style");
        },1500);
    }
    
    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        botonCopiar.style.visibility= "inherit";
        contenido.remove()
        
    }
});


//*BOTON COPIAR*//

botonCopiar.addEventListener("click", e=> {
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
});
