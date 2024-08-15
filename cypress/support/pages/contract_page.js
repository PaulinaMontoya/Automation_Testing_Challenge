import { CONTRACT } from '../../fixtures/data'

export class ContractPage {

    constructor() {
        this.contractSection = () => cy.get('[id="contract"]')
        this.contractTitle = () => cy.get('.chakra-text.css-18uxciw')
        this.contractText = () => cy.get('.chakra-text css-1269fnj')
        this.tenkuPlanImage = () => cy.xpath('//*[@id="contract"]/div/div/div[2]/div[2]/div/div/div[1]/img')
        this.messageToad = () => cy.get('[data-status="success"]')
        //Tenku Basico card
        this.basicoCardBacground = () => cy.get('.css-qce6ln')
        //Tenku Plus card
        this.plusCardBacground = () => cy.get('.css-1wvnkhm')
        //Tenku Pro card
        this.proCardBacground = () => cy.get('.css-rf8tje')
        //Form
        this.nameInput = () => cy.get('#name')
        this.motherLastNameInput = () => cy.get('#surname1')
        this.fatherLastNameInput = () => cy.get('#surname2')
        this.telephoneInput = () => cy.get('#phone')
        this.calendarInput = () => cy.get('#birthdate')
        this.cpInput = () => cy.get('#cp')
        this.emailInput = () => cy.get('#email')
        this.basicoButton = () => cy.get('.css-1qvf6l6').contains('Básico')
        this.plusButton = () => cy.get('.css-1qvf6l6').contains('Plus')
        this.proButton = () => cy.get('.css-1qvf6l6').contains('Pro')
        this.contrataButton = () => cy.get('[type="submit"]')
        this.termsAndConditionsCheckbox = () => cy.get('[name="terms"]')
        this.privacyConditionsText  = () => cy.get('[class="css-13ql39d"]')

    }
    
    fillCommonInputsForm() {
        this.nameInput().type(CONTRACT.NAME).should('have.attr', 'value', CONTRACT.NAME)
        this.motherLastNameInput().type(CONTRACT.LASTNAME).should('have.attr', 'value', CONTRACT.LASTNAME)
        this.fatherLastNameInput().type(CONTRACT.LASTNAME).should('have.attr', 'value', CONTRACT.LASTNAME)
        this.telephoneInput().type(CONTRACT.TELEPHONE).should('have.attr', 'value', CONTRACT.TELEPHONE)
        this.calendarInput().type(CONTRACT.DATE).should('have.attr', 'value', CONTRACT.DATE)
        this.cpInput().type(CONTRACT.CP).should('have.attr', 'value', CONTRACT.CP)
        this.emailInput().type(CONTRACT.TELEPHONE).should('have.attr', 'value', CONTRACT.TELEPHONE)
    }

    selectBasicoButton() {
        this.basicoButton().click()
        this.termsAndConditionsCheckbox().check().should('be.checked')
        this.contrataButton().click()
    }

    selectPlusButton() {
        this.plusButton().click()
        this.termsAndConditionsCheckbox().check().should('be.checked')
        this.contrataButton().click()
    }
    selectProButton() {
        this.proButton().click()
        this.termsAndConditionsCheckbox().check().should('be.checked')
        this.contrataButton().click()
    }

    validateContracSuccessfully() {
        cy.waitUntil(() => this.messageToad().should('have.text', CONTRACT.SUCCESS_MESSAGE));
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