
export class Locacao {
    id?: number;
    dataInicio?: string;
    dataFim?: string;
    cliente?: number;
    vendedor?: number;
    veiculo?: number;
    dataDevolucao?: string;
    status?: number = 0;
    fatura?: number;
    nomeCliente?: string;
}