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

/*function checkBox() {
    const check = document.querySelector('.pedidos .caixinhaPedidos .icone');
    if(check === null){
        check.classList.remove('escondido');
    }
    check.classList.add('escondido');
}*/


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

    if (pedidoUm !== undefined && pedidoDois !== undefined && pedidoTres !== undefined) {
        const seletorClasse = document.querySelector('.menuInferiorVerde');
        seletorClasse.classList.remove('escondido');
    }
}

/*let valorTotal = 0;
function calculaTotal(){
    const valor1 = document.querySelector('.pedidos .precoPedidos');
    const valor2 = document.querySelector('.pedidosDois .precoPedidos');
    const valor3 = document.querySelector('.pedidosTres .precoPedidos');;
    alert(valor1.innerHTML = Number(valor1));
}*/

function chamarWpp() {
    //calculaTotal();
    let uri = `Olá, gostaria de fazer o pedido: - Prato: Frango Yin Yang - Bebida: Coquinha Gelada - Sobremesa: Pudim Total: R$ 27.70"`;
    let encoded = "https://wa.me/?text=" + encodeURIComponent(uri);
    return window.location = encoded;
}



