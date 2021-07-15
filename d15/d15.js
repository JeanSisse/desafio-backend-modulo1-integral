// Cofre Bugadão

const input = "cubos\newvelrabsocaeln";

function cofre_bugado (input){
	const arraySenhas = input.split("\n");
	let senha = arraySenhas[0].split("");
	let senhaDigitada = arraySenhas[1].split("");

	let senhaValidada = "";
	let index = 0;
	for(let car of senha){
		index = senhaDigitada.indexOf(car);
		if (index >= 0) {
			senhaValidada = senhaValidada.concat(senhaDigitada[index]);

			while(index >= 0){
				senhaDigitada.shift();
				index--;
			}
		}
	}

	senha = senha.join('');
	console.log(`${senha === senhaValidada ? "SIM" : "NAO"}`);
}

cofre_bugado(input);


// [ 'c', 'u', 'b', 'o', 's' ]
// [ 'c', 'u', 'g', 'g', 'b', 'y', 'o', 's' ]
// 3
// 2
// 1
// 0