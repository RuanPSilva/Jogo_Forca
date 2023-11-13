const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');//Linkando o canvas com o HTML

ctx.canvas.width = 1400;
ctx.canvas.height = 900;

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
                ctx.fonte = "70px";
                ctx.fillText((event.key).toUpperCase(), 60 + (70 * i), 400);
                acertos++;
            }
        }
    } else {
        adicionarTentativa();
        quantidadeErros++;
        desenharBoneco(quantidadeErros);
    }
    verificarFimJogo();
}

function adicionarTentativa() {
    if (!tentativas.includes(event.key)) {
        tentativas = tentativas + event.key;
        ctx.font = "40px Arial";
        ctx.fillText("Tentativas: " + tentativas.toUpperCase(), 40, 560);
    }
}

function verificarFimJogo() {
    if (quantidadeErros >= 6) {
        ctx.font = "40px Arial";
        ctx.fillText("Game Over! A palavra era: " + palavraSecreta, 400, 200);
		window.onkeypress = null;
		return;
   }

   if (acertos == palavraSecreta.length) {
	   ctx.font = "40px Arial";
	   ctx.fillText("Você ganhou", 400, 200);
	   window.onkeypress= null;
	   return;
   }
   
}

function desenharPoste() {
	ctx.moveTo(20, 20);
	ctx.lineTo(20, 200);
	ctx.stroke();
}

function desenharBarraSuperior() {
	ctx.moveTo(20, 20);
	ctx.lineTo(120, 20);
	ctx.stroke();
}

function desenharApoio() {
	ctx.moveTo(120, 20);
	ctx.lineTo(120, 60);
	ctx.stroke();
}

function desenharTracos() {
	for (var i = 0; i < palavraSecreta.length; i++) {
		ctx.moveTo(40 + (70 * i), 400);
		ctx.lineTo(100 + (70 * i), 400);
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
	ctx.arc(120, 80, 20, 0, 2 * Math.PI);
	ctx.stroke();
}

function desenharTronco() {
	ctx.moveTo(120, 100);
	ctx.lineTo(120, 160);
	ctx.stroke();
}

function desenharBracoEsquerdo() {
	ctx.moveTo(120, 120);
	ctx.lineTo(100, 140);
	ctx.stroke();
}

function desenharBracoDireito() {
	ctx.moveTo(120, 120);
	ctx.lineTo(140, 140);
	ctx.stroke();
}

function desenharPernaEsquerda() {
	ctx.moveTo(120, 160);
	ctx.lineTo(100, 180);
	ctx.stroke();
}

function desenharPernaDireita() {
	ctx.moveTo(120, 160);
	ctx.lineTo(140, 180);
	ctx.stroke();
}













