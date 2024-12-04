function fondoDegradado() {
    const contenedor = document.getElementById('cont-general');
    contenedor.classList.toggle('gradient');  // Aplica o quita el fondo degradado
}
function Imagen() {
    const imagen= document.getElementById("figura")
    const letra = document.getElementById("titulo")

    imagen.style.backgroundImage = 'url(./img/fondo.jpg)';
}


function fondoColor() {
    const body = document.getElementById('cont-general')
    body.style.backgroundColor = 'purple';
}

function circulo() {
    const circulo = document.getElementById("figura");
    const letra = document.getElementById("titulo");    
    letra.innerText = "Circulo";
    
    if (!circulo.classList.contains("circulo")) {
        circulo.classList = ("circulo");
    } else {
        circulo.classList.remove("circulo");
        letra.innerText = "Figura";
    }
}
function rombo() {
    const rombo = document.getElementById("figura");
    const letra = document.getElementById("titulo");    
    letra.innerText = "Rombo";
    
    if (!rombo.classList.contains("rombo")) {
        rombo.classList = ("rombo");
    } else {
        rombo.classList.remove("rombo");
        letra.innerText = "Figura";
    }
}
function superior() {
    const superior = document.getElementById("figura");
    const letra = document.getElementById("titulo");    
    
    
    if (!superior.classList.contains("superior")) {
        superior.classList = ("superior");
        letra.innerText = "Top";
    } else {
        superior.classList.remove("superior");
        letra.innerText = "Figura";
    }
}

function bottom() {
    const bottom = document.getElementById("figura");
    const letra = document.getElementById("titulo");    
    
    
    if (!bottom.classList.contains("bottom")) {
        bottom.classList = ("bottom");
        letra.innerText = "Bottom";
    } else {
        bottom.classList.remove("bottom");
        letra.innerText = "Figura";
    }
}
function izquierda() {
    const izquierda = document.getElementById("figura");
    const letra = document.getElementById("titulo");    
    
    
    if (!izquierda.classList.contains("izquierda")) {
        izquierda.classList = ("izquierda");
        letra.innerText = "Rigth";
    } else {
        izquierda.classList.remove("izquierda");
        letra.innerText = "Figura";
    }
}

function derecha() {
    const derecha = document.getElementById("figura");
    const letra = document.getElementById("titulo");    
    
    
    if (!derecha.classList.contains("derecha")) {
        derecha.classList = ("derecha");
        letra.innerText = "Left";
    } else {
        derecha.classList.remove("derecha");
        letra.innerText = "Figura";
    }
}

function animation() {
    const animation = document.getElementById("figura");
    const letra = document.getElementById("titulo");    
    
    animation.style.animation = 'brincos 1s infinite running'
}

function Fondo(){
    const Fondo = document.getElementById("figura");
    const letra = document.getElementById("titulo"); 
    letra.innerText = "Degrado";

    Fondo.style.backgroundImage = 'linear-gradient(to top red, pink)';

}

function diagonal() {
    const diagonal = document.getElementById("figura");
    const letra = document.getElementById("titulo");    
    
    
    if (!diagonal.classList.contains("diagonal")) {
        diagonal.classList = ("diagonal");
        letra.innerText = "Diagonal";
    } else {
        diagonal.classList.remove("diagonal");
        letra.innerText = "Figura";
    }
}


function active (){
    const active = document.getElementById("panel-lateral");
    
    if (!active.classList.contains("active")) {
        active.classList = ("active");
    } else {
        active.classList.remove("active");
    }
}

function desactive (){
    const desactive = document.getElementById("panel-superior");  
    
    if (!desactive.classList.contains("desactive")) {
        desactive.classList = ("desactive");
    } else {
        desactive.classList.remove("desactive");
    }
}
function volver(){
    const volver = document.getElementById("panel-superior");

    if (volver.classList.contains("desactive")){
        volver.classList.remove("desactive");
    }
}

function estrella() {
    const figura = document.getElementById("figura");
    const letra = document.getElementById("titulo");

    // Cambia el texto del título
    letra.innerText = "Estrella";

    // Verifica si ya tiene la clase estrella. Si no, la añade.
    if (!figura.classList.contains("estrella")) {
        figura.classList.add("estrella");
    } else {
        figura.classList.remove("estrella"); // Si ya tiene la clase, la elimina
        letra.innerText = "Figura"; // Vuelve al estado inicial
    }
}
