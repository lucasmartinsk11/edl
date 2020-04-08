import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";
import { RenderPersonagem } from "./components/RenderPersonagem";

import { Personagem } from "./components/personagem";
let requestURL:string = 'https://raw.githubusercontent.com/lucasmartinsk11/EDL/master/tarefa-01/Programas/Json/personagens.json';

async function getPersonagens (){
    let response = await fetch(requestURL)
    let user = await response.json();
    return user;
}
getPersonagens ().then(p => {
    console.log(p[0]);
    ReactDOM.render(
        <RenderPersonagem name = {p[0].name} clasS = {p[0].clasS} level = {p[0].level} hp = {p[0].hp} mana = {p[0].mana}/>,
        document.getElementById("example")   
    );
    
});

