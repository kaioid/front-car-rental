import { TestBed } from "@angular/core/testing";
import { ClientService } from "./client.service"

describe('ClientService', () => {
    let service: ClientService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ClientService);
    });

    it('Cliente criado!', () => {
        expect(service).toBeTruthy();
    });
});