import { Invoice } from "./invoice";
import { Vendedor } from "./vendedor";

export class Locacao {
    id?: number;
    dataInicio?: string;
    dataFim?: string;
    cliente?: number;
    vendedor?: Vendedor;
    veiculo?: number;
    dataDevolucao?: string;
    status?: string;
    invoice?: Invoice;
    nomeCliente?: string;
}