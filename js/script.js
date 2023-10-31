const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');//Linkando o canvas com o HTML

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = 700;


const numA = Math.floor(Math.random() * 1) + 1 ;
console.log(numA);

if (numA == 1) {
    ctx.font = "25px arial";
    ctx.fillText("Dica:Um dos jogos mais famosos e vendidos pelo mundo", 10, 50);//Minecraft
    
    ctx.beginPath();
    ctx.moveTo(930,130);
    ctx.lineTo(1030,130);
    ctx.stroke();

} else if (numA == 2) {
    ctx.font = "25px arial";
    ctx.fillText("Dica:Especíe de animal extinta ", 10, 50);//Pica pau

} else if(numA == 3) {
    ctx.font = "25px arial";

    ctx.fillText("Dica:Profissão", 10, 50);//Psicologo
} else if(numA == 4) {
    ctx.font = "25px arial";
    ctx.fillText("Dica:Comida", 10, 50);//Calabresa

} else if(numA == 5) {
    ctx.font ="25px arial"
    ctx.fillText("Dica:Linguagem de programação", 10, 50);//Javascript

} else if(numA == 6) {
    ctx.font ="25px arial"
    ctx.fillText("Dica:Parte do corpo humano", 10, 50);//Coração
}
 else if(numA == 7) {
    ctx.font ="25px arial"
    ctx.fillText("Dica:Fruta", 10, 50);//Abacaxi

} else if(numA == 8) {
    ctx.font ="25px arial"
    ctx.fillText("Dica:Entrada de energia", 10, 50);//Tomada

} else if(numA == 9) {
    ctx.font ="25px arial"
    ctx.fillText("Dica:Animal", 10, 50);//Cachcorro

} else if(numA == 10) {
    ctx.font ="25px arial"
    ctx.fillText("Dica:Cor", 10, 50);//Vermelho

}






    


