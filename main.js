function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if ( elemento != null && elemento.localName ==='audio' ){
        elemento.play();
        } else {
            console.log('Elemento não encontrado ou seletor inválido');
        
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


//enquanto

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);

    tecla.onclick = function () {

        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if(evento.code === "Space" || evento.code === 'Enter')
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}