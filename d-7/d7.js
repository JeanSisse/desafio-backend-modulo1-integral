// Contador de palavras

function contador_de_palavras(texto) {
	
	const string = texto.trim();
	const arrayString = string.split(" ");

	const palavras = arrayString.filter(x => x != '' && x != '\n');

	console.log(palavras.length);
}

contador_de_palavras("Cuidado, pois usuarios as vezes deixam espacos vazios     no fim do texto sem querer ");