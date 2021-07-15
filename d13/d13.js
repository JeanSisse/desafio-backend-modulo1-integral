// Distância máxima
// 0 0
// 0 3
// 4 0

/*
5
3.56 17
-5.1 36.3
0.0002 -2
5 5
-9.01 -17.7
*/ 

let entrada = "5\n3.56 17\n-5.1 36.3\n0.0002 -2\n5 5\n-9.01 -17.7";

function maior_distancia(entrada) {
	const arrayCoordenadas = entrada.split("\n");
	arrayCoordenadas.shift();

	let x1 = 0, x2 = 0, y1 = 0, y2 = 0;
	let maiorDistancia = 0;
	let distancia = 0;
	let cord_x1y1, cord_x2y2;

	for(let j = 0; j < arrayCoordenadas.length; j++){
		cord_x1y1 = arrayCoordenadas[j];
		cord_x1y1 = cord_x1y1.split(" ");

		x1 = parseFloat(cord_x1y1[0], 10);
		y1 = parseFloat(cord_x1y1[1], 10);
		console.log(`x1 = ${x1}, y1 = ${y1}`);
		for(let i = j+1; i < arrayCoordenadas.length; i++){
			cord_x2y2 = arrayCoordenadas[i];
			cord_x2y2 = cord_x2y2.split(" ");

			x2 = parseFloat(cord_x2y2[0], 10);
			y2 = parseFloat(cord_x2y2[1], 10);
			console.log(`x2 = ${x2}, y2 = ${y2}`);
			distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
			if (distancia > maiorDistancia) {
				maiorDistancia = distancia;
			}
		}
	}
	return maiorDistancia;	
}

console.log(maior_distancia(entrada));

// sqrt(((x2-x1)^2 + (y2-y1)^2));