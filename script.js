function selecionarPedido(seletor){

    const selecaoAnterior = document.querySelector('.pedidos .selecionado');
    if(selecaoAnterior !== null){
        selecaoAnterior.classList.remove('selecionado');
    }
   seletor.classList.add('selecionado');
}

function selecionarPedidoDois(seletor){

    const selecaoAnterior = document.querySelector('.pedidosDois .selecionado');
    if(selecaoAnterior !== null){
        selecaoAnterior.classList.remove('selecionado');
    }
   seletor.classList.add('selecionado');
}

function selecionarPedidoTres(seletor){

    const selecaoAnterior = document.querySelector('.pedidosTres .selecionado');
    if(selecaoAnterior !== null){
        selecaoAnterior.classList.remove('selecionado');
    }
   seletor.classList.add('selecionado');
}
