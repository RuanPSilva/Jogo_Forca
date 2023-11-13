const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');//Linkando o canvas com o HTML

ctx.canvas.width = 700;
ctx.canvas.height = 300;

const palavras = ['MINECRAFT', 'PICA-PAU', 'PSICOLOGO', 'CALABRESA', 'JAVASCRIPT', 'CORAÇÃO', 'ABACAXI', 'TOMADA', 'CACHORRO', 'VERMELHO'];
var quantidadeErros = 0;
var acertos = 0;
var tentativas = "";
palavraSecreta  = palavras[Math.floor(Math.random() * 10)];

desenharPoste();
desenharBarraSuperior();
desenharApoio();
desenharTracos();

window.onkeypress = teclaPressionada;

function teclaPressionada() {
    if (!tentativas.includes(event.key) && palavraSecreta.includes((event.key).toUpperCase())) {
        adicionarTentativa();
        for (var i = 0; i < palavraSecreta.length; i++) {
            if (palavraSecreta [i] == (event.key).toUpperCase()) {
                ctx.fonte = "35px";
                ctx.fillText((event.key).toUpperCase(), 20 + (35 * 1), 200);
                acertos++;
            }
        }
    } else {
        adicionarTentativa();
        quantidadeErros;
        desenharBoneco(quantidadeErros);
    }
    verificarFimJogo();
}

function adicionarTentativa() {
    if (!tentativas.includes(event.key)) {
        tentativas = tentativas + event.key;
        ctx.font = "20px Arial";
        ctx.fillText("Tentativas: " + tentativas.toUpperCase(), 20, 280);
    }
}

function verificarFimJogo() {
    if (quantidadeErros >= 6) {
        ctx.font = "20px Arial";
        ctx.fillText("Game Over!")

 
   }
   if (acertos == palavraSecreta.length) {
	   ctx.font = "20px Arial";
	   ctx.fillText("Voçê ganhou", 200, 100);
	   window.onkeypress= null;
	   return;
   }
   
}

function desenharPoste() {
	ctx.moveTo(10, 10);
	ctx.lineTo(10, 100);
	ctx.stroke();
}

function desenharBarraSuperior() {
	ctx.moveTo(10, 10);
	ctx.lineTo(60, 30);
	ctx.stroke();
}

function desenharApoio() {
	ctx.moveTo(60, 10);
	ctx.lineTo(60, 30);
	ctx.stroke();
}

function desenharTracos() {
	for (var i = 0; i < palavraSecreta.length; i++) {
		ctx.moveTo(20 + (35 * i), 200);
		ctx.lineTo(50 + (35 * i), 200);
		ctx.stroke();
	}
}

function desenharBoneco(quantidadeErros) {
	switch (quantidadeErros) {
		case 1:
			desenharCabeca();
			break;
		case 2:
			desenharTronco();
			break;
		case 3:
			desenharBracoEsquerdo();
			break;
		case 4:
			desenharBracoDireito();
			break;
		case 5:
			desenharPernaEsquerda();
			break;
		case 6:
			desenharPernaDireita();
			break;
	}
}

function desenharCabeca() {
	ctx.beginPath();
	ctx.arc(50, 40, 10, 0, 2 * Math.PI);
	ctx.stroke();
}

function desenharTronco() {
	ctx.moveTo(60, 50);
	ctx.lineTo(60, 80);
	ctx.stroke();
}

function desenharBracoEsquerdo() {
	ctx.moveTo(60, 60);
	ctx.lineTo(50, 70);
	ctx.stroke();
}

function desenharBracoDireito() {
	ctx.moveTo(60, 60);
	ctx.lineTo(70, 70);
	ctx.stroke();
}

function desenharPernaEsquerda() {
	ctx.moveTo(60, 80);
	ctx.lineTo(50, 90);
	ctx.stroke();
}

function desenharPernaDireita() {
	ctx.moveTo(60, 80);
	ctx.lineTo(70, 90);
	ctx.stroke();
}

		
	













