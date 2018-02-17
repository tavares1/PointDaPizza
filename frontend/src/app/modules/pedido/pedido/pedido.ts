export class Pedido {
    nomecliente : string;
    nomeatendente: string;
    tempo: number;
    constructor (nomecliente,nomeatendente,tempo){
        this.nomecliente = nomecliente;
        this.nomeatendente = nomeatendente;
        this.tempo = tempo;
    }
}