const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');//Linkando o canvas com o HTML

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = 700;

const palavras = ['MINECRAFT', 'PICA-PAU', 'PSICOLOGO', 'CALABRESA', 'JAVASCRIPT', 'CORAÇÃO', 'ABACAXI', 'TOMADA', 'CACHORRO', 'VERMELHO'];
var sortear = palavras[Math.floor(Math.random() * 2)];
var erros = 0;
var acertos = 0;
var tentativas = "";

desenharPoste();
desenharBarraSuperior();
desenharApoio();
desenharTracos();

window.onkeypress = teclaApertada;

function teclaApertada() {
    if (!tentativas.includes(event.key) && sortear.includes((event.key).toUpperCase())) {
        adicionarTentativa();
        for (var i = 0; i < sortear.length; i++) {
            if (sortear[i] == (event.key).toUpperCase()) {
                ctx.fonte = "35px";
                ctx.fillText((event.key).toUpperCase(), 20 + (35 * 1), 200);
                acertos++;
            }
        }
    } else {
        adicionarTentativa();
        erros;
        desenharBoneco(erros);
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
    if (erros >= 6) {
        ctx.font = "20px Arial";
        ctx.fillText("Game Over!")

    }
}












