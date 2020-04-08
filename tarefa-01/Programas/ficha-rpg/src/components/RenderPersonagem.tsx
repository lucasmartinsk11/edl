import * as React from "react";
import { Personagem } from "./personagem";

export class RenderPersonagem extends React.Component<Personagem, {}> {
    render() {
        return <h1>Nome: {this.props.name} 
        <br></br> Class: {this.props.clasS} 
        <br></br> Level: {this.props.level} 
        <br></br> HP: {this.props.hp}
        <br></br> Mana: {this.props.mana}
        </h1>;
    }
}



