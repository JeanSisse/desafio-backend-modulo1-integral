// Americano

const arrayNumero = [11, 11, 1];

const somaTotal = arrayNumero.reduce((acc, next) =>  acc += next);

if (somaTotal === arrayNumero.length){
	console.log(arrayNumero.length);
} else {
	if (somaTotal % arrayNumero.length === 0) {
		console.log(arrayNumero.length);
	} else {
		console.log(somaTotal % arrayNumero.length);
	}
}
