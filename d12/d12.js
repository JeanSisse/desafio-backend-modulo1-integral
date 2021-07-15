// Alocando Pessoas


//Quando uma pessoa chega, ela rapidamente identifica uma mesa
// (vazia e que esteja o mais longe possível de outras mesas ocupadas)
// para se sentar e se dirige a essa mesa. Caso tenha mais de uma mesa
// igualmente boa, a pessoa 
//escolhe a que fica mais próxima da porta, que fica ao lado da mesa 1.

// 1 <= N <= 10^9 (1.000.000.000)

function alocando_pessoas(nPessoasEMesas){
	
	// caso n = 1
	sala.splice(0, 0, p+(nPessoasEMesas-nPessoasEMesas+1));
	
	// caso n > 1
	if (nPessoasEMesas == 2) {
		console.log(`ultima mesa ocupada é ${nPessoasEMesas}`);
	} else if (nPessoasEMesas >= 3) {
		console.log(nPessoasEMesas-1);
	} else {
		console.log(nPessoasEMesas);
	}
}

// caso n == 1
// [x]

// caso n == 2
// [x, ]
// [x, x]

// casos n >= 3
// [x ,  , ]
// [x ,  ,x]
// [x ,x, x]

// [x ,  ,  ,  ]
// [x ,  ,  , x]
// [x ,x ,  , x]
// [x ,x , x, x]


// [x,  ,  ,  ,  ]
// [x,  ,  ,  , x]
// [x,  , x,  , x]
// [x, x, x,  , x]
// [x, x, x, x, x]


// [x,  ,  ,  ,  ,  ]
// [x,  ,  ,  ,  , x]
// [x,  , x,  ,  , x]
// [x,  , x, x,  , x]
// [x, x, x, x,  , x]
// [x, x, x, x, x, x]


// [x,  ,  ,  ,  ,  ,  ]
// [x,  ,  ,  ,  ,  , x]
// [x,  ,  , x,  ,  , x]
// [x, x,  , x,  ,  , x]
// [x, x,  , x, x,  , x]
// [x, x, x, x, x,  , x]
// [x, x, x, x, x, x, x]

// A última posição será sempre n-1 já que a preferência de alocação (mais perto da mesa 1) "obriga" a última
// pessoa a se sentar na penúltima mesa.