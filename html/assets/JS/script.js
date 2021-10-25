let nome = window.document.getElementById ('nome');
let email = document.querySelector('#email');
let comentario = document.querySelector('#comentario')

let nomeOk = false;
let emailOk = false;
let comentarioOk = false;

let mapa = window.document.querySelector('#mapa')


nome.style.width = '23%';
email.style.width = '23%';

function validaNome(){
    let txtNome = document.querySelector('#txtNome');
    if (nome.value.length < 3)
    {
        txtNome.innerHTML = 'Nome Inválido!';
        txtNome.style.color = 'red';
    }
    else{
        txtNome.innerHTML = 'Nome válido!';
        txtNome.style.color = 'green';
        nomeOk = true;
    } 
}

function validaEmail()
{
let txtEmail = document.querySelector('#txtEmail');

if (email.value.indexOf('@') == -1)
{
txtEmail.innerHTML= 'Email inválido!';
txtEmail.style.color = 'red';
} else {
    txtEmail.innerHTML = 'Email válido!';
    txtEmail.style.color = 'green';
    emailOk = true;
}
}

function validaComentario () {
let txtComentario = document.querySelector('#txtComentario');

if(comentario.value.length >= 100){
txtComentario.innerHTML = 'Texto muito grande!';
txtComentario.style.display = 'block';

} else {
    txtComentario.style.display = 'none';
    comentarioOk = true;
}
}

function enviar(){

    if (nomeOk == true && emailOk == true && comentarioOk == true){
    alert('Formulario enviado com sucesso!');

} else {
    alert('Preencha o formulario corretamente.');
}
}



function mapaZoom () {
mapa.style.width = '600px';
mapa.style.height = '600px';

}


function mapaNormal() {
    mapa.style.width = '300px';
    mapa.style.height = '200px';

}