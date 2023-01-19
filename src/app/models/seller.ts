import { Person } from "./person";
import { Rental } from "./rental";

export class Seller extends Person{
    id?: number;
    rentals?: Rental[];

    constructor (
        cpf: string,
        nome: string,
        email: string,
        senha: string,
        cep: string,
        logradouro: string,
        complemento: string,
        numero: string,
        bairro: string,
        localidade: string,
        uf: string
        ) 
        {
            super();
            this.cpf = cpf;
            this.nome = nome;
            this.email = email;
            this.senha = senha;
            this.cep = cep;
            this.logradouro = logradouro;
            this.complemento = complemento;
            this.numero = numero;
            this.bairro = bairro;
            this.localidade = localidade;
            this.uf = uf;
        }
}