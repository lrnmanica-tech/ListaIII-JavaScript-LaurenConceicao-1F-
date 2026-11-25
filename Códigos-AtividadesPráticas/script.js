const NOTA_MINIMA = 6;
function calcularMedia (n1, n2) {
    let media=(n1+n2)/2;
    return media;
}
function notaValida (n) {
    if (!Number.isNaN(n) && n>=0 && n<=10){
        return true;
    }else{
        return false;
    }
}
const botaoCalcular=document.getElementById ("calcular") ;
const resultado=document.getElementById ("resultado") ;
botaoCalcular.addEventListener ("click", () => {
const texto1=document.getElementById ("nota1").value ;
const texto2=document.getElementById ("nota2").value ;
const n1=Number(texto1);
const n2=Number(texto2);
console.log("Digitado:", texto1 , texto2 , typeof texto1 ) ;
if (texto1=="" || texto2==""||!notaValida(n1)||!notaValida(n2)){
    resultado.textContent="Informe duas notas entre 0 e 10!";
    return;
}
const media=calcularMedia(n1,n2)
let situacao;
if (media>=NOTA_MINIMA){
    situacao="Aprovado!";
} else {
    situacao="Abaixo da média!";
}
resultado.textContent=`Média: ${media.toFixed(1)} - Situação: ${situacao}`;
});