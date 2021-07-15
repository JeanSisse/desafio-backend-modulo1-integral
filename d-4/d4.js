// Mesa de Poker


const lista = [40, 7, 1, 29, 3, 5, 9, 23];

function mesa_poker(min, max, lista){
	const permitidos = lista.filter(x => x >= min && x <= max);
	console.log(permitidos);
}

mesa_poker(2, 10, lista);