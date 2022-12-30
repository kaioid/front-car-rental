import { Vehicle } from "./car";
import { Client } from "./client";
import { Invoice } from "./invoice";

export class Rental {
    id?: number;
    start?: string;
    finish?: string;
    client?: Client;
    vehicle?: Vehicle;
    dateReturn?: string;
    invoice?: Invoice;
}