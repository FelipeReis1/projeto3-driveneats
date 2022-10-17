let pedidoUm;
let pedidoDois;
let pedidoTres;

function selecionarPedido(seletor) {
  const checkBox = seletor.querySelector(".icone");
  const selecaoAnterior = document.querySelector(".selecionado");
  if (selecaoAnterior !== null) {
    selecaoAnterior.classList.remove("selecionado");
    const iconeAnterior = selecaoAnterior.querySelector(".icone");
    iconeAnterior.classList.add("escondido");
  }
  if (checkBox !== null) {
    checkBox.classList.remove("escondido");
  }
  seletor.classList.add("selecionado");
  pedidoUm = 1;
  fecharPedido();
}

function selecionarPedidoDois(seletor) {
  const checkBox = seletor.querySelector(".icone2");
  const selecaoAnterior = document.querySelector(".selecionado2");
  if (selecaoAnterior !== null) {
    selecaoAnterior.classList.remove("selecionado2");
    const iconeAnterior = selecaoAnterior.querySelector(".icone2");
    iconeAnterior.classList.add("escondido");
  }
  if (checkBox !== null) {
    checkBox.classList.remove("escondido");
  }
  seletor.classList.add("selecionado2");
  pedidoDois = 1;
  fecharPedido();
}

function selecionarPedidoTres(seletor) {
  const checkBox = seletor.querySelector(".icone3");
  const selecaoAnterior = document.querySelector(".selecionado3");
  if (selecaoAnterior !== null) {
    selecaoAnterior.classList.remove("selecionado3");
    const iconeAnterior = selecaoAnterior.querySelector(".icone3");
    iconeAnterior.classList.add("escondido");
  }
  if (checkBox !== null) {
    checkBox.classList.remove("escondido");
  }
  seletor.classList.add("selecionado3");
  pedidoTres = 1;
  fecharPedido();
}

function fecharPedido() {
  if (
    pedidoUm !== undefined &&
    pedidoDois !== undefined &&
    pedidoTres !== undefined
  ) {
    const seletorClasse = document.querySelector(".menuInferiorVerde");
    seletorClasse.classList.remove("escondido");
  }
}

let valorTotal = 0;
function calculaTotal() {
  const valor1 = document.querySelector(
    ".pedidos .caixinhaPedidos .precoPedidos span"
  ).innerHTML;
  const valor2 = document.querySelector(
    ".pedidosDois .caixinhaPedidos .precoPedidos span"
  ).innerHTML;
  const valor3 = document.querySelector(
    ".pedidosTres .caixinhaPedidos .precoPedidos span"
  ).innerHTML;
  valorTotal = (Number(valor1) + Number(valor2) + Number(valor3)).toFixed(2);
}

const pedidos = [];

function pegarPedido() {
  const comida = document.querySelector(
    ".pedidos .caixinhaPedidos .tituloPedidos"
  ).innerHTML;
  const bebida = document.querySelector(
    ".pedidosDois .caixinhaPedidos .tituloPedidos"
  ).innerHTML;
  const sobremesa = document.querySelector(
    ".pedidosTres .caixinhaPedidos .tituloPedidos"
  ).innerHTML;
  pedidos.push(comida);
  pedidos.push(bebida);
  pedidos.push(sobremesa);
}

function chamarWpp() {
  calculaTotal();
  pegarPedido();
  let uri = `Olá, gostaria de fazer o pedido:
    - Prato: ${pedidos[0]}
    - Bebida: ${pedidos[1]}
    - Sobremesa: ${pedidos[2]}
    Total: R$ ${valorTotal}`;
  let encoded = "https://wa.me/?text=" + encodeURIComponent(uri);
  return (window.location = encoded);
}
