const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');//Linkando o canvas com o HTML

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = 700;

const palavras = ['MINECRAFT', 'PICA-PAU'];
var sortear = palavras[Math.floor(Math.random() * 2)];
var quantLetras = sortear.length;

const numA = Math.floor(Math.random() * 10) + 1;
console.log(numA);

if (numA == 1) {
    ctx.font = "25px arial";
    ctx.fillText("Dica: Um dos jogos mais famosos e vendidos pelo mundo", 10, 680);//Minecraft

} else if (numA == 2) {
    ctx.font = "25px arial";
    ctx.fillText("Dica: Especíe de animal extinta ", 10, 680);//Pica pau

} else if (numA == 3) {
    ctx.font = "25px arial";

    ctx.fillText("Dica: Profissão", 10, 680);//Psicologo
} else if (numA == 4) {
    ctx.font = "25px arial";
    ctx.fillText("Dica: Comida", 10, 680);//Calabresa

} else if (numA == 5) {
    ctx.font = "25px arial"
    ctx.fillText("Dica: Linguagem de programação", 10, 680);//Javascript

} else if (numA == 6) {
    ctx.font = "25px arial"
    ctx.fillText("Dica: Parte do corpo humano", 10, 680);//Coração
}
else if (numA == 7) {
    ctx.font = "25px arial"
    ctx.fillText("Dica: Fruta", 10, 680);//Abacaxi

} else if (numA == 8) {
    ctx.font = "25px arial"
    ctx.fillText("Dica: Entrada de energia", 10, 680);//Tomada

} else if (numA == 9) {
    ctx.font = "25px arial"
    ctx.fillText("Dica: Animal", 10, 680);//Cachcorro

} else if (numA == 10) {
    ctx.font = "25px arial"
    ctx.fillText("Dica: Cor", 10, 680);//Vermelho

}









