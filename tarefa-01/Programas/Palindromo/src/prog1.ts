let palindromo : string = prompt("Digite uma string sem espacos")
let teste : boolean;

for (let index : number = 0; index < palindromo.length; index++) {
    
    if(palindromo[index] !== palindromo[palindromo.length-1-index]){
        alert("Nao e palindromo")
        teste = false;
        break;
    }
    teste = true;
}
if(teste){
    alert("A string e palindroma")
}