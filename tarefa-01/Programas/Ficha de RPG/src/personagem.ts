class personagem{
     private name : string;
     private clasS: string;
     private level: number;
     private hp: number;
     private mana: number;

     public setName = (name:string)=>{
        this.name = name;
    }
    public setClass = (clasS:string)=>{
        this.clasS = clasS;
    }
    public setLevel = (level:number)=>{
        this.level = level;
    }
    public setHp = (hp:number)=>{
        this.hp = hp;
    }
    public setMana = (mana:number)=>{
        this.mana = mana;
    }

    public getName = (): string =>{
        return this.name;
    }
    public getClass = (): string =>{
        return this.clasS;
    }
    public getLevel = (): number =>{
        return this.level;
    }
    public getHp = (): number =>{
        return this.hp;
    }
    public getMana = (): number =>{
        return this.mana;
    }
}