import { Vehicle } from "./vehicle";
import { Client } from "./client";
import { Invoice } from "./invoice";
import { Seller } from "./seller";

export class Rental {
    id?: number;
    dataInicio?: string;
    dataFim?: string;
    cliente: Client;
    vendedor?: Seller;
    veiculo: Vehicle;
    dataDevolucao?: string;
    status?: string;
    invoice?: Invoice;
}