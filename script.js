function selecionarPedido(seletor){

    const selecaoAnterior = document.querySelector('.selecionado');
    if(selecaoAnterior !== null){
        selecaoAnterior.classList.remove('selecionado');
    }
   seletor.classList.add('selecionado');
}