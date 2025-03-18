// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Jacqueline Bautista 
let amigos = [];
let recuadro = document.getElementById('amigo');
let lista = document.getElementById('listaAmigos');

function agregarAmigo() {

    let amigo = recuadro.value;

    if (amigo == "") {
        alert("No se a ingresado ningún nombre");
        espBlanco();
        return;
    }

    amigos.push(amigo);
    espBlanco();
    console.log(amigos);
    mostrarAmigos();

}

function espBlanco() {

    recuadro.value = "";
}

function mostrarAmigos() {

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += "<li>" + amigos[i] + "</li>";
    }

}


function sortearAmigo() {

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    lista.innerHTML = "<li>" + `Tu amigo secreto es: ${amigoSorteado}` + "</li>";
    lista.value = "";
    amigos = [];
}