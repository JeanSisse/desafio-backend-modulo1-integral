// cAPS lOCK oN

/*

vOCÊ ESTÁ DESENVOLVENDO UM FORMULÁRIO DE CADASTRO E NOS 
PRIMEIROS TESTES DE USABILIDADE COM USUÁRIOS REAIS NOTOU ALGO 
PECULIAR: mUITOS USUÁRIOS PREENCHEM O FORMULÁRIO TODO COM A TECLA
 cAPS lOCK ATIVA, DEIXANDO TUDO BEM MENOS AGRADÁVEL DE LER. a SOLUÇÃO
  ESCOLHIDA NO dAILY DO DIA SEGUINTE FOI DE DETECTAR QUANDO
  O USUÁRIO ESTÁ ESCREVENDO DESSA FORMA E CORRIGIR AUTOMATICAMENTE. 
  vOCÊ DEVE AGORA ESCREVER ESSE ALGORITMO.

cONSIDERAMOS QUE UMA PALAVRA FOI ESCRITA COM cAPS lOCK SE 
OU TODAS AS SUAS LETRAS FOREM MAIÚSCULAS OU SE A PRIMEIRA FOR 
MINÚSCULA E TODAS AS OUTRAS MAIÚSCULAS. a CORREÇÃO NESSES CASOS 
É INVERTER TODAS AS LETRAS.

*/

let palavras = "vOCÊ ESTÁ DESENVOLVENDO UM FORMULÁRIO DE CADASTRO E NOS PRIMEIROS TESTES DE USABILIDADE COM USUÁRIOS REAIS NOTOU ALGO PECULIAR: mUITOS USUÁRIOS PREENCHEM O FORMULÁRIO TODO COM A TECLA cAPS lOCK ATIVA, DEIXANDO TUDO BEM MENOS AGRADÁVEL DE LER. a SOLUÇÃO ESCOLHIDA NO dAILY DO DIA SEGUINTE FOI DE DETECTAR QUANDO O USUÁRIO ESTÁ ESCREVENDO DESSA FORMA E CORRIGIR AUTOMATICAMENTE. vOCÊ DEVE AGORA ESCREVER ESSE ALGORITMO. cONSIDERAMOS QUE UMA PALAVRA FOI ESCRITA COM cAPS lOCK SE OU TODAS AS SUAS LETRAS FOREM MAIÚSCULAS OU SE A PRIMEIRA FOR MINÚSCULA E TODAS AS OUTRAS MAIÚSCULAS. a CORREÇÃO NESSES CASOS É INVERTER TODAS AS LETRAS.";

function caps_lock_on(input) {
	const palavras = input.split("\n").join(" ");
	const arrayPalavras = palavras.split(" ");
	let palavrasFormatada = "";
	let count = 0;

	for (let i = 0; i < arrayPalavras.length; i++) {
		// const palavra = arrayPalavras[i];
		 count++;
		if (arrayPalavras[i] === arrayPalavras[i].toUpperCase()) {
				arrayPalavras[i] = arrayPalavras[i].toLowerCase();
		} else {
			if (arrayPalavras[i].charAt(0) === arrayPalavras[i].charAt(0).toLowerCase() && arrayPalavras[i].substr(1).toUpperCase() === arrayPalavras[i].substr(1)) {
				arrayPalavras[i] = arrayPalavras[i].charAt(0).toUpperCase().concat(arrayPalavras[i].substr(1).toLowerCase());
			}
		}

		if (count === arrayPalavras.length)
			palavrasFormatada = palavrasFormatada.concat(arrayPalavras[i]);
		else
			palavrasFormatada = palavrasFormatada.concat(arrayPalavras[i], " ");

	}
	console.log(palavrasFormatada);

	//console.log(arrayPalavras);
}

caps_lock_on(palavras);