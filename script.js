let pedidoUm;
let pedidoDois;
let pedidoTres;

function selecionarPedido(seletor) {

    const selecaoAnterior = document.querySelector('.pedidos .selecionado');
    if (selecaoAnterior !== null) {
        selecaoAnterior.classList.remove('selecionado');
    }
    seletor.classList.add('selecionado');
    pedidoUm = 1;
    fecharPedido();
}

function selecionarPedidoDois(seletor) {

    const selecaoAnterior = document.querySelector('.pedidosDois .selecionado');
    if (selecaoAnterior !== null) {
        selecaoAnterior.classList.remove('selecionado');
    }
    seletor.classList.add('selecionado');
    pedidoDois = 1;
    fecharPedido();
}

function selecionarPedidoTres(seletor) {

    const selecaoAnterior = document.querySelector('.pedidosTres .selecionado');
    if (selecaoAnterior !== null) {
        selecaoAnterior.classList.remove('selecionado');
    }
    seletor.classList.add('selecionado');
    pedidoTres = 1;
    fecharPedido();
}

function fecharPedido() {

    if(pedidoUm !== undefined && pedidoDois !== undefined && pedidoTres!== undefined){
        const seletorClasse = document.querySelector('.menuInferiorVerde');
        seletorClasse.classList.remove('escondido');
    }
    


}
