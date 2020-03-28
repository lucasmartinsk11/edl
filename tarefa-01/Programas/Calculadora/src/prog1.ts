let array : Array<number> =[];
let aux : number;
let operador: string;
let operacao : number;

for(let i :number = 0; i < 2; i++){
    aux = parseFloat(prompt("Digite um numero"));
    array.push (aux);
}

operador = prompt("Digite + p/ som, - p/ sub, * p/ mult, / p/ div");

switch(operador){
    case "+":
        operacao = array[0]+array[1]
        alert("A soma e: "+operacao)
        break;
    case "-":
        operacao = array[0]-array[1]
        alert("A sub e: "+operacao)
        break;
    case "*":
        operacao = array[0]*array[1]
        alert("A mult e: "+operacao)
        break;
    case "/":
        if(array[1] !== 0){
            operacao = array[0]/array[1]
            alert("A div e: "+operacao)
        }
        else{
            alert("Nao e aceito zero como divisor")
        }
        break;
        
    default:
        alert("Operacao invalida")

}