import { Veiculo } from "./veiculo";
import { Cliente } from "./cliente";
import { Invoice } from "./invoice";
import { Vendedor } from "./vendedor";

export class Locacao {
    id?: number;
    dataInicio?: string;
    dataFim?: string;
    cliente?: Cliente;
    vendedor?: Vendedor;
    veiculo?: Veiculo;
    dataDevolucao?: string;
    status?: string;
    invoice?: Invoice;
}