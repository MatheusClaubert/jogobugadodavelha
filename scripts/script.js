//Obtendo os elementos do DOM com que vamos interagir

const casas = document.getElementsByTagName('input');

const b_reiniciar = document.getElementById('reiniciar');

const label_jogador = document.getElementById('jogador');

//Definindo variáveis de estado do jogo

var jogador = '_'; //Define o jogador atual (_ = jogador indefinido; X = jogador X, O = jogador O) 
var vencedor = '_'; //Define se há um vencedor ou não (_ = indefinido; X = jogador X, O = jogador O) 
var finish;

for (var i = 0; i < 9; i++) {
	casas[i].addEventListener('click', (event) => {
		//se a casa estiver vazia e ninguém tiver vencido a partida
		if ((event.target.value == '_') && (vencedor == '_')) {
			event.target.value = jogador; //preenche a casa com X ou O
			event.target.style.color = '#000'; //torna o valor da casa visível

			trocarJogador();

			vencedor = vitoria();

		}
	});
}

b_reiniciar.addEventListener('click', (event) => {
	for (var i = 0; i < 9; i++) {
		casas[i].value = '_'; //Limpa todas as casas
		casas[i].style.color = '#f0f8ff'; //Torna o valor _ invisível
		casas[i].style.backgroundColor = '#f0f8ff'; //Torna o fundo branco
	}

	vencedor = '_'; //Reseta o vencedor

	sortearJogador(); //Escolhe aleatoriamente qual jogador irá começar
});


var sortearJogador = function () {
	if (Math.floor(Math.random() * 2) == 0) {
		jogador = "O"; //define o jogador O como atual
		label_jogador.innerText = "O";
		label_jogador.style.color = '#ff0000';
	} else {
		jogador = "X";//define o jogador X como atual
		label_jogador.innerText = "X";
		label_jogador.style.color = '#993399';
	}
}

sortearJogador();

//Alterna a vez entre os jogadores X e O
var trocarJogador = function () {
	if (jogador == 'X') {
		jogador = 'O';
		label_jogador.innerText = 'O';
		label_jogador.style.color = '#ff0000 ';

	} else {
		jogador = 'X';
		label_jogador.innerText = 'X';
		label_jogador.style.color = '#993399';
	}
}

//Se a vitória foi atingida, colore a linha da vitória
var vitoria = function () {
	if ((casas[0].value == casas[1].value) && (casas[1].value == casas[2].value) && casas[0].value != '_') {
		casas[0].style.backgroundColor = '#0000FF';
		casas[1].style.backgroundColor = '#0000FF';
		casas[2].style.backgroundColor = '#0000FF';

		alert('Vitória')
		return casas[0].value;



	} else if ((casas[3].value == casas[4].value) && (casas[4].value == casas[5].value) && casas[3].value != '_') {
		casas[3].style.backgroundColor = '#0000FF';
		casas[4].style.backgroundColor = '#0000FF';
		casas[5].style.backgroundColor = '#0000FF';



		alert('Vitória')
		return casas[3].value;


	} else if ((casas[6].value == casas[7].value) && (casas[7].value == casas[8].value) && casas[6].value != '_') {
		casas[6].style.backgroundColor = '#0000FF';
		casas[7].style.backgroundColor = '#0000FF';
		casas[8].style.backgroundColor = '#0000FF';

		alert('Vitória')
		return casas[6].value;

	} else if ((casas[0].value == casas[3].value) && (casas[3].value == casas[6].value) && casas[0].value != '_') {
		casas[0].style.backgroundColor = '#0000FF';
		casas[3].style.backgroundColor = '#0000FF';
		casas[6].style.backgroundColor = '#0000FF';

		alert('Vitória')
		return casas[0].value;

	} else if ((casas[1].value == casas[4].value) && (casas[4].value == casas[7].value) && casas[1].value != '_') {
		casas[1].style.backgroundColor = '#0000FF';
		casas[4].style.backgroundColor = '#0000FF';
		casas[7].style.backgroundColor = '#0000FF';

		alert('Vitória')
		return casas[1].value;

	} else if ((casas[2].value == casas[5].value) && (casas[5].value == casas[8].value) && casas[2].value != '_') {
		casas[2].style.backgroundColor = '#0000FF';
		casas[5].style.backgroundColor = '#0000FF';
		casas[8].style.backgroundColor = '#0000FF';

		alert('Vitória')
		return casas[2].value;
	} else if ((casas[0].value == casas[4].value) && (casas[4].value == casas[8].value) && casas[0].value != '_') {
		casas[0].style.backgroundColor = '#0000FF';
		casas[4].style.backgroundColor = '#0000FF';
		casas[8].style.backgroundColor = '#0000FF';

		alert('Vitória')
		return casas[0].value;

	} else if ((casas[2].value == casas[4].value) && (casas[4].value == casas[6].value) && casas[2].value != '_') {
		casas[2].style.backgroundColor = '#0000FF';
		casas[4].style.backgroundColor = '#0000FF';
		casas[6].style.backgroundColor = '#0000FF';

		alert('Vitória')
		return casas[2].value;
	}


	return '_';
}