// Caçula dos Adultos

const lista = [1, 3, 5, 9];

function cacula_dos_adultos(lista){
	const maioresDeIdade = lista.filter(x => x >= 18);
	
	// let cacula = 1000;

	if (maioresDeIdade.length === 0) {
		console.log("CRESCA E APARECA");
	} else {
		let cacula = maioresDeIdade.reduce((acc, idade) => acc < idade ? acc : idade);
		console.log(cacula);
	}
}

cacula_dos_adultos(lista);