// Truco

// Carta virada pra cima 	Manilha
// Q 	J
// J 	K
// K 	A
// A 	2
// 2 	3
// 3 	Q

function truco(cartaParaCima){
	if (cartaParaCima === "Q") {
		console.log("J");
	} 
	else if (cartaParaCima === "J") {
		console.log("K");
	}
	else if (cartaParaCima === "K") {
		console.log("A");
	}
	else if (cartaParaCima === "A") {
		console.log("2");
	}
	else if (cartaParaCima === "2") {
		console.log("3");
	}
	else if (cartaParaCima === "3") {
		console.log("Q");
	}
}

truco("3");