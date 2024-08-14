import { } from '../../fixtures/data';

export class ContractPage {

    constructor() {
        this.contractSection = () => cy.get('[id="contract"]')
    }

    
    validateColorBackground() {
        //cy.get('body').should('have.css', 'background-color', 'rgb(0, 0, 0)')
    }

}

export default new ContractPage();