let string : string = "";
let cont: number = 0;
string = prompt("Digite uma string");

for (const iterator of string) {
    if(iterator !== " "){
        cont++;
    }
    
}

alert("String: "+string+"  Num. de letras: "+cont);