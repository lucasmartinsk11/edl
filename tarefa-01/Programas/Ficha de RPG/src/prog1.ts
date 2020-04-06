import { Personagem } from "./personagem";
let requestURL:string = 'https://raw.githubusercontent.com/lucasmartinsk11/EDL/master/tarefa-01/Programas/Json/personagens.json';
async function getPersonagens (){
    let response = await fetch(requestURL)
    let user = await response.json();
    return user
}
getPersonagens ().then(p => {
    let personagens : Personagem[] = p;
    console.log(personagens)
});

// let a: string  = $('body').value;
// console.log(a)