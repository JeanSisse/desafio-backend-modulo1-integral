// Promoção

const listaDePrecos = [100, 100, 50, 300];

function valor_aPagar(listaDePrecos){

    if(listaDePrecos.length >= 3){
    	const menorValor = listaDePrecos.reduce((acc, valor) => acc < valor ? acc : valor);
    	const posicao = listaDePrecos.indexOf(menorValor);
    	const desconto = listaDePrecos.map((val, index) => index === posicao ? (val/2) : val);

    	console.log(soma(desconto));
    } else {
        console.log(soma(listaDePrecos));
    }
    
    function soma(listaDePrecos){
        
        return listaDePrecos.reduce((acc, next) => acc += next);
    }
}

valor_aPagar(listaDePrecos);