import { LightningElement } from "lwc";

export default class App extends LightningElement {
    visivel = true; //boolean

    empresa = "NAISU";
    cnpj = "33399922255";
    endereco = "Rua do Boi";


    produto = "Shampoo de Ovelha";
    descricao = "Muito bom";
    preco = "R$ 10,00";
    promocao = "O gerente está louco";
    oferta1 = "Dromedário por R$10,00";
    oferta2 = "Cálice sagrado por R$1,99"

    onClick() {
        this.visivel = !this.visivel;
    }
}