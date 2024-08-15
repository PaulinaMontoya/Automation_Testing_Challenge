import { HOME_PAGE } from '../../fixtures/data'

export class HomePage {

    constructor() {
        this.homeSection = () => cy.get('#home')
        this.bannerUnSeguroTitle = () => cy.get('.chakra-text.css-88d9wx')
        this.bannerAtuAlcanceTitle = () => cy.get('.chakra-text.css-e2f187')
        this.bannerText = () => cy.get('.chakra-text.css-1ujl827')
        this.contrataAquiButton = () => cy.get('.chakra-button.css-xvh104')
    }

    validateTitleTexts() {
        this.bannerUnSeguroTitle().should('have.text', HOME_PAGE.TITLE_UN_SEGURO)
        this.bannerAtuAlcanceTitle().should('have.text', HOME_PAGE.TITLE_ALCANCE)
    }
    
}

export default new HomePage()
