import { Locacao } from "./locacao";

export class Fatura {
    id?: number;
    pagamentoBasico?: number;
    taxa?: number;
    pagamentoTotal?: number;
    locacao: Locacao;
}