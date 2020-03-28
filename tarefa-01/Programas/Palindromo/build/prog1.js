var palindromo = prompt("Digite uma string sem espacos");
var teste;
for (var index = 0; index < palindromo.length; index++) {
    if (palindromo[index] !== palindromo[palindromo.length - 1 - index]) {
        alert("Nao e palindromo");
        teste = false;
        break;
    }
    teste = true;
}
if (teste) {
    alert("A string e palindroma");
}
