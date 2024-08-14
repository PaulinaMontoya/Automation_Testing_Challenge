import { COMMON_PAGE } from '../../fixtures/data';

export class CommonPage {

    constructor() {
        this.logoImage = () => cy.get('[src="logo.png"]')
        this.inicioButton = () => cy.get('.chakra-button.css-yk6dhm').contains(COMMON_PAGE.INICIO)
        this.descubreTenkuButton = () => cy.get('.chakra-button.css-yk6dhm').contains(COMMON_PAGE.DESCUBRE_TENKU)
        this.membresiasButton = () => cy.get('.chakra-button.css-yk6dhm').contains(COMMON_PAGE.MEMBRESIAS)
        this.contrataAquiButton = () => cy.get('button').contains(COMMON_PAGE.CONTRATA_AQUÍ)
    }

}

export default new CommonPage();