// Soma dos elementos

const lista = [1, 3, 5, 9, 23];

function solucao(lista) {
  let total = 0;

  for(let x of lista){
    total += x;
  }

  console.log(total);
}