export class AppConstants {

    public static get baseUrl(): string {return "http://localhost:8080/"}

    public static get baseLogin(): string {return this.baseUrl + "login"}
}