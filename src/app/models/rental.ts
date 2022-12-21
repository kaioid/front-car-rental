export class Rental {
    id: number;
    start: string;
    finish: string;
    client: {
        "id": number
    };
    vehicle: {
        "id": number
    };
    dateReturn: string;
}