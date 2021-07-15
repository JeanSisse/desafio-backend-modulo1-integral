// Taxímetro

// 50 centavos por min
// 70 centavos por km

// 30 centavos para min acima de 20min
// 50 centavos para km acima de 10km

function taximetro(min, km){
	const valPorMin = 50;
	const valPorMinDesconto = 30;

	const valPorKm = 70;
	const valPorKmDesconto = 50;

	const minMin = 20;
	const kmMin = 10;

	let totalPorKm = 0;
	let totalPorMin = 0;

	let totalAPagar = 0;

	if (min > minMin) {
		totalPorMin += (Math.abs(minMin - min)) * valPorMinDesconto;
		totalPorMin += minMin * valPorMin;
	} else if (min < minMin) {
		totalPorMin += min * valPorMin;
	}

	if (km > kmMin) {
		totalPorKm += (Math.abs(kmMin - km)) * valPorKmDesconto;
		totalPorKm += kmMin * valPorKm;
	} else {
		totalPorKm += km * valPorKm;
	}

	
	

	totalAPagar = totalPorKm + totalPorMin;

	console.log(Math.floor(totalAPagar));
}

taximetro(25, 11.5);