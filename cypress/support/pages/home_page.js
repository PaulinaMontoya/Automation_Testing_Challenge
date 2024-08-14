import { } from '../../fixtures/data';

export class ContractPage {

    constructor() {
        this.homeSection = () => cy.get('[id="home"]')
    }


}

export default new ContractPage();