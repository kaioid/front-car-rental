import { Locacao } from "./locacao";

export class Veiculo {
    id?: number;
    modelo?: string;
    categoria?: string;
    precoPorDia?: number;
    precoPorHora?: number;
    locacoes?: Locacao[];
}