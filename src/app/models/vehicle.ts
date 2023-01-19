import { Rental } from "./rental";

export class Vehicle {
    id?: number;
    modelo?: string;
    categoria?: string;
    precoPorDia?: number;
    precoPorHora?: number;
    rentals?: Rental[];
}