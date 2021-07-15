// Zerinho ou Um

const jogadores = [
  {
    "nome": "Herman",
    "jogada": 1
  },
  {
    "nome": "Rhodes",
    "jogada": 0
  },
  {
    "nome": "Beach",
    "jogada": 0
  },
  {
    "nome": "Laurel",
    "jogada": 0
  },
  {
    "nome": "Beatrice",
    "jogada": 0
  },
  {
    "nome": "Alison",
    "jogada": 0
  },
  {
    "nome": "Saundra",
    "jogada": 0
  },
  {
    "nome": "Klein",
    "jogada": 1
  }
]

const zeros = jogadores.filter(x => x.jogada === 0).length;
const uns = jogadores.filter(x => x.jogada === 1).length;

let jogador;

if (zeros > 1 && uns > 1) {
	console.log("NINGUEM");
} else if (zeros === 1) {
	jogador = jogadores.find(x => x.jogada === 0);
	console.log(`${jogador.nome}`);
} else {
	jogador = jogadores.find(x => x.jogada === 1);
	console.log(`${jogador.nome}`);
}
console.log(`${zeros} ${uns}`);