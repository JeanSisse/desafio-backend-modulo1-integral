// Média Aritimética

const lista = [1, 3, 5, 9, 23];

function solucao(lista) {
    let media = 0;
    let total = 0;

    for(let x of lista){
        total += x;
    }
    
    media = total / lista.length;
    console.log(media);
}

solucao(lista);