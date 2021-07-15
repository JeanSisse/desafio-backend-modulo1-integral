// Férias na Cubos

const input = "5 4 0 0";

function ferias_na_cubos(input){
	const grupos = input.split(' ');
	let g1 = parseInt(grupos[0]);
	let g2 = parseInt(grupos[1]);
	const g3 = parseInt(grupos[2]);
	const g4 = parseInt(grupos[3]);

	let qtdTaxis = g4 + g3; // Inicializa com a qtd de grupo com 4 pessoas

	// Subtrai qtd de pessoas no g1 para completar g3 caso qtd de grupo 1 for maior q grupo 3
	// caso contrario o grupo 1 é zerado, pois o que tiver lá serão alocados no g3
	g1 = g1 <= g3 ? 0 : (g1 - g3);

	g2 = g2 > 0 && g2 % 2 === 0 ? (g2 / 2) : g2 > 0 ? Math.floor(g2 / 2) + 1 : 0;

	// Retratando g1 caso ainda tiver mais duas pessoas, elas serao alocadas no g2
	g1 = g2 > 0 && g2 % 2 != 0 ? (g1 - 2) : g1;

	g1 = g1 > 0 && g1 % 4 === 0 ? (g1 / 4) : g1 > 0 ? (Math.floor(g1 / 4) +1) : 0;

	qtdTaxis += g1 + g2;

	console.log(qtdTaxis);
}

ferias_na_cubos(input);

/*
not pass: 15
g2 = g2 > 0 && g2 % 2 === 0 ? (g2 / 2) : g2 > 0 ? Math.floor(g2 / 2) + 1 : 0;

g1 = g2 > 0 && g2 % 2 != 0 ? (g1 - 2) : g1;

g1 = g1 > 0 && g1 % 4 === 0 ? (g1 / 4) : g1 > 0 ? (Math.floor(g1 / 4) +1) : 0;

*/