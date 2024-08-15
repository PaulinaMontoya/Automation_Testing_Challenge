import { } from '../../fixtures/data'

export class ContractPage {

    constructor() {
        this.contractSection = () => cy.get('[id="contract"]')
        this.contractTitle = () => cy.get('.chakra-text.css-18uxciw')
        this.tenkuPlanImage = () => cy.xpath('//*[@id="contract"]/div/div/div[2]/div[2]/div/div/div[1]/img')
        //Tenku Basico card
        this.basicoCardBacground = () => cy.get('.css-qce6ln')
        //Tenku Plus card
        this.plusCardBacground = () => cy.get('.css-1wvnkhm')
        //Tenku Pro card
        this.proCardBacground = () => cy.get('.css-rf8tje')

    }
    
    validateBasicoCard() {
        this.tenkuPlanImage().should('be.visible').invoke('attr', 'src').should('eq', 'images/plans/basic/logo.png')
        this.basicoCardBacground().should('have.css', 'background-color', 'rgb(67, 217, 170)')    
    }

    validatePlusCard() {
        this.tenkuPlanImage().should('be.visible').invoke('attr', 'src').should('eq', 'images/plans/plus/logo.png')
        this.plusCardBacground().should('have.css', 'background-color', 'rgb(60, 60, 59)')    
    }

    validateProCard() {
        this.tenkuPlanImage().should('be.visible').invoke('attr', 'src').should('eq', 'images/plans/pro/logo.png')
        this.proCardBacground().should('have.css', 'background-color', 'rgb(247, 202, 74)')    
    }

}

export default new ContractPage()