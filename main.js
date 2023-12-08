
//document.querySelector('.tecla_pom').onclick = tocaSomPom
function tocaSom (seletorAudioo) {
    const elemento = document.querySelector(seletorAudioo);
    
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}
    
     /*if(elemento === null){
        console.log('n existe')
    }
    if (elemento != null ) {
        //elemento.play();
        console.log(elemento)
    }
    */

const listaDeTeclas = document.querySelectorAll('.tecla');


for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador]; //contador vai até 8 indices
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string, parte que varia

    tecla.onclick= function(){
        tocaSom (idAudio);
    }
    tecla.onkeydown = function(evento){

        if (evento.code === 'Space' || evento.code === 'Enter'){ // evento.code acessa o código da tecla do evento 
            tecla.classList.add('ativa')
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
}

